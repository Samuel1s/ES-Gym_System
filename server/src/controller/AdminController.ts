import { getRepository, getConnection } from "typeorm"
import { Request, Response} from "express"
import { Secretary } from "../entity/Secretary"
import { Profile } from "../entity/Profile"
import { Teacher } from "../entity/Teacher"
import { Doctor } from "../entity/Doctor"

/** DOC: 1,
 *  Admin responsables to create all the workers in the gym, behind system.
 */

export const createSecretary = async (request: Request, response: Response) => {
    const newsecretary = await getRepository(Secretary).save(request.body)
    response.send(newsecretary)
}

export const createTeacher = async (request: Request, response: Response) => {
    const newteacher = await getRepository(Teacher).save(request.body)
    response.send(newteacher)
}

export const createDoctor = async (request: Request, response: Response) => {
    const newdoctor = await getRepository(Doctor).save(request.body)
    response.send(newdoctor)
}

export const createSecretaryProfile = async (request: Request, response: Response) => {
    const validate = request.params.email;
    const checkuser = await getConnection().createQueryBuilder().select("secretary").from(Secretary, "secretary").where("secretary.email = :email", { email: validate }).getOne()

    if (checkuser) {
        const createProfile = await getRepository(Profile).save(request.body)
        response.json(createProfile)
        
        await getConnection().createQueryBuilder().update(Secretary).set({ profile_s: request.body.id }).where("email = :email", { email: validate }).execute()
    }

    return response.status(404).json({message: "Permissao Negada "})
}


export const createDoctorProfile = async (request: Request, response: Response) => {
    const validate = request.params.email;
    const checkuser = await getConnection().createQueryBuilder().select("doctor").from(Doctor, "doctor").where("doctor.email = :email", { email: validate }).getOne()

    if (checkuser) {
        const createProfile = await getRepository(Profile).save(request.body)
        response.json(createProfile)
        
        await getConnection().createQueryBuilder().update(Doctor).set({ profile_d: request.body.id }).where("email = :email", { email: validate }).execute()
    }

    return response.status(404).json({message: "Permissao Negada "})
}

export const createTeacherProfile = async (request: Request, response: Response) => {
    const validate = request.params.email;
    const checkuser = await getConnection().createQueryBuilder().select("teacher").from(Teacher, "teacher").where("teacher.email = :email", { email: validate }).getOne()

    if (checkuser) {
        const createProfile = await getRepository(Profile).save(request.body)
        response.json(createProfile)
        
        await getConnection().createQueryBuilder().update(Teacher).set({ profile_t: request.body.id }).where("email = :email", { email: validate }).execute()
    }

    return response.status(404).json({message: "Permissao Negada "})
}
