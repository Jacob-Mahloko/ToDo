const {Router} =require('express');
const router = Router();
const cookieController=require('../controllers/cookieControllers');

router.get('/set-cookies',cookieController.set_cookie);
router.get('/read-cookies',cookieController.read_cookie);

module.exports=router;