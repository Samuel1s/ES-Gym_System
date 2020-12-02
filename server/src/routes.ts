import { createCrossfitClasses, createDoctor, createRhythmClasses, createSecretary, createSpinningClasses, createSwinningClasses, createTeacher, createWeightTrainingClasses, createPlans, createAptitudeTable } from './controller/AdminController'
import { getUsers, getUser, createUser, updateUser, removeUser, registerUser, showPlans, selectPlanType, showAvailableCrossfitClasses, showAvailableRhythmClasses, showAvailableSpinningClasses, showAvailableSwimmingClasses, showAvailableWeightTrainingClasses , selectAvailableCrossfitClasses, selectAvailableRhythmClasses, selectAvailableSpinningClasses, selectAvailableSwimmingClasses, selectAvailableWeightTrainingClasses} from './controller/SecretaryController'
import { getPatient, listUsersExams, validateUserExam, showIMC } from './controller/DoctorController'
import { createProfile, showProfile, userAuthentication } from './controller/UserController'
import { getUsersWeightTraining, defineWorkouts } from './controller/TeacherController'
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

routes.get('/admin/list_plans', showPlans)
routes.get('/admin/show_rt_classes', showAvailableRhythmClasses)
routes.get('/admin/show_cf_classes', showAvailableCrossfitClasses)
routes.get('/admin/show_sw_classes', showAvailableSwimmingClasses)
routes.get('/admin/show_sp_classes', showAvailableSpinningClasses)
routes.get('/admin/show_wt_classes', showAvailableWeightTrainingClasses)


routes.get('/admin/select_plan_type/:id', selectPlanType) 
routes.get('/admin/select_rt_class/:id', selectAvailableRhythmClasses) 
routes.get('/admin/select_cf_class/:id', selectAvailableCrossfitClasses) 
routes.get('/admin/select_sw_class/:id', selectAvailableSwimmingClasses) 
routes.get('/admin/select_sp_class/:id', selectAvailableSpinningClasses) 
routes.get('/admin/select_wt_class/:id', selectAvailableWeightTrainingClasses) 

//Put
routes.put('/admin/update_user/:id', updateUser)
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
routes.post('/access', userAuthentication)

/**
 * Doctor actions.
 */ 

//Get
routes.get('/admin/list_all_exams', listUsersExams)
routes.get('/admin/get_patient/:id', getPatient)
routes.get('/admin/show_imc', showIMC)
//Put
routes.put('/admin/update_user_exam/:id', validateUserExam)

/**
 * Teacher actions.
 */ 

 //Get
routes.get('/admin/list_all_pupils', getUsersWeightTraining)
//Put
routes.put('/admin/set_workout/:id',defineWorkouts)

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