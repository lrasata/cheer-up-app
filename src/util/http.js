export const fetchData = async (setFunc, category) => {
    const dogApiUrl = 'https://api.thedogapi.com/v1/images/search';
    const dopAPIkey = 'live_lTT8GmkQmDyGf5GTeMD0auFAMY0ik1jrmfZfTLv2chAoOkTgOk08koib0iIxpbi9';

    const catAPiUrl = 'https://api.thecatapi.com/v1/images/search';
    const catApiKey = 'live_ZroI67pbPSnzAeCslCpYM9PhVlQfsITv19Kp5wkgP883LF2lbUGk5YxrNuvZ4oWM'

    const url = category === 'dog' ? dogApiUrl : catAPiUrl;
    const key = category === 'dog' ? dopAPIkey : catApiKey;

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `x-api-key ${key}`
        }
    }

    fetch(url, options)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setFunc(data[0]);
        });
}