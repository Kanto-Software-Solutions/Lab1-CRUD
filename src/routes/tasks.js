const express =require('express');
const router = express.Router();
const customerController=require('../controllers/taskController');

router.get('/', customerController.list)
router.post('/add', customerController.save)
module.exports = router;