import * as UserController from '../controllers/user.controller';

const router = require('koa-router');
const user = router();

user.post('/login', UserController.login)
    .post('/signup', UserController.signUpUser);

export default user;
