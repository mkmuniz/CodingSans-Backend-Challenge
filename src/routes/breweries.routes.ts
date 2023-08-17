import * as BreweriesController from '../controllers/breweries.controller';

const router = require('koa-router');
const breweries = router();

breweries.get('/breweriess', BreweriesController.getARandomBrewerie)


export default breweries;
