import { compareSync } from "bcrypt";
import { authenticateUser } from "../auth/authenticate";
import { UserService } from "../services/user.service";
import { verifyToken } from "../utils/jwt";

const jwtSecretKey: any = process.env.JWT_SECRET;

export async function signUpUser(ctx: any) {
    try {
        const { username, password } = ctx.request.body;
        const data = await UserService.signUpUser({ username, password });

        return ctx.response.body = data;
    } catch (err: any) {
        console.error(err);
        return err;
    };
};

export async function login(ctx: any) {
    try {
        const { username, password } = ctx.request.body;
        const tokenRequest = ctx.get('Authorization');

        const user: any = await UserService.findUser({ username, password });

        if (user) {
            if (tokenRequest) {
                const result: any = await verifyToken(tokenRequest, jwtSecretKey);

                if (result) return ctx.body = { Status: 'You are authenticated already' };
            };


            if (compareSync(password, user.password)) {
                const token = await authenticateUser({ username, password });

                ctx.response.set('Authorization', token);
                ctx.body = { "Authorization": token };
            } else {
                ctx.response.body = { "status": 401, "data": "Wrong password" };
            }
        } else {
            ctx.response.body = { "status": 404, "data": "User not found" };
        }
    } catch (err) {
        console.log(err);
    }
};