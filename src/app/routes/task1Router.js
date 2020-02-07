import express from 'express';
const router = express.Router();

import {  task1 } from '../controllers/task1Controller';

router.get('/task1s', task1);
module.exports = router;
