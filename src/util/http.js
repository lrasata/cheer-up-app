export const fetchData = async (setFunc, category) => {
    const dogApiUrl = import.meta.env.VITE_DOG_API_URL;
    const dopAPIkey = import.meta.env.VITE_DOG_API_KEY;

    const catAPiUrl = import.meta.env.VITE_CAT_API_URL;
    const catApiKey = import.meta.env.VITE_CAT_API_KEY;

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
            setFunc({
                category,
                imageUrl: data[0].url,
                imageId: data[0].id,
            });
        });
}