import app from './app';
const env = process.env.NODE_ENV;

const config = {
    app: { 
        port: env === 'dev' ? process.env.PORT : "4000",
    },
    db: {
    }
};

app.listen(config.app.port, () => {
    console.log(`Server is running at ${config.app.port}`)
});