import jwt from "jsonwebtoken";

export function verifyToken(token: string, jwtSecretKey: string) {
    const result = jwt.verify(token, jwtSecretKey, (err: any) => {
        if (err) {
            return false;
        } else {
            return true;
        }
    });

    return result;
};