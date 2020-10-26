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
                    response.status(400).json({ message: "Failed to update the user table." })     
                }
            } else {
                response.status(400).json({ message: "Failed to create." })    
            }
        } else {
            response.status(400).json({ message: "The email provided does not exist." })
        }
    } catch(err) {
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