import {getRepository} from "typeorm";
import { Request, Response} from "express";
import {User} from "../entity/User";

export const getUsers = async ( request: Request, response: Response) => {
    const users = await getRepository(User).find()
    return response.json(users)
};

export const getUser = async (request: Request, response: Response) => {
    const { id } = request.params
    const user = await getRepository(User).findOne(id)
    return response.json(user)
};

export const saveUser = async(request: Request, response: Response) => {
    const newuser = await getRepository(User).save(request.body)
    response.json(newuser)
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
        return response.json({message: "Usuário deletado! " + userDeleted})
    }

    return response.status(404).json({message: "Usuário não encontrado! "})
};