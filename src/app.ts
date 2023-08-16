import Koa from 'koa';
import user from './routes/auth.routes';
const bodyParser = require('koa-body-parser');

const logger = require('koa-logger')
const app = new Koa();

app.use(bodyParser());
app.use(logger());
app.use(user.routes());

export default app;
