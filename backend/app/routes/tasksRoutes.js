const {Router} =require('express');
const router = Router();
const tasksController=require('../controllers/tasksController');
const {requireAuth} = require('../middlewares/authMiddleware');

router.post('/course/add-task',requireAuth,tasksController.tasks_create);
router.post('/course/register',requireAuth,tasksController.register_course);
router.get('/course/get-tasks',requireAuth,tasksController.tasks_from_course);
router.get('/course/tasks',requireAuth,tasksController.tasks_all);
module.exports=router;