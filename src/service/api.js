import axios from "axios";
import MD from 'crypto-js/md5'

export const BASE_URL = `https://gateway.marvel.com/v1/public/comics?`;

const getHash = (ts, PRIVATE_KEY, REACT_APP_API_KEY) => {
    return MD( ts + PRIVATE_KEY + REACT_APP_API_KEY).toString()
}

const ts = Date.now().toString();
const hash = getHash(ts, process.env.REACT_APP_PRIVATE_KEY, process.env.REACT_APP_API_KEY)
const OFFSET = 20;
const LIMIT = 20;


export const getData = async (page = 0, titleStartsWith, startYear) => {

    const params = {
        ts: ts,
        apikey: process.env.REACT_APP_API_KEY,
        hash: hash,
        titleStartsWith: titleStartsWith,
        startYear: startYear,
        limit: LIMIT,
        offset: OFFSET * page
    };

    return axios.get(`${BASE_URL}`, {
        params
    });
}
