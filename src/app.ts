import Koa from 'koa';
import user from './routes/user.routes';

const app = new Koa();

app.use(user.routes());

export default app;
