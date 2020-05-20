/*global fetch*/

import React from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'



function withCountries (WrappedComponent){
    
    @observer
    class withCountriesComponent extends React.Component{
    @observable countries;
    @observable allCountries;
    
    cosntructor(){
        this.countries=[];
        this.allCountries=[];
    }
    
 async componentDidMount(){
    await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json =>
            {this.countries=json;
            this.allCountries=json;
        });
  }

    // getCountries = (json) => {
    //     let countryDetails=[];
    //     json.forEach(item => {
    //         countryDetails.push(item)
    //     });
    //     this.countries=countryDetails;
    //     this.allCountries=countryDetails;
    //     //console.log("hocsCntries", countryDetails)
    // }
    

    render(){
        return <WrappedComponent getCountries={this.getCountries} countries={this.countries} allCountries={this.allCountries}/>
    }
        
    }
    
    return withCountriesComponent;
}

export default withCountries;