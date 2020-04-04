/*global fetch*/
import React from 'react';


import { Header } from '../Header/Header.js'
import '../Header/Header.css'

import { SelectRegion } from '../SelectRegion/SelectRegion.js'
import '../SelectRegion/SelectRegion.css'

import { SearchCountry } from '../SearchCountry/SearchCountry.js'
import '../SearchCountry/SearchCountry.css'

import { Countries } from '../Countries/Countries.js'
import '../Countries/Countries.css'

import {CountriesFilterBarContainer,CountryCardContainer,Loading} from '../styledComponentForCountryDashBoard.js'

class CountriesDashboardApp extends React.Component {

    state = {
      allCountries: [],
      countries: [],
      selectedRegion: 'All',
      searchedTxt: '',
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json =>
                this.getCountries(json)
            );
    }

    getRegionOptions = (json) => {
        const reqRegionsList = [...new Set(json.map(cntry => cntry.region))];
        this.setState({ regionsList: reqRegionsList })

    }

    getCountries = (json) => {
        let countryDetails = [];
        json.forEach(item => {
            countryDetails.push(item)
        });

        this.setState({ countries: countryDetails })
        this.setState({ allCountries: countryDetails })
        this.getRegionOptions(countryDetails)
this.filterCountriesByRegion()
    }

    onChangeSearchText = (searchedTxt) => {
        let countriesByName;
        this.setState({ searchedTxt: searchedTxt });

        this.combinationSearch(searchedTxt, this.state.selectedRegion);

    }

    onChangeSelectedRegion = (event) => {

        let selectedRegion = event.target.value;
        this.setState({ selectedRegion: event.target.value });
        this.combinationSearch(this.state.searchedTxt, selectedRegion);

    }



    combinationSearch = (searchedTxt, selectedRegion) => {
        
        if (searchedTxt === "" && selectedRegion === 'All') {
            this.setState({ countries: this.state.allCountries });
        }

        else if (searchedTxt !== "" && selectedRegion === 'All') {
            console.log(this.state.allCountries)
            let countriesByName = this.state.allCountries.filter((item) => item.name.toLowerCase().search(searchedTxt.toLowerCase()) !== -1);
            this.setState({ countries: countriesByName });
        }

        else if (searchedTxt === "" && selectedRegion !== 'All') {
            let countriesByRegion = this.state.allCountries.filter((item) => item.region.toLowerCase().search(selectedRegion.toLowerCase()) !== -1);

            this.setState({ countries: countriesByRegion });
        }

        else if (searchedTxt != "" && selectedRegion !== 'All') {
            let countriesByName = this.state.allCountries.filter((item) => item.name.toLowerCase().search(searchedTxt.toLowerCase()) !== -1);
            let result = countriesByName.filter((item) => item.region.toLowerCase().search(selectedRegion.toLowerCase()) !== -1);
            this.setState({ countries: result });
        }
    }
    filterCountriesByRegion = () => {
        let filteredRegions = [...new Set(this.state.allCountries.map(cntry => cntry.region))];
        return filteredRegions
    }

    filterCountriesByName = (s) => {

    }


    render() {
        return (<div className={this.props.selectedTheme === 'Dark mode' ?'dark-mode':'light-mode'}>
        <Header   onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.selectedTheme}/>
        
   
     
       <CountriesFilterBarContainer >
       
        <SearchCountry selectedTheme={this.props.selectedTheme} onChangeSearchText={this.onChangeSearchText} />
        <SelectRegion  countryRegions={this.filterCountriesByRegion()} onChange={this.onChangeSelectedRegion}  />
       
       </CountriesFilterBarContainer>


 {this.state.countries.length>0 ?
 <CountryCardContainer>
 <Countries countries={this.state.countries} /></CountryCardContainer >:
 <Loading>
 <h1>Loading........</h1>
 </Loading>}
</div>);
    }
}

export default CountriesDashboardApp;