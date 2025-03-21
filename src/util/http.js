export const fetchData = async (setFunc) => {
    const url = 'https://api.thedogapi.com/v1/images/search';
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `x-api-key live_lTT8GmkQmDyGf5GTeMD0auFAMY0ik1jrmfZfTLv2chAoOkTgOk08koib0iIxpbi9`
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