import fetch from 'node-fetch';

const path = "https://api.openbrewerydb.org/v1/breweries";

export class BreweriesService {
    static async getBreweriesByCity(city: string) {
        const response = await fetch(`${path}?by_city=${city}&per_page=3`);
        const data = await response.json();

        return data;
    };

    static async getBreweriesByDistance(distance: string) {
        const response = await fetch(`${path}?by_dist=${distance}&per_page=3`);
        const data = await response.json();

        return data;
    };

    static async getBreweriesByIds(ids: string) {
        const response = await fetch(`${path}?by_ids=${ids}`);
        const data = await response.json();

        return data;
    };

    static async getBreweriesByName(name: string) {
        const response = await fetch(`${path}?by_name=${name}&per_page=3`);
        const data = await response.json();

        return data;
    };

    static async getBreweriesByState(state: string) {
        const response = await fetch(`${path}?by_name=${state}&per_page=3`);
        const data = await response.json();

        return data;
    };

    static async getBreweriesByPostal(postal: string) {
        const response = await fetch(`${path}?by_name=${postal}&per_page=3`);
        const data = await response.json();

        return data;
    };

    static async getBreweriesByType(type: string) {
        const response = await fetch(`${path}?by_type=${type}&per_page=3`);
        const data = await response.json();

        return data;
    };

    static async getBreweriesByPage(page: string) {
        const response = await fetch(`${path}?page=${page}&per_page=3`);
        const data = await response.json();

        return data;
    };

    static async getBreweriesPerPage(page: string) {
        const response = await fetch(`${path}?per_page=${page}`);
        const data = await response.json();

        return data;
    };

    static async getBreweriesSorted(state: string, typeSort: string) {
        const response = await fetch(`${path}?by_state=${state}&sort=type,name:${typeSort}&per_page=3`);
        const data = await response.json();

        return data;
    };

    static async getARandomBrewerie() {
        const response = await fetch(`${path}/random`);
        const data = await response.json();

        return data;
    };
};