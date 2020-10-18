import { getRepository, Connection } from "typeorm"
import { Request, Response} from "express"
import { Registration } from "../entity/Registration"
import { Medical_Exam } from "../entity/Medical_Exam"
import { User } from "../entity/User"


/** DOC: 1,
 *  The secretary has six actions (for a while): register User, get all users,  get one u -
 *  ser, updateUser, remove_user and create the registration if the user has the pending_e-
 *  xam: true and pending_profile: true.  
 */

/** DOC: 2,
 *  Reinforcing, for register the user, he needs have two fields, pending_exam and pending_
 *  profile. See the function "registerUser".
 */

/** DOC: 3,
 *  When the secretary creates a user, she mustard automatically record the user's medical 
 *  examination.
 */ 

let default_exam: {"cardiac_auscultation": 0.0, "blood_pressure": 0.0, "anamnesis": "preencher" ,"result_exam": false, "imc": 0.0, "fat_percentage": 0.0, "lean_mass_percentage": 0.0 } 

export const createUser = async(request: Request, response: Response) => {
    const newuser = await getRepository(User).save(request.body)
    //const exam = await getRepository(Medical_Exam).save(default_exam)
    response.json(newuser)

};

export const getUsers = async ( request: Request, response: Response) => {
    const users = await getRepository(User).find({ relations: ["profile_u"] })
    return response.json(users)
};

export const getUser = async (request: Request, response: Response) => {
    const { id } = request.params
    const user = await getRepository(User).findOne(id)
    return response.json(user)
};

export const updateUser = async (request: Request, response: Response) => {
    const { id } = request.params
    const user = await getRepository(User).update(id, request.body)
    
    if (user.affected == 1) {
        const userUpdated = await getRepository(User).findOne(id)
        return response.json(userUpdated)
    }

    return response.status(404).json({message: "Usuário não encontrado! "})
};

export const removeUser = async (request: Request, response: Response) => {
    const { id } = request.params

    const user = await getRepository(User).delete(id)

    if (user.affected == 1) {
        const userDeleted = await getRepository(User).findOne(id)
        return response.json({message: "Usuário deletado! "})
    }

    return response.status(404).json({message: "Usuário não encontrado! "})
};

export const registerUser = async(request: Request, response: Response) => {
    if (request.body.pending_profile && request.body.pending_exam) {
        const register_user = await getRepository(Registration).save(request.body)
        response.json(register_user)
    }

    return response.status(404).json({message: "Registro não permitido! "})
};
