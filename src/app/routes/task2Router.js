import express from 'express';
const router = express.Router(); 


import {read,task2s,planets} from '../controllers/task2Controller';

router.get('/task2s',task2s);




module.exports  = router;