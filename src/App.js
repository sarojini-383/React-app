// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import Page1 from "./components/Page1";


// import "./App.css";

// const App = () => {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//         <Route exact path="/page-1">
//           <Page1 />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//             <Route exact path="/Emoji">
//           <EmojiGame />
//         </Route>
        
//       </Switch>
//     </Router>
//   );
// };

// export default App;

import React from 'react';


import { render } from "react-dom";



import { CarsList } from './components/CarsList'
import './components/CarsList/carsListCss.css'

import { TodosList } from './components/TodosList'
import './components/TodosList/index.css'

//import { FormComponents } from './components/FormComponents'
//import './components/FormComponents/index.css'


import CountriesDashboardApp from './components/CountriesDashboardApp/CountriesDashboardApp.js'
import './components/CountriesDashboardApp/CountriesDashboardApp.css'

import SpeceficCountryCard from './components/speceficCountryCard/speceficCountryCard.js'
import './components/CountriesDashboardApp/CountriesDashboardApp.css'

import EmojiGame from "./components/EmojiGame/EmojiGame.js";



import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}
from "react-router-dom";

class App extends React.Component {
  state = {
    selectedTheme: 'Light mode',
    
  }
  onChangeTheme = () => {

    if (this.state.selectedTheme === 'Light mode') {
      this.setState({ selectedTheme: 'Dark mode' });
    }
    else {
      this.setState({ selectedTheme: 'Light mode' });
    }
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/CarsList">CarsList</Link>
            </li>
            
              <li>
              <Link to="/TodosList">TodosList</Link>
            </li>
            
        {/*<li>
              <Link to="/FormComponents">Form Components</Link>
            </li>*/}
            
            
            <li>
              <Link to="/CountriesDashboardApp">Countries Dashboard App</Link>
            </li>
            
                       <li>
              <Link to="/EmojiGame">Emoji Game</Link>
            </li>            

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      
        <Switch>
        <Route path="/CarsList">
          <CarsList/>
          </Route>
          
          <Route path="/TodosList">
          <TodosList/>
          </Route>
          
        {/*<Route path="/FormComponents">
          <FormComponents/>
          </Route>*/}
         
                       
        <Route path="/CountriesDashboardApp/details/:id">
          <SpeceficCountryCard onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
              
              
        <Route path="/CountriesDashboardApp">
          <CountriesDashboardApp  onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
          
        <Route path="/CountriesDashboardApp">
          <CountriesDashboardApp  onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
            
        <Route path="/EmojiGame">
          <EmojiGame  />
          </Route> 
    
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;



