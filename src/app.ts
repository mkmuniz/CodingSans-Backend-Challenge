import Koa from 'koa';
import user from './routes/auth.routes';
import breweries from './routes/breweries.routes';

require('dotenv').config();

const bodyParser = require('koa-body-parser');

const logger = require('koa-logger')
const app = new Koa();

app.use(bodyParser());
app.use(logger());
app.use(user.routes());
app.use(breweries.routes());

export default app;
