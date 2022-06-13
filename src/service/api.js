import axios from "axios";
import MD from 'crypto-js/md5'

export const BASE_URL = `https://gateway.marvel.com/v1/public/comics?`;

let getHash = (ts, PRIVATE_KEY, API_KEY) => {
    return MD( ts + PRIVATE_KEY + API_KEY).toString()
}

let ts = Date.now().toString();
let API_KEY = "9857783b5ce129eb93604fe4ce1bfcdb";
let PRIVATE_KEY = '4e28375814ef697e3a43212379d421de3b39d508';
let hash = getHash(ts, PRIVATE_KEY, API_KEY)

const OFFSET = 20;
const LIMIT = 20;


export const getData = async (page = 0, titleStartsWith, startYear) => {
    let searchQuery = '';

    const params = {
        ts: ts,
        apikey: API_KEY,
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
