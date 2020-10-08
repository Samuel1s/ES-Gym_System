import { Router, Request, Response } from 'express'
import { getUsers, getUser, saveUser, updateUser, removeUser } from './controller/UserController'

const routes = Router()

routes.get('/', (request: Request,response: Response) =>{
    return response.json({ message: 'Hello World w'})
})

routes.get('/users', getUsers);
routes.get('/users/:id', getUser);
routes.post('/newuser', saveUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', removeUser);


export default routes 