import { User } from "../entity/user/User";
import { AppDataSource } from "../server";

export class UserService {
    static async signUpUser(data: any) {
        const user = new User();

        user.username = data.username;
        user.password = data.password;

        await AppDataSource.manager.save(user);
    };
};