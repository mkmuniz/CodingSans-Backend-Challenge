import { AppDataSource } from "./data-source";
import app from "./app";

AppDataSource.initialize().then(async () => {
    app.listen(4000, () => {
        console.log(`Server is running at 4000`)
    });
}).catch(error => console.log(error))