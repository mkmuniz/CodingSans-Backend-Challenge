import jwt from 'jsonwebtoken';
import { BreweriesService } from '../services/breweries.service';

const jwtSecretKey: any = process.env.JWT_SECRET;

export async function getBreweriesByCity(ctx: any) {
    const tokenRequest = ctx.get('Authorization');
    const { city } = ctx.query;

    if (tokenRequest) {
        const authenticated: any = jwt.verify(tokenRequest, jwtSecretKey, (err: any, decoded: any) => {
            if (err) {
                return false;
            } else {
                return true
            }
        });

        const data = await BreweriesService.getBreweriesByCity(city);

        return ctx.body = data;
    };
};

export async function getARandomBrewerie(ctx: any) {
    const tokenRequest = ctx.get('Authorization');
    const { city } = ctx.query;

    if (tokenRequest) {
        const authenticated: any = jwt.verify(tokenRequest, jwtSecretKey, (err: any, decoded: any) => {
            if (err) {
                return false;
            } else {
                return true
            }
        });

        const data = await BreweriesService.getARandomBrewerie();

        return ctx.body = data;
    };
};