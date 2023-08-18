import { authenticateUser } from "../auth/authenticate";
import jwt from 'jsonwebtoken';

const jwtSecretKey: any = process.env.JWT_SECRET;

export async function login(ctx: any) {
    const { username, password } = ctx.request.body;
    const tokenRequest = ctx.get('Authorization');

    if (tokenRequest) {
        const result: any = jwt.verify(tokenRequest, jwtSecretKey, (err: any) => {
            if (err) {
                return false;
            } else {
                return true
            }
        });

        if (result) return ctx.body = { Status: 'You are authenticated already' };
    };

    if (username && password) {
        const token = await authenticateUser({ username, password });

        ctx.response.set('Authorization', token);
        ctx.body = { "Authorization": token };
    };
};