import { getRepository, getConnection } from "typeorm"
import { Request, Response} from "express"
import { Weight_Training } from "../entity/Weight_Training_Classes"
import { Registration } from "../entity/Registration"
import { Medical_Exam } from "../entity/Medical_Exam"
import { Crossfit } from "../entity/Crossfit_Classes"
import { Swinning } from "../entity/Swinning_Classes"
import { Spinning } from "../entity/Spinnig_Classes"
import { Rhythm } from "../entity/Rhythm_Classes"
import { User } from "../entity/User"
import { Plan } from "../entity/Plan"

/** DOC: 1,
 *  The secretary has six actions (for a while): register User, get all users,  get one u -
 *  ser, updateUser, remove_user and create the registration if the user has the pending_e-
 *  xam: true and pending_profile: true.  
 */

/** DOC: 2,
 *  Reinforcing, for register the user, he needs have two fields, pending_exam. See the 
 *  function "registerUser".
 */

/** DOC: 3,
 *  When the secretary creates a user, she mustard automatically record the user's medical 
 *  examination.
 */ 

 /** DOC: 4,
  *  When the secretary creates a registration for the user, she will have to create a plan 
  *  for the user next.
  */

export const createUser = async(request: Request, response: Response) => {
    try {
        const newuser = await getRepository(User).save(request.body)
        const exam = await getConnection().createQueryBuilder().insert().into(Medical_Exam).values([{"user": newuser.id}]).execute()
        response.status(201).json(newuser)
    } 
    catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err }) 
    }
}

