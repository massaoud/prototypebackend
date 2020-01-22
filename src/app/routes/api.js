import express from 'express';
import task1Controller from '../controllers/task1';


const router = express.Router();
const {sayHi} = task1Controller

router.get("/", (req, res) => {
  res.send('HELLO FROM NODE ');
}); 

router.get("/", sayHi );


module.exports  = router;