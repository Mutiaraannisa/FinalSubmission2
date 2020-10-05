class DataSource {
    static searchCountry(keyword) {
        return fetch(`https://covid.mathdro.id/api/countries/${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.countries) {
                return Promise.resolve(responseJson.countries);
            }else {
                return Promise.reject(`${keyword} is not found`);
            }
        })

    }
}

export default DataSource;