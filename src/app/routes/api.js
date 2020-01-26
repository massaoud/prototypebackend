import express from 'express';
const router = express.Router();
import task4Controller from '../controllers/task4Controller';



const {task4} = task4Controller;


router.get("/task4s", task4 );


module.exports  = router;