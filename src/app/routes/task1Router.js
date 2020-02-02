import express from 'express';
const router = express.Router();

import { read, task1ById, task1, all,task2 } from '../controllers/task1Controller';

//router.get('/task1/:taskId', read);
router.get('/task1s', task1);
module.exports = router;
