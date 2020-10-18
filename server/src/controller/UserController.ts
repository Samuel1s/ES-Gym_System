import { getRepository, getConnection } from "typeorm"
import { Request, Response} from "express"
import { Registration } from "../entity/Registration"
import { Profile } from "../entity/Profile"
import { User } from "../entity/User"

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
    const checkuser = await getConnection().createQueryBuilder().select("user").from(User, "user").where("user.email = :email", { email: validate }).getOne()

    if (checkuser) {
        const createProfile = await getRepository(Profile).save(request.body)
        await getConnection().createQueryBuilder().update(User).set({ profile_u: request.body.id, pending_profile: true }).where("email = :email", { email: validate }).execute()
        
        response.json(createProfile)
    }

    return response.status(404).json({message: "Permissao Negada, você não possui registro prévio. "})
}

export const showProfile = async (request: Request, response: Response) => {
    const myId = request.params.id
    const myProfile = await getRepository(User).createQueryBuilder("user").leftJoinAndSelect("user.profile_u", "profile").where("user.id = :id", { id: myId }).getOne()
    
    return response.status(200).json(myProfile)
}

export const showMedicalExam = async (request: Request, response: Response) => {
    const myId = request.params.id
    const myExam = await getRepository(User).createQueryBuilder("user").leftJoinAndSelect("user.exam_u", "medical_exam").where("user.id = :id", { id: myId}).getOne()

    return response.status(200).json(myExam)
}


