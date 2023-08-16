import { authenticateUser } from "../auth/authenticate";
import jwt from 'jsonwebtoken';

const router = require('koa-router');
const user = router();

user.post('/login', async (ctx: any) => {
    const { username, password } = ctx.request.body;
    const tokenRequest = ctx.get('Authorization');

    if (tokenRequest) {
        const result: any = jwt.verify(tokenRequest, "teste", (err: any, decoded: any) => {
            if (err) {
                return false;
            } else {
                return true
            }
        });

        if (result) return ctx.body = { Status: 'U re authenticated already' };
    };

    if (username && password) {
        const token = await authenticateUser({ username, password });

        ctx.response.set('Authorization', token);
        ctx.body = { "Authorization": token };
    };
});

export default user;
