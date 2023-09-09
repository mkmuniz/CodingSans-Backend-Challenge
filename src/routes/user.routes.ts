import * as UserController from '../controllers/user.controller';

const router = require('koa-router');
const user = router();

user
    .get('/', (ctx: any) => {
        ctx.body = { status: 200, message: "Its all working" }
    })
    .post('/login', UserController.login)
    .post('/signup', UserController.signUpUser)

export default user;
