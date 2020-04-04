/*global fetch*/
import React from 'react';
import { withRouter } from "react-router-dom";
import { IoMdArrowBack } from 'react-icons/io';

import { Header } from '../Header/Header.js'
import '../Header/Header.css'




class SpeceficCountryCard extends React.Component {

    getBorderDetails=(cntryDet)=>
    {
        let { history } = this.props;
        let {all} = this.props.history.location.state
        history.push(`/CountriesDashboardApp/details/${cntryDet.alpha3Code}`, {cntryDet,all} );
  
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render(){ 
        let { cntryDet,all } = this.props.history.location.state;
        let countryDetails=cntryDet
        return (
    <div style={this.props.selectedTheme === 'Dark mode' ? darkMode:lightMode}>
    
    <Header onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.selectedTheme}/>
  
    <div style={backBtn}>
        <button style={this.props.selectedTheme === 'Dark mode' ?darkModeBtn:lightModeBtn} onClick={this.goBack}><span style={backArr}><IoMdArrowBack/>Back </span></button>
    </div>

    <div style={countryDetailsBlock}>              
       <div><img style={image} src={countryDetails.flag} /></div>
       <div style={detailsBlock }>
         <div><b>{countryDetails.name}</b></div>
         <div style={alignBlc}>
             <div><p><b>Native Name:</b>{countryDetails.nativeName}</p>
             <p><b>Population:</b>{countryDetails.population}</p>
             <p><b>Region:</b>{countryDetails.region}</p>
             <p><b>Sub Region:</b>{countryDetails.subregion}</p>
             <p><b>Capital:</b>{countryDetails.capital}</p>   
         </div>
    <div>
        <div style={itemsContainer} ><b>Top Level Domain:</b>{countryDetails.topLevelDomain.map((item,index)=><span>{ (index ? ',' : '') + item}</span>)}</div>   
        <div style={itemsContainer} ><b>Currencies:</b>{countryDetails.currencies.map((item,index)=><span>{ (index ? ',' : '') + item.name }</span>)}</div>   
        <div style={itemsContainer} ><b>Languages:</b>{countryDetails.languages.map((item,index)=><span>{ (index ? ',' : '') + item.name }</span>)}</div>
    </div>
    </div>
        <p style={cntryBorderContainer} ><b>Borders Countries:</b>
             {countryDetails.borders.map(item=>
             all.map(item1=>
             (item1.alpha3Code===item?<span onClick={()=>this.getBorderDetails(item1)} style={this.props.selectedTheme === 'Dark mode' ? darkModeBtn:lightModeBtn}>{item1.name}</span>:"")))}</p>

    </div>

     
    </div>    
    </div>);

    }

}












let countryDetailsBlock = {
    display: 'flex',
    justifyContent:'space-around',
    margin:'20px'
}
let detailsBlock = {
    marginLeft:'50px',
}
let itemsContainer = {
    display: 'flex',
}

let backBtn = {
    margin: '20px',
    fontSize:'20px'
}

let darkModeBtn = {
    border: 'none',
    height: '30px',
    boxShadow: '0px 8px 6px black',
    marginRight: '10px',
    color: 'white',
    padding:'10px'
}
let lightModeBtn = {
    border: 'none',
    height: '30px',
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.12),inset 0 -1px 0 0 #dadce0',
    marginRight: '10px',
    padding: '10px',
}

let cntryBorderContainer = {
    display: 'flex',
    alignItems: 'baseline',
    flexWrap: 'wrap',

}
let darkMode = {

    backgroundColor: '#2b3945',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    height:'100vh'
}

let lightMode = {

    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
        height:'100vh'
}



let header = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    boxShadow: '0 8px 6px -6px black',

}
let backArr = {
    width: '10px'
}

let alignBlc = {
    display: 'flex',
 justifyContent:'space-between'   
}
let image={
   width:"400px",
   borderRadius:'0px'
}
export default withRouter(SpeceficCountryCard)

