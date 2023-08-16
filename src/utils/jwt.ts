import jwt from "jsonwebtoken";

export function verifyToken(token: string) {
    const result = jwt.verify(token, "teste", (err) => {
        if (err) {
            console.log(err);
            return false;
        };

        return true
    });

    return result;
};