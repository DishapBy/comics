import axios from "axios";
import MD from 'crypto-js/md5'

// export const BASE_URL = `https://gateway.marvel.com/v1/public/comics?&apikey=`;
export const BASE_URL = `https://gateway.marvel.com/v1/public/comics?`;

const myPublicKey = '9857783b5ce129eb93604fe4ce1bfcdb'
const myPrivateKey = '4e28375814ef697e3a43212379d421de3b39d508'

let getHash = (ts, privateKey, apiKey) => {
    return MD( ts + privateKey + apiKey).toString()
}

let ts = Date.now().toString();
let apiKey = "9857783b5ce129eb93604fe4ce1bfcdb";
let privateKey = '4e28375814ef697e3a43212379d421de3b39d508';
let hash = getHash(ts, privateKey, apiKey)



export const getData = async (page, titleStartsWith, startYear) => {
    let searchQuery = '';

    if(titleStartsWith){
        searchQuery += `&titleStartsWith=${titleStartsWith}`
    }

    if(startYear){
        searchQuery += `&startYear=${startYear}`
    }
    console.log(`${BASE_URL}${ts}&apikey=${myPublicKey}&hash=${hash}&limit=20&offset=${page * 20}`)

    return axios.get(`${BASE_URL}ts=${ts}&apikey=${myPublicKey}&hash=${hash}&limit=20&offset=${page * 20}${searchQuery}`);
}
