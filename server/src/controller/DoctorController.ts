import { getRepository, getConnection } from "typeorm"
import { Request, Response} from "express"
import { Medical_Exam } from "../entity/Medical_Exam"
import { Doctor } from "../entity/Doctor"
import { User} from "../entity/User"

/** DOC: 1,
 *  Validate exam of all users. If the result_exam true, update in the entity user pending
 *  exam to true.
 */

export const showProfile = async (request: Request, response: Response) => {
    const { id } = request.params
    
    try {
        const myProfile = await getRepository(Doctor).createQueryBuilder("doctor").leftJoinAndSelect("doctor.profile_d", "profile").where("doctor.id = :id", { id: id }).getOne()
        response.status(200).json(myProfile)
    
    } catch(err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const listUsersExams = async (request: Request, response: Response) => {
    try {
       const listAll = await getRepository(Medical_Exam).find({ relations: ["user"]})
       return response.status(200).json(listAll)
   
    } catch(err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}  

export const validateUserExam = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
        const exam = await getRepository(Medical_Exam).update(id, request.body)
        
        if (exam.affected == 1) {
            try {
                const examUpdated = await getRepository(Medical_Exam).findOne(id)
            
                if (examUpdated.id != null) {
                    const getUserId = await getRepository(Medical_Exam).createQueryBuilder("medical_exam").leftJoinAndSelect("medical_exam.user", "user").where("medical_exam.id = :id", { id: examUpdated.id }).getOne()
                    const userExamUpdate = await getConnection().createQueryBuilder().update(User).set({ pending_exam: false }).where("id = :id", { id: getUserId.user.id }).execute()
                    
                    if (userExamUpdate.affected == 1) 
                        response.status(201).json(userExamUpdate)
                    else
                        response.status(400).json({ message: "Failed to update the user." })
                } else {
                    response.status(400).json({ message: "Exam not found." })
                } 
            } catch(err) {
                response.status(400).json({ message: "Request Fail!!" + err })
            }    
        } else {
            response.status(400).json({ message: "Failed to update the exam." })
        }
    } catch(err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}