export const getUsers = async ( request: Request, response: Response) => {
    try {
        const users = await getRepository(User).find({ relations: ["profile_u"] })
        response.status(200).json(users)
    }
    catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const getUser = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
        const user = await getRepository(User).findOne(id)
        response.status(200).json(user)
    } 
    catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const updateUser = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
        const user = await getRepository(User).update(id, request.body)
        
        if (user.affected == 1) {
            const userUpdated = await getRepository(User).findOne(id)
            response.status(201).json(userUpdated)
        }
    } 
    catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const removeUser = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
        const user = await getRepository(User).delete(id)

        if (user.affected == 1) {
            await getRepository(User).findOne(id)
            response.status(200).json({ message: "User Deleted! " })
        }
    } 
    catch (err) {    
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const registerUser = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
        const check = await getRepository(User).findOne(id)
         
        if (check.pending_exam == false) {
            const userExam = await getConnection().createQueryBuilder().select("medical_exam").from(Medical_Exam, "medical_exam").where("medical_exam.user = :id", { id: id}).getOne()
                
            try {
                const plans = await getRepository(Plan).findByIds(request.body.plans)
                const modality_cf = await getRepository(Crossfit).findByIds(request.body.crossfit)
                const modality_rt = await getRepository(Rhythm).findByIds(request.body.rhythm)
                const modality_sp = await getRepository(Spinning).findByIds(request.body.spinning)
                const modality_sw = await getRepository(Swinning).findByIds(request.body.swinning)
                const modality_wt = await getRepository(Weight_Training).findByIds(request.body.weightTraining) 
            
                const enrollUser = new Registration()
                enrollUser.register_number = request.body.register_number
                enrollUser.plans = plans
                enrollUser.modality_sw = modality_sw
                enrollUser.modality_cf = modality_cf
                enrollUser.modality_rt = modality_rt
                enrollUser.modality_wt = modality_wt
                enrollUser.modality_sp = modality_sp
                    
                const registred = await getRepository(Registration).save(enrollUser)

                if (registred.id != null) {
                    const updateUserRecord = await getConnection().createQueryBuilder().update(User).set({ registration_u: enrollUser }).where("id = :id", { id: id}).execute()

                    if (updateUserRecord.affected == 1) {
                        const updateEnrollExam = await getConnection().createQueryBuilder().update(Registration).set({user_medical_exams: userExam}).where("id = :id", { id: enrollUser.id }).execute()
                        response.status(201).json(enrollUser)
                    }
                    else
                        response.status(400).json({ message: "Error when updating other entities." })    
                }
            }
            catch (err) {
                response.status(400).json({ message: "Failed to enroll the user." + err })
            }
        } 
        else {
            response.status(400).json({ message: "The user has a medical examination pending!!" }) 
        }
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const showAvailableSwimmingClasses = async (request: Request, response: Response) => {     
    try {
        const swinningClasses = await getRepository(Swinning).find({where: { availability: true }})
        response.status(200).json(swinningClasses)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const showAvailableSpinningClasses = async (request: Request, response: Response) => {     
    try {
        const spinningClasses = await getRepository(Spinning).find({where: { availability: true }})
        response.status(200).json(spinningClasses)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const showAvailableCrossfitClasses = async (request: Request, response: Response) => {     
    try {
        const crossfitClasses = await getRepository(Crossfit).find({where: { availability: true }})
        response.status(200).json(crossfitClasses)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const showAvailableRhythmClasses = async (request: Request, response: Response) => {     
    try {
        const rhythmClasses = await getRepository(Rhythm).find({where: { availability: true }})
        response.status(200).json(rhythmClasses)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const showAvailableWeightTrainingClasses = async (request: Request, response: Response) => {     
    try {
        const weightTrainingClasses = await getRepository(Weight_Training).find({where: { availability: true }})
        response.status(200).json(weightTrainingClasses)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const selectAvailableSwimmingClasses = async (request: Request, response: Response) => {  
    const { id } = request.params
    
    try {
        const swinningClass = await getRepository(Swinning).findOne(id)
        response.status(200).json(swinningClass)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const selectAvailableSpinningClasses = async (request: Request, response: Response) => {     
    const { id } = request.params

    try {
        const spinningClass = await getRepository(Spinning).findOne(id)
        response.status(200).json(spinningClass)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const selectAvailableCrossfitClasses = async (request: Request, response: Response) => {     
    const { id } = request.params
    
    try {
        const crossfitClass = await getRepository(Crossfit).findOne(id)
        response.status(200).json(crossfitClass)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const selectAvailableRhythmClasses = async (request: Request, response: Response) => {     
    const { id } = request.params
    
    try {
        const rhythmClass = await getRepository(Rhythm).findOne(id)
        response.status(200).json(rhythmClass)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const selectAvailableWeightTrainingClasses = async (request: Request, response: Response) => {     
    const { id } = request.params
    
    try {
        const weightTrainingClass = await getRepository(Weight_Training).findOne(id)
        response.status(200).json(weightTrainingClass)      
 
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const showPlans = async (request: Request, response: Response) => {
    try {
        const allPlans = await getRepository(Plan).find()
        response.status(200).json(allPlans)

    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }
}

export const selectPlanType = async (request: Request, response: Response) => {
    const id  = request.params.id

    try {
        const plan = await getRepository(Plan).findOne(id)
        response.status(200).json(plan)
    
    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    }    
}

export const updateModalityTables = async (request: Request, response: Response) => {
    try {
        if (request.body.crossfit != null) {
            request.body.crossfit.forEach(async index => {
                const x = await getConnection().createQueryBuilder().update(Crossfit).set({ number_of_enrollments: index.number_of_enrollments + 1 }).where("id = :id", { id: index.id }).execute()
            })
        }
        if (request.body.rhythm != null) {
            request.body.rhythm.forEach(async index => {
                const x = await getConnection().createQueryBuilder().update(Rhythm).set({ number_of_enrollments: index.number_of_enrollments + 1 }).where("id = :id", { id: index.id }).execute()
            })
        }
        if (request.body.spinning != null) {
            request.body.spinning.forEach(async index => {
                const x = await getConnection().createQueryBuilder().update(Spinning).set({ number_of_enrollments: index.number_of_enrollments + 1 }).where("id = :id", { id: index.id }).execute()
            })
        }
        if (request.body.swinning != null) {
            request.body.swinning.forEach(async index => {
                const x = await getConnection().createQueryBuilder().update(Swinning).set({ number_of_enrollments: index.number_of_enrollments + 1 }).where("id = :id", { id: index.id }).execute()
            })
        }
        if (request.body.weightTraining != null) {
            request.body.weightTraining.forEach(async index => {
                const x = await getConnection().createQueryBuilder().update(Weight_Training).set({ number_of_enrollments: index.number_of_enrollments + 1 }).where("id = :id", { id: index.id }).execute()
            })
        }
    response.status(201).json({ message: "Success when updating as tables" })

    } catch (err) {
        response.status(400).json({ message: "Request Fail!!" + err })
    } 
}
