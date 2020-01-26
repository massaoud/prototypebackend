import express from 'express';
const router = express.Router();

import { read, task1ById, task1, all,task2 } from '../controllers/task1Controller';

//const {sayHi} = task1Controller
router.get('/task1/:taskId', read);
router.get('/task1', task1);
router.get('/task1s', all);
//router.get('/task1/:films',task1ById);
router.param('taskId',task1ById);
module.exports = router;
