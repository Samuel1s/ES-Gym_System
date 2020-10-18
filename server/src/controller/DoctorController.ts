import { getRepository, getConnection } from "typeorm"
import { Request, Response} from "express"
import { Doctor } from "../entity/Doctor"
import { User} from "../entity/User"

/** DOC: 1,
 *  Validate exam of all users.
 * 
 * 
 */


export const showProfile = async (request: Request, response: Response) => {
    const myId = request.params.id
    const myProfile = await getRepository(Doctor).createQueryBuilder("doctor").leftJoinAndSelect("doctor.profile_d", "profile").where("doctor.id = :id", { id: myId }).getOne()
    
    return response.status(200).json(myProfile)
}

export const listUsersExams = async (request: Request, response: Response) => {
    

}  