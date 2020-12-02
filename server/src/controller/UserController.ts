import { getRepository, getConnection } from "typeorm"
import { Request, Response} from "express"
import { Registration } from "../entity/Registration"
import { Profile } from "../entity/Profile"
import { User } from "../entity/User"
import { Medical_Exam } from "../entity/Medical_Exam"
import { Secretary } from "../entity/Secretary"
import { Doctor } from "../entity/Doctor"
import { Teacher } from "../entity/Teacher"

/** DOC: 1,
 *  User needs create your profile, when the user enter to the system he will create him 
 *  login in the "created_user", he needs to be registered by secretary.
 */

/** DOC: 2,
 *  User has 3 actions (for a while). Creates him profile, show him profile and medical 
 *  exam.
 */

export const createProfile = async(request: Request, response: Response) => {
    const validate = request.params.email;
    
    try {
        const checkUser = await getConnection().createQueryBuilder().select("user").from(User, "user").where("user.email = :email", { email: validate }).getOne()

        if (checkUser.id != null) {
            const createProfile = await getRepository(Profile).save(request.body)
            
            if (createProfile.id != null) {
                const updateUser = await getConnection().createQueryBuilder().update(User).set({ profile_u: createProfile.id, pending_profile: false }).where("email = :email", { email: validate }).execute()
                
                if (updateUser.affected == 1) {
                    response.status(201).json(createProfile)
                }
                else {
                    response.status(400).json({ message: "Failed to update the table user." })     
                }
            } else {
                response.status(400).json({ message: "Failed to create." })    
            }
        } else {
            response.status(400).json({ message: "The email provided does not exist." })
        }
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const showProfile = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
        const myProfile = await getRepository(User).createQueryBuilder("user").leftJoinAndSelect("user.profile_u", "profile").where("user.id = :id", { id: id }).getOne()
        response.status(200).json(myProfile)
   
    } catch(err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const userAuthentication = async (request: Request, response: Response) => {
    const { login, password } = request.body
    const exams = []
    var user_exams = {}

    try {
        const permission = await getRepository(Profile).findOne({where: {login: login, password: password}})

        if (permission.id != null) {
            switch(permission.permission_number) {
                case 1000:
                    console.log("valida usuário")
                    const user_data = await getRepository(User).createQueryBuilder("user").leftJoinAndSelect("user.profile_u", "profile").leftJoinAndSelect("user.registration_u", "registration").where("user.profile_u.id = :id", { id: permission.id }).getOne()
                    const user_medical_exam = await getRepository(Medical_Exam).createQueryBuilder("medical_exam").leftJoinAndSelect("medical_exam.user", "user").leftJoinAndSelect("medical_exam.physical_aptitude", "physical_condition").where("medical_exam.user =:id", {id: user_data.id}).getOne()
                    
                    exams.push(user_medical_exam)
                    user_exams['exams'] = exams

                    response.status(200).json(Object.assign({}, user_data, user_exams))
                    break

                case 2000:  
                    const secretary_data = await getRepository(Secretary).createQueryBuilder("secretary").leftJoinAndSelect("secretary.profile_s", "profile").where("secretary.profile_s.id = :id", { id: permission.id }).getOne()
                    response.status(200).json(secretary_data)  
                    break

                case 3000:    
                    const doctor_data = await getRepository(Doctor).createQueryBuilder("doctor").leftJoinAndSelect("doctor.profile_d", "profile").where("doctor.profile_d.id = :id", { id: permission.id }).getOne()
                    response.status(200).json(doctor_data)
                    break

                case 4000:
                    const teacher_data = await getRepository(Teacher).createQueryBuilder("teacher").leftJoinAndSelect("teacher.profile_t", "profile").where("teacher.profile_t.id = :id", { id: permission.id }).getOne()
                    response.status(200).json(teacher_data)
                    break
            }
        } 
   
    } catch(err) {
        response.status(400).json({ message: "PERMISSION_DENIED"})
    }
}