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
//import { render } from "react-dom";

//import {configure,action} from 'mobx'
import {observer} from "mobx-react"; 


//configure({enforceActions:true});

import themeStore from "./stores/ThemeStore"; 
import { CarsList } from './components/CarsList'
import './components/CarsList/carsListCss.css'

import { TodoApp } from './components/MobxTodosList/TodoApp'
import TodosApp  from './components/TodoListByStoreAndModel/TodosApp'

import { TodosList } from './components/TodosList/index'
import './components/TodosList/index.css'

//import { FormComponents } from './components/FormComponents'
//import './components/FormComponents/index.css'


import CountriesDashboardApp from './components/CountriesDashboardApp/CountriesDashboardApp'
import './components/CountriesDashboardApp/CountriesDashboardApp.css'

import SpeceficCountryCard from './components/speceficCountryCard/speceficCountryCard'
import './components/CountriesDashboardApp/CountriesDashboardApp.css'

import EmojiGame from "./components/EmojiGame/EmojiGame";
import CounterApp from "./components/CounterApp/CounterApp";

import EventsApp from "./components/EventsApp/EventsApp";

import  A  from './components/ReactInject/index'

import GridMemoryGame from "./components/GridMemoryGame/index.js";

//ibmport logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}
from "react-router-dom"

@observer 
class App extends React.Component {
  
  getCurrentTheme=()=>{
  return themeStore.selectedTheme;  
  }

    onChangeTheme=()=>{
   themeStore.setCurrentTheme();  
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

       {/* <li>
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
            
                          <li>
              <Link to="/inject">Inject</Link>
            </li>
                          <li>
              <Link to="/Grid">Grid</Link>
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
          
       {/* <Route path="/FormComponents">
          <FormComponents/>
          </Route>*/}
         
                       
        <Route path="/CountriesDashboardApp/details/:id">
          <SpeceficCountryCard onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
              
              
        <Route path="/CountriesDashboardApp">
          <CountriesDashboardApp  onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
          
      {/*  <Route path="/CountriesDashboardApp">
          <CountriesDashboardApp  onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>*/}
            
        <Route path="/EmojiGame">
          <EmojiGame  />
          </Route> 
          
       <Route path="/CounterApp">
          <CounterApp  />
          </Route> 
          
           <Route path="/inject">
          <A />
          </Route> 
               <Route path="/Grid">
          <GridMemoryGame />
          </Route> 
    
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;



