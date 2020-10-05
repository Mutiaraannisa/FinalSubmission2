import '../component/Global-case.js';
import GlobalDataSource from '../data/Global-data.js';
import '../component/country-bar.js';
import DataSource from '../data/Global-data.js';
import '../component/search-bar.js';

const main = () => {
    const GlobalCase = document.querySelector('global-case');
    const CountryElement = document.querySelector('country-bar');
    const searchCountryElement = document.querySelector('search-bar');

    const onButtonSearchClicked = async() => {
      try{
        const result = await DataSource.searchCountry(searchCountryElement.value);
        renderResult(result);
      }catch {
        fallbackResult(message)
      }
    };
      const renderResult = results => {
          CountryElement.country = results;

      } 
      const fallbackResult = message => {
        CountryElement.renderError(message);
      }
      searchCountryElement.clickEvent = onButtonSearchClicked;
  
    const getData = () => {
      GlobalDataSource.getCovidDataGlobal()
        .then((result) => (GlobalCase.covidDataGlobal = result));
    };
  
    getData();
  };

  export default main;