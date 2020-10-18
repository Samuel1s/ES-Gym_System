import { Router, Request, Response, response } from 'express'
import { createProfile, showMedicalExam, showProfile } from './controller/UserController'
import { getUsers, getUser, createUser, updateUser, removeUser, registerUser } from './controller/SecretaryController'

const routes = Router()

// Main server route.
routes.get('/', (response: Response) =>{
    return response.json({ message: 'Hello World 3'})
})

routes.get('/admin/', (response: Response) => {
    return response.json({message: "Welcome Admin"})
})

// Secretary actions.
routes.get('/users', getUsers)
routes.get('/get_user/:id', getUser)
routes.post('/new_user', createUser)
routes.put('/upt_user/:id', updateUser)
routes.delete('/dlt_user/:id', removeUser)
routes.post('/registeruser', registerUser)

// User actions.
routes.post('/create_profile/:email', createProfile)
routes.get('/shw_exam/:id', showMedicalExam)
routes.get('/shw_profile/:id', showProfile)


export default routes 