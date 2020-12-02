import { getRepository, getConnection } from "typeorm"
import { Request, Response } from "express"
import { Registration } from "../entity/Registration"
import { User } from "../entity/User"


export const defineWorkouts = async (request: Request, response: Response) => {
    const enrollId = request.params.id

        try {
            const pupil = await getRepository(Registration).update(enrollId, request.body)
            
            if (pupil.affected == 1) {
                const pupilUpdated = await getRepository(Registration).findOne(enrollId)
                response.status(201).json(pupilUpdated)
            }
        } 
        catch (err) {
            response.status(400).json({ message: "Request Fail!!" + err })
        }
    
}

export const getUsersWeightTraining = async (request: Request, response: Response) => {

    try {
        const pupils = await getRepository(Registration).find({relations: ['modality_wt', 'modality_sp', 'modality_sw', 'modality_rt', 'modality_cf', 'user_medical_exams']})

        response.status(201).json(pupils)
    }

    catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }

}
