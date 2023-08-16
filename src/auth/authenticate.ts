import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function authenticateUser(userData: any) {
    if (userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10); 

        const user = {
            ...userData,
            password: hashedPassword
        };

        const token = await jwt.sign(user, "teste", { expiresIn: '2h'});

        return token;
    }
};