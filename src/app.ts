import Koa from 'koa';
import user from './routes/user.routes';
import breweries from './routes/breweries.routes';

require('dotenv').config();

export const jwtSecretKey: any = process.env.JWT_SECRET;

const bodyParser = require('koa-body-parser');
const logger = require('koa-logger');
const app = new Koa();

app.use(bodyParser());
app.use(logger());
app.use(user.routes());
app.use(breweries.routes());

export default app;
