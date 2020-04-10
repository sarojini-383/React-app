// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import Page1 from "./components/Page1";
// import CounterPage from "./components/CounterPage";


// import "./App.css";

// const App = () => {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//           <Route exact path="/counter-page">
//           <CounterPage />
//         </Route>
        
//         <Route exact path="/page-1">
//           <Page1 />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>

//       </Switch>
//     </Router>
//   );
// };

// export default App;

import React from 'react';


import { render } from "react-dom";
import {observable} from "mobx"; 
//import {configure,action} from 'mobx'

import {observer} from "mobx-react"; 
import themeStore from "./stores/ThemeStore"; 

//configure({enforceActions:true});


import { CarsList } from './components/CarsList'
import './components/CarsList/carsListCss.css'

import { TodoApp } from './components/MobxTodosList/TodoApp.js'
import TodosApp  from './components/TodoListByStoreAndModel/TodosApp.js'

import { TodosList } from './components/TodosList/index.js'
import './components/TodosList/index.css'

//import { FormComponents } from './components/FormComponents'
//import './components/FormComponents/index.css'


import CountriesDashboardApp from './components/CountriesDashboardApp/CountriesDashboardApp.js'
import './components/CountriesDashboardApp/CountriesDashboardApp.css'

import SpeceficCountryCard from './components/speceficCountryCard/speceficCountryCard.js'
import './components/CountriesDashboardApp/CountriesDashboardApp.css'

import EmojiGame from "./components/EmojiGame/EmojiGame.js";
import CounterApp from "./components/CounterApp/CounterApp.js";

import EventsApp from "./components/EventsApp/EventsApp.js";


import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}
from "react-router-dom";

@observer 
class App extends React.Component {
  
//@observable selectedTheme="Light mode"
  // state = {
  //   selectedTheme: 'Light mode',
    
  // }
  getCurrentTheme=()=>{
 // return this.selectedTheme;  
  return themeStore.selectedTheme;  
  
  }
// @action 
    onChangeTheme=()=>{
   themeStore.setCurrentTheme();  
  //this.selectedTheme=theme
  //console.log('currentTheme',this.selectedTheme)
  }
  
  // onChangeTheme = () => {

  //   if (this.state.selectedTheme === 'Light mode') {
  //     this.setState({ selectedTheme: 'Dark mode' });
  //   }
  //   else {
  //     this.setState({ selectedTheme: 'Light mode' });
  //   }
  // }
  
  // onChangeTheme = () => {

  //   if (this.getCurrentTheme() ==='Light mode') {
  //     this.setCurrentTheme('Dark mode');
  //   }
  //   else {
  //     this.setCurrentTheme('Light mode');
  //   }
  // }
  
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
              <Link to="/MobxTodosList">Mobx TodosList</Link>
            </li>
            
           <li>
              <Link to="/TodoListByStoreAndModel">TodosList By Store And Model</Link>
            </li>
            
            <li>
              <Link to="/EventsApp">Events App</Link>
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
                      <li>
              <Link to="/CounterApp">Counter App</Link>
            </li>            

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      
        <Switch>
        <Route path="/CarsList">
          <CarsList/>
          </Route>
          
          <Route path="/MobxTodosList">
          <TodoApp/>
          </Route>
          
          <Route path="/TodoListByStoreAndModel">
          <TodosApp/>
          </Route>
         
        <Route path="/EventsApp">
          <EventsApp />
          </Route>
          
          <Route path="/TodosList">
          <TodosList/>
          </Route>
          
        {/*<Route path="/FormComponents">
          <FormComponents/>
          </Route>*/}
         
                       
        <Route path="/CountriesDashboardApp/details/:id">
          <SpeceficCountryCard onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
              
              
        {/*<Route path="/CountriesDashboardApp">
          <CountriesDashboardApp  onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>*/}
          
        <Route path="/CountriesDashboardApp">
          <CountriesDashboardApp  onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
            
        <Route path="/EmojiGame">
          <EmojiGame  />
          </Route> 
          
       <Route path="/CounterApp">
          <CounterApp  />
          </Route> 
    
    
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;



