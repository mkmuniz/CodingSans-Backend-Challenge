import { User } from "../entity/User";
import { AppDataSource } from "../ormconfig";
import { hash } from "bcrypt";
export class UserService {
    static async findUser(user: any) {
        try {
            const userInfo = await AppDataSource.manager.findOneBy(User, { username: user.username });

            return userInfo;
        } catch (err) {
            console.log(err);
            return err;
        };
    };

    static async signUpUser(data: any) {
        try {
            const user = new User();

            user.username = data.username;
            user.password = await hash(data.password, 10);

            await AppDataSource.manager.save(user);
            const userData = await AppDataSource.manager.findOneBy(User, { username: user.username});

            return { status: 200, data: userData };
        } catch (err) {
            console.log(err);
            return err;
        };
    };
};