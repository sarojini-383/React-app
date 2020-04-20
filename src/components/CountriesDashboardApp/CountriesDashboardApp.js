
/*global fetch*/
import React from 'react';
import themeStore from "../../stores/ThemeStore"; 
//import {observable} from "mobx"; 

import {observer} from "mobx-react"; 


import { Header } from '../Header/Header'
import '../Header/Header.css'

import { SelectRegion } from '../SelectRegion/SelectRegion'
import '../SelectRegion/SelectRegion.css'

import { SearchCountry } from '../SearchCountry/SearchCountry'
import '../SearchCountry/SearchCountry.css'

import { Countries } from '../Countries/Countries.js'
import '../Countries/Countries.css'

import {CountriesFilterBarContainer,CountryCardContainer,Loading} from '../styledComponentForCountryDashBoard.js'


@observer 
class CountriesDashboardApp extends React.Component{

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
                {this.getCountries(json);
                console.log(json);}
            );
    }

    // getRegionOptions = (json) => {
    //     const reqRegionsList = [...new Set(json.map(cntry => cntry.region))];
    //     this.setState({ regionsList: reqRegionsList })

    // }

    getCountries = (json) => {
        let countryDetails=[];
        json.forEach(item => {
            countryDetails.push(item)
        });

        this.setState({ countries: countryDetails })
        this.setState({ allCountries: countryDetails })
        //this.getRegionOptions(countryDetails)
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
        
        let {allCountries}=this.state;
        
        if (searchedTxt === "" && selectedRegion === 'All') {
            this.setState({ countries: allCountries });
        }

        else if (searchedTxt !== "" && selectedRegion === 'All') {
            let countriesByName = allCountries.filter((item) => item.name.toLowerCase().search(searchedTxt.toLowerCase()) !== -1);
            this.setState({ countries: countriesByName });
        }

        else if (searchedTxt === "" && selectedRegion !== 'All') {
            let countriesByRegion = allCountries.filter((item) => item.region.toLowerCase().search(selectedRegion.toLowerCase()) !== -1);
            this.setState({ countries: countriesByRegion });
        }

        else if (searchedTxt != "" && selectedRegion !== 'All') {
            let countriesByName = allCountries.filter((item) => item.name.toLowerCase().search(searchedTxt.toLowerCase()) !== -1);
            let result = countriesByName.filter((item) => item.region.toLowerCase().search(selectedRegion.toLowerCase()) !== -1);
           this.setState({ countries: result })
        }
    }
    filterCountriesByRegion = () => {
      let {allCountries}=this.state;  
        let filteredRegions= [...new Set(allCountries.map(cntry=> cntry.region))];
        return filteredRegions
    }

    filterCountriesByName = (s) => {

    }
  getCurrentTheme=()=>{
  return themeStore.selectedTheme;  
  }
  
    onChangeTheme=()=>{
   themeStore.setCurrentTheme();  
  }

    render() {
        let {onChangeTheme}=this.props;
        return (<div className={this.getCurrentTheme() === 'Dark mode' ?'dark-mode':'light-mode'}>
        <Header   onChangeTheme={onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
        
   
     
       <CountriesFilterBarContainer >
       
        <SearchCountry selectedTheme={this.getCurrentTheme()} onChangeSearchText={this.onChangeSearchText} />
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
