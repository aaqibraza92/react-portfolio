import axios from "axios";

const Csc = {
    getCountries: () => {
        let flist = [];
        try {
            axios.get('https://countriesnow.space/api/v0.1/countries/codes')
                .then((res) => {
                    res.data.data.map(country =>
                        flist.push({ value: country.name, label: country.name, code: country.code, dialcode: country.dial_code })
                    )
                });

        } catch (error) {
            console.log('CSC.js Error : ', error);
        }
        return flist;
    },
    getStates: (countryName) => {
        let flist = [];
        try {
            const article = { country: countryName };
            const headers = {
                'Content-Type': 'application/json'
            };
            axios.post('https://countriesnow.space/api/v0.1/countries/states', article, { headers })
                .then((res) => {
                    if (res) {
                        if (res.status.toString() === "200") {
                            if (res.data) {
                                res.data.data.states.map(state =>
                                    flist.push({ value: state.name, label: state.name, code: state.code })
                                )
                            }
                        }
                    }
                    

                })
                .catch((error) => {
                    console.log('CSC.js Error: ', error);
                });

        } catch (error) {
            console.log('CSC.js Error : ', error);
        }
        return flist;
    },
    getCities: (countryName, stateName) => {
        let flist = [];
        try {
            const article = { country: countryName, state: stateName };
            const headers = {
                'Content-Type': 'application/json'
            };
            axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', article, { headers })
                .then((res) => {
                    if (res) {
                        if (res.status.toString() === "200") {
                            if (res.data) {
                                res.data.data.map(city =>
                                    flist.push({ value: city, label: city })
                                )
                            }
                        }
                    }
                    

                })
                .catch((error) => {
                    console.log('CSC.js Error: ', error);
                });

        } catch (error) {
            console.log('CSC.js Error : ', error);
        }
        return flist;
    },
}

export default Csc;