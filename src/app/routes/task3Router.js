import express from 'express';
const router = express.Router();


import {task3s} from '../controllers/task3Controller';

router.get('/task3s',task3s);

module.exports  = router;