import fetch from 'node-fetch';

const path = "https://api.openbrewerydb.org/v1/breweries";

export class BreweriesService {
    static async getBreweriesByCity(city: string) {
        const result = await fetch(`${path}?by_city=${city}&per_page=3`).then((data) => data.json());

        return result;
    };

    static async getBreweriesByDistance(distance: string) {
        const result = await fetch(`${path}?by_dist=${distance}&per_page=3`).then((data) => data.json());

        return result;
    };

    static async getBreweriesByIds(ids: string) {
        const result = await fetch(`${path}?by_ids=${ids}`).then((data) => data.json());

        return result;
    };

    static async getBreweriesByName(name: string) {
        const result = await fetch(`${path}?by_name=${name}&per_page=3`).then((data) => data.json());

        return result;
    };

    static async getBreweriesByState(state: string) {
        const result = await fetch(`${path}?by_name=${state}&per_page=3`).then((data) => data.json());

        return result;
    };

    static async getBreweriesByPostal(postal: string) {
        const result = await fetch(`${path}?by_name=${postal}&per_page=3`).then((data) => data.json());

        return result;
    };

    static async getBreweriesByType(type: string) {
        const result = await fetch(`${path}?by_type=${type}&per_page=3`).then((data) => data.json());

        return result;
    };

    static async getBreweriesByPage(page: string) {
        const result = await fetch(`${path}?page=${page}&per_page=3`).then((data) => data.json());

        return result;
    };

    static async getBreweriesPerPage(page: string) {
        const result = await fetch(`${path}?per_page=${page}`).then((data) => data.json());

        return result;
    };

    static async getBreweriesSorted(state: string, typeSort: string) {
        const result = await fetch(`${path}?by_state=${state}&sort=type,name:${typeSort}&per_page=3`).then((data) => data.json());

        return result;
    };

    static async getARandomBrewerie() {
        const result = await fetch(`${path}/random`).then((data) => data.json());

        return result;
    };
};