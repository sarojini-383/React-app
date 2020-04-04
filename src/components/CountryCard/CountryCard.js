import React from 'react';
import { withRouter } from "react-router-dom";

import { SpeceficCountryCard } from '../speceficCountryCard/speceficCountryCard.js'
import '../speceficCountryCard/speceficCountryCard.css'



class CountryCard extends React.Component {
    state = {
        selectedRegion: 'all'
    }

    displayCountryCard = () => {
        let { history, cntryDet,all } = this.props;
        history.push(`/CountriesDashboardApp/details/${cntryDet.alpha3Code}`,{cntryDet,all});
    }


    render() {
        let countryDetails = this.props.cntryDet;

        return (
            <div onClick={this.displayCountryCard} >{this.displayCountryCard}
                    <div className="country-card">
                    <img src={countryDetails.flag}  width='200px' height='200px  '  />

            <div className="detailsBlc"> 
             <h3>{countryDetails.name}</h3>
             <span><strong>Population:</strong>{countryDetails.population}</span>
             <span><b>Region:</b>{countryDetails.region}</span>
             <span><b>Capital:</b>{countryDetails.capital}</span></div>
             </div>
             </div>
        );

    }

}

export default withRouter(CountryCard);
