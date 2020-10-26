import { createCrossfitClasses, createDoctor, createRhythmClasses, createSecretary, createSpinningClasses, createSwinningClasses, createTeacher, createWeightTrainingClasses, createPlans, createAptitudeTable } from './controller/AdminController'
import { getUsers, getUser, createUser, updateUser, removeUser, registerUser, updateModalityTables } from './controller/SecretaryController'
import { listUsersExams, validateUserExam } from './controller/DoctorController'
import { createProfile, showProfile } from './controller/UserController'
import { Router, Request, Response } from 'express'

const routes = Router()

// Main server route.
routes.get('/', (resquest: Request, response: Response) => {
    return response.json({ message: 'Hello World 3'})
})

// Admin server route.
routes.get('/admin/', (request: Request, response: Response) => {
    return response.json({message: "Welcome Admin"})
})

/** 
 * Secretary actions.
 */

//Get
routes.get('/admin/list_users', getUsers)
routes.get('/admin/get_user/:id', getUser)
//Put
routes.put('/admin/update_user/:id', updateUser)
routes.put('/admin/update_modality_tables', updateModalityTables)
//Post
routes.post('/admin/create_user', createUser)
routes.post('/admin/register_user/:id', registerUser)
//Delete
routes.delete('/admin/delete_user/:id', removeUser)

/**
 * User actions.
 */ 

//Get
routes.get('/show_profile/:id', showProfile)
//Post
routes.post('/create_profile/:email', createProfile)

/**
 * Doctor actions.
 */ 

//Get
routes.get('/admin/list_all_exams', listUsersExams)
//Put
routes.put('/admin/update_user_exam/:id', validateUserExam)

/** 
 * Admin Actions.
 */ 

//Post
routes.post('/admin/create_doctor', createDoctor)
routes.post('/admin/create_teacher', createTeacher)
routes.post('/admin/create_secretary', createSecretary)
routes.post('/admin/create_rhythm_class', createRhythmClasses)
routes.post('/admin/create_crossfit_class', createCrossfitClasses)
routes.post('/admin/create_swinning_class', createSwinningClasses)
routes.post('/admin/create_spinning_class', createSpinningClasses)
routes.post('/admin/create_weight_training_class', createWeightTrainingClasses)
routes.post('/admin/create_aptitude_table', createAptitudeTable)
routes.post('/admin/create_plans', createPlans)


export default routes 