import { getRepository, getConnection } from "typeorm"
import { Physical_Condition } from "../entity/ Physical_Condition"
import { Request, Response} from "express"
import { Weight_Training } from "../entity/Weight_Training_Classes"
import { Secretary } from "../entity/Secretary"
import { Swinning } from "../entity/Swinning_Classes"
import { Crossfit } from "../entity/Crossfit_Classes"
import { Spinning } from "../entity/Spinnig_Classes"
import { Profile } from "../entity/Profile"
import { Teacher } from "../entity/Teacher"
import { Doctor } from "../entity/Doctor"
import { Rhythm } from "../entity/Rhythm_Classes"
import { Plan } from "../entity/Plan"

/** DOC: 1,
 *  Admin responsables to create all the workers in the gym, behind system.
 */

export const createSecretary = async (request: Request, response: Response) => {
    try {
        const newsecretary = await getRepository(Secretary).save(request.body)
        response.status(201).json(newsecretary)

    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createTeacher = async (request: Request, response: Response) => {
    try {
        const newteacher = await getRepository(Teacher).save(request.body)
        response.status(201).json(newteacher)

    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }

}

export const createDoctor = async (request: Request, response: Response) => {
    try {
        const newdoctor = await getRepository(Doctor).save(request.body)
        response.status(201).json(newdoctor)
    
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createSecretaryProfile = async (request: Request, response: Response) => {
    const validate = request.params.email;
    
    try {
        const checkSecretary = await getConnection().createQueryBuilder().select("secretary").from(Secretary, "secretary").where("secretary.email = :email", { email: validate }).getOne()

        if (response.status(200).json(checkSecretary)) {
            const createProfile = await getRepository(Profile).save(request.body)
            const updateSecretary = await getConnection().createQueryBuilder().update(Secretary).set({ profile_s: request.body.id }).where("email = :email", { email: validate }).execute()
            
            if (updateSecretary.affected == 1)
                response.status(201).json(createProfile)
            else
                response.status(400).json({ message: "Failed to create." }) 
        } else {
            response.status(400).json({ message: "The email provided does not exist." })
        }
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createDoctorProfile = async (request: Request, response: Response) => {
    const validate = request.params.email;

    try {
        const checkDoctor = await getConnection().createQueryBuilder().select("doctor").from(Doctor, "doctor").where("doctor.email = :email", { email: validate }).getOne()

        if (response.status(200).json(checkDoctor)) {
            const createProfile = await getRepository(Profile).save(request.body)
            const updateDoctor = await getConnection().createQueryBuilder().update(Doctor).set({ profile_d: request.body.id }).where("email = :email", { email: validate }).execute()
            
            if(updateDoctor.affected == 1)
                response.status(201).json(createProfile)
            else 
                response.status(400).json({ message: "Failed to create." })     
        } else {
            response.status(400).json({ message: "The email provided does not exist." })
        }
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createTeacherProfile = async (request: Request, response: Response) => {
    const validate = request.params.email;
    
    try {
        const checkTeacher = await getConnection().createQueryBuilder().select("teacher").from(Teacher, "teacher").where("teacher.email = :email", { email: validate }).getOne()

        if (response.status(200).json(checkTeacher)) {
            const createProfile = await getRepository(Profile).save(request.body)
            const updateTeacher = await getConnection().createQueryBuilder().update(Teacher).set({ profile_t: request.body.id }).where("email = :email", { email: validate }).execute()
            
            if (updateTeacher.affected == 1) 
                response.status(201).json(createProfile)
            else
                response.status(400).json({ message: "Failed to create." })      
        } else {
            response.status(400).json({ message: "The email provided does not exist." })
        }
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createCrossfitClasses = async (request: Request, response: Response) => {
    try {
        const newclass = await getRepository(Crossfit).save(request.body)
        response.status(201).json(newclass)
    
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createSpinningClasses = async (request: Request, response: Response) => {
    try {
        const newclass = await getRepository(Spinning).save(request.body)
        response.status(201).json(newclass)
   
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createRhythmClasses = async (request: Request, response: Response) => {
    try {
        const newclass = await getRepository(Rhythm).save(request.body)
        response.status(201).json(newclass)
   
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createSwinningClasses = async (request: Request, response: Response) => {
    try {
        const newclass = await getRepository(Swinning).save(request.body)
        response.status(201).json(newclass)
    
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }    
}

export const createWeightTrainingClasses = async (request: Request, response: Response) => {
    try {
        const newclass = await getRepository(Weight_Training).save(request.body)
        response.status(201).json(newclass)

    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createPlans = async (request: Request, response: Response) => {
    try {
        const plans = await getRepository(Plan).save(request.body)
        response.status(201).json(plans)
    
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const createAptitudeTable = async (request: Request, response: Response) => {
    try {
        const newValues = await getRepository(Physical_Condition).save(request.body)
        response.status(201).json(newValues)

    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}
