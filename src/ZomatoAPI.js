const api = "https://developers.zomato.com/api/v2.1/"

const headers = {
            'Accept': 'application/json',
            'user-key': 'fb495d4740db3a18f7de8ca9f150933e'
        }

export const get = (name, lat, lng) =>
        fetch(`${api}search?q=${name}&count=1&lat=${lat}&lon=${lng}`, { 
            method: 'GET',
            headers
            }).then(res => res.json())
            .then(data => data.restaurants)

