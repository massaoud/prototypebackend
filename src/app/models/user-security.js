import mongoose from 'mongoose';
import crypto from 'crypto';
import uuidv1 from 'uuid/v1';
import { stringify } from 'querystring';

const userSecutitySchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: 32
  },
  password: {
    type: String,
    required: true
  },
  salt: String,
  role: {
    type: Number,
    default: 0
  }
});

userSecutitySchema.virtual('password').set(password => {
  this.password = password;
 this.salt = uuidv1();
 this.hashed_password = this.encryptPassword(password);
});
