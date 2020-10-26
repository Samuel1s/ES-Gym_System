import { getRepository, getConnection } from "typeorm"
import { Request, Response } from "express"
import { Registration } from "../entity/Registration"


export const defineWorkouts = async (request: Request, response: Response) => {
    const enrollId = request.params.id

    try {
        const enroll = await getConnection().createQueryBuilder().update(Registration).set({ general_description_of_training: request.body}).where("id = :id", { id: enrollId }).execute()
            
        if (enroll.affected == 1) {
            const registeredTraining = await getRepository(Registration).findOne(enrollId)
            response.status(201).json(registeredTraining)
        }
    } 
    catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}
