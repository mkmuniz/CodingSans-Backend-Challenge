import { authenticateUser } from "../auth/authenticate";
import jwt from 'jsonwebtoken';
import * as AuthController from '../controllers/auth.controller';

const router = require('koa-router');
const user = router();

user.post('/login', AuthController.login);

export default user;
