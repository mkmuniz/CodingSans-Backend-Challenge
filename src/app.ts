import Koa from 'koa';
import user from './routes/user.routes';

const logger = require('koa-logger')
const app = new Koa();

app.use(logger());
app.use(user.routes());

export default app;
