import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "512834",
    database: "postgres",
    entities: [User],
    migrations: ['./db/migrations/**/*.ts'],
    subscribers: [],
    synchronize: true,
    logging: false,
});