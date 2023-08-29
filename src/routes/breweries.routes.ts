import * as BreweriesController from '../controllers/breweries.controller';

const router = require('koa-router');
const breweries = router();

breweries
    .get('/breweries/byCity', BreweriesController.getBreweriesByCity)
    .get('/breweries/byDistance', BreweriesController.getBrewerieByDistance)
    .get('/breweries/byIds', BreweriesController.getBrewerieByIds)
    .get('/breweries/byName', BreweriesController.getBrewerieByName)
    .get('/breweries/byPage', BreweriesController.getBrewerieByPage)
    .get('/breweries/byPostal', BreweriesController.getBrewerieByPostal)
    .get('/breweries/byState', BreweriesController.getBrewerieByState)
    .get('/breweries/perPage', BreweriesController.getBreweriePerPage)
    .get('/breweries/random', BreweriesController.getARandomBrewerie)
    .get('/breweries/sorted', BreweriesController.getBreweriesSorted)



export default breweries;
