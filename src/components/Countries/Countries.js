import React from 'react';

import CountryCard from '../CountryCard/CountryCard.js'
//import '../CountryCard/CountryCard.css'
//import {countryCardStyle} from '../styledComponentForCountryDashBoard.js'

class Countries extends React.Component {
    state = {
        selectedRegion: 'all'
    }


    render() {

        return (this.props.countries.map(item =>
            <countryCardStyle>
            <CountryCard  cntryDet={item} all={this.props.countries}/>
            </countryCardStyle>
        ));

    }

}


export { Countries }
