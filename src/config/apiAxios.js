import Axios from 'axios';

export const api = Axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
});