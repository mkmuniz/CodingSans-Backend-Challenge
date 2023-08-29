import { BreweriesService } from '../services/breweries.service';
import { verifyToken } from '../utils/jwt';

const jwtSecretKey: any = process.env.JWT_SECRET;

export async function getBreweriesByCity(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');
        const { city } = ctx.query;

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated!" };

            const data = await BreweriesService.getBreweriesByCity(city);

            return ctx.body = { status: 200, data };
        } else {
            return ctx.body = { status: 401, data: "Token invalid" };
        }
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};

export async function getARandomBrewerie(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated" };
            
            const data = await BreweriesService.getARandomBrewerie();

            return ctx.body = { status: 200, data };
        };
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};

export async function getBrewerieByState(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');
        const { state } = ctx.query;

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated" };
            
            const data = await BreweriesService.getBreweriesByState(state);

            return ctx.body = { status: 200, data };
        };
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};

export async function getBrewerieByDistance(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');
        const { distance } = ctx.query;

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated" };
            
            const data = await BreweriesService.getBreweriesByState(distance);

            return ctx.body = { status: 200, data };
        };
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};

export async function getBrewerieByIds(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');
        const { ids } = ctx.query;

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated" };
            
            const data = await BreweriesService.getBreweriesByIds(ids);

            return ctx.body = { status: 200, data };
        };
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};

export async function getBrewerieByName(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');
        const { name } = ctx.query;

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated" };
            
            const data = await BreweriesService.getBreweriesByName(name);

            return ctx.body = { status: 200, data };
        };
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};

export async function getBrewerieByPostal(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');
        const { postal } = ctx.query;

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated" };
            
            const data = await BreweriesService.getBreweriesByName(postal);

            return ctx.body = { status: 200, data };
        };
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};

export async function getBrewerieByPage(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');
        const { page } = ctx.query;

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated" };
            
            const data = await BreweriesService.getBreweriesByPage(page);

            return ctx.body = { status: 200, data };
        };
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};

export async function getBreweriePerPage(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');
        const { page } = ctx.query;

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated" };
            
            const data = await BreweriesService.getBreweriesPerPage(page);

            return ctx.body = { status: 200, data };
        };
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};

export async function getBreweriesSorted(ctx: any) {
    try {
        const tokenRequest = ctx.get('Authorization');
        const { state, sort } = ctx.query;

        if (tokenRequest) {
            const authenticated: any = verifyToken(tokenRequest, jwtSecretKey);

            if (!authenticated) return ctx.body = { status: 401, data: "User not authenticated" };
            
            const data = await BreweriesService.getBreweriesSorted(state, sort);

            return ctx.body = { status: 200, data };
        };
    } catch (err) {
        console.log(err);

        return ctx.body = { status: 500, data: err };
    };
};