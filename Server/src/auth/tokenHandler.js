import jwt from 'jsonwebtoken';
import config from '../../config';

//NOTE: COME BACK TO THIS FILE AND TRY TO USE IN USERROUTER FOR SIGNIN BY IMPORTING
const generateToken = (user) => {
  return jwt.sign(user, config.JWT_SECRET_KEY, {
    expiresIn: "2h"
  })
}

export default generateToken;