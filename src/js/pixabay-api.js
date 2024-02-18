
import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42120259-494341598d0c2875f9db82d6d';
const PER_PAGE = 15;

export class PixabayAPI {
    constructor() {}

    async getImages(query) {
        const params = {
            key: API_KEY,
            q: query,
            page: 1,
            per_page: PER_PAGE,
        };
        const url = `${BASE_URL}`;
        return axios.get(url, { params }).then(res => res.data);
    }

   async getMoreImages(query, page) {
        page++;
    const params = {
        key: API_KEY,
        q: query,
        page: page,
        per_page: PER_PAGE,
    };
    const url = `${BASE_URL}`;
    return axios.get(url, { params }).then(res => res.data);
}

}

