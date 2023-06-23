import MD5 from 'crypto-js/md5';

const API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts + secretKey + publicKey).toString();
} 

const fetchHeroes = async (value) => {
    let baseURL = `${API_URL}/v1/public/characters`;

    let ts = Date.now().toString();
    let apikey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apikey); // these match the keys on top ^ in terms of format

    let url = `${baseURL}?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${value}`;

    console.log(`url is -- ${url}`)
    console.log(`baseURL is -- ${baseURL}`)
    

    try {
        let response = await fetch(url);
        let data = await response.json();
        // console.log(`data is -- ${JSON.stringify(data.data.results)}`)
        // this ^ console.log displays the data that is retrieved from the api upon search button click
        return data.data.results;
    } catch (err) {
        console.error(err);
        return;
    }
}


const fetchHero = async (id) => {
    let baseURL = `${API_URL}/v1/public/characters/${id}`;
    // let baseURL = `${API_URL}/v1/public/characters/${id}/comics`;

    let ts = Date.now().toString();
    let apikey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apikey); // these match the keys on top ^ in terms of format

    let url = `${baseURL}?ts=${ts}&apikey=${apikey}&hash=${hash}&`;
    // let url = `${baseURL}?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=100`;
    console.log(`URL is -- ${url}`)

    try {
        let response = await fetch(url);
        let data = await response.json();
        // console.log(`DATA RESULTS IS -- ${JSON.stringify(data.data.results)}`)
        // this ^ console.log displays the data that is retrieved from the api upon search button click
        return data.data.results;
    } catch (err) {
        console.error(err);
        return;
    }
}


export { fetchHeroes, fetchHero }