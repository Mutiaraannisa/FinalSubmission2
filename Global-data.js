class GlobalDataSource {
    static getCovidDataGlobal() {
        return fetch(`https://covid19.mathdro.id/api`)
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            if(responseJSON) {
                return Promise.resolve(responseJSON);
            } else {
                return Promise.reject('ERROR');
            }
        })
    }
}

export default GlobalDataSource;