import app from "./app";
const AppDataSource = require('./data-source');

async function createServer() {
    AppDataSource.initialize().then(async () => {
        app.listen(4000, () => {
            console.log(`Server is running at 4000`)
        });
    })
}

export { createServer };
