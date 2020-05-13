import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Provider} from 'mobx-react'
import stores from './stores'
import EcommerceStores from './EcommerceSite/EcommerceStores'

import AuthStores from './Authentication/AuthStores'

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import GridMemoryGame from "./components/GridMemoryGame/index.js";

import { TodosList } from './components/TodosList/index'
import './components/TodosList/index.css'

import TodosApp  from './components/TodoListByStoreAndModel/TodosApp.js'

import UsersPage  from './components/UsersPage/index.js'
import TodoAppByNetworkCalls  from './components/TodoAppByNetworkCalls/index.js'

import LoginPage from './components/common/LoginPage'

//import SignInPage from './Authentication/components/SignInPage/SignInPage.js'
//import ProductsPage from './EcommerceSite/components/ProductsPage/ProductsPage.js'

import ProductsPageRoute from './EcommerceSite/routes/ProductsPageRoute/ProductsPageRoute.js'
import SignInPageRoute from './Authentication/routes/SignInPageRoute/'

import routes from './Authentication/routes'

import "./App.css";

const ThemeContext = React.createContext('light');

const App = () => {
  console.log(EcommerceStores)
  return (
    <Provider {...stores} {...EcommerceStores} {...AuthStores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      {routes}
      {/* <Route exact path="/counter-page">
          <CounterPage />
        </Route>...remove*/}
        
        
        <Route exact path="/login">
          <LoginPage />
        </Route>
        
        <Route exact path="/grid">
          <GridMemoryGame />
        </Route>
        
        <Route exact path="/todo-1">
          <TodosList />
        </Route>
        
        <Route exact path="/todo-2">
          <TodosApp />
        </Route>
        
        <Route exact path="/user" component={UsersPage }/>

        <Route exact path="/todo-3" component={TodoAppByNetworkCalls }/>
              {/*<ThemeContext.Provider value="dark">*/}
        <Route exact path="/ECommerse" component={ SignInPageRoute }/>
        {/*</ThemeContext>*/}
        <Route exact path="/ProductsPage" component={ ProductsPageRoute }/>

        
        <Route path="/">
          <HomePage />
        </Route>

      </Switch>
    </Router>
    </Provider>
  );
};

export default App;

// import React from 'react';
// //import { render } from "react-dom";

// //import {configure,action} from 'mobx'
// import {observer} from "mobx-react"; 
//import CounterPage from "./components/CounterPage";


// //configure({enforceActions:true});

// import themeStore from "./stores/ThemeStore"; 
// import { CarsList } from './components/CarsList'
// import './components/CarsList/carsListCss.css'

// import { TodoApp } from './components/MobxTodosList/TodoApp'
// import TodosApp  from './components/TodoListByStoreAndModel/TodosApp'

// import { TodosList } from './components/TodosList/index'
// import './components/TodosList/index.css'

// //import { FormComponents } from './components/FormComponents'
// //import './components/FormComponents/index.css'


// import CountriesDashboardApp from './components/CountriesDashboardApp/CountriesDashboardApp'
// import './components/CountriesDashboardApp/CountriesDashboardApp.css'

// import SpeceficCountryCard from './components/speceficCountryCard/speceficCountryCard'
// import './components/CountriesDashboardApp/CountriesDashboardApp.css'

// import EmojiGame from "./components/EmojiGame/EmojiGame";
// import CounterApp from "./components/CounterApp/CounterApp";

// import EventsApp from "./components/EventsApp/EventsApp";

// import  A  from './components/ReactInject/index'

// import GridMemoryGame from "./components/GridMemoryGame/index.js";

// //ibmport logo from './logo.svg';
// import './App.css';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// }
// from "react-router-dom"

// @observer 
// class App extends React.Component {
  
//   getCurrentTheme=()=>{
//   return themeStore.selectedTheme;  
//   }

//     onChangeTheme=()=>{
//   themeStore.setCurrentTheme();  
//   }
  

//   render() {
//     return (
//       <Router basename={process.env.PUBLIC_URL}>
//       <div>
//         <nav>
//           <ul>
//           <li>
//               <Link to="/CarsList">CarsList</Link>
//             </li>
            
//                           <li>
//               <Link to="/MobxTodosList">Mobx TodosList</Link>
//             </li>
            
//           <li>
//               <Link to="/TodoListByStoreAndModel">TodosList By Store And Model</Link>
//             </li>
            
//             <li>
//               <Link to="/EventsApp">Events App</Link>
//             </li>     
            
//               <li>
//               <Link to="/TodosList">TodosList</Link>
//             </li>

//       {/* <li>
//               <Link to="/FormComponents">Form Components</Link>
//             </li>*/}
            
            
//             <li>
//               <Link to="/CountriesDashboardApp">Countries Dashboard App</Link>
//             </li>
            
//                       <li>
//               <Link to="/EmojiGame">Emoji Game</Link>
//             </li>            
//             <li>
//               <Link to="/CounterApp">Counter App</Link>
//             </li>    
            
//                           <li>
//               <Link to="/inject">Inject</Link>
//             </li>
//                           <li>
//               <Link to="/Grid">Grid</Link>
//             </li>
            
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
      
//         <Switch>
//         <Route path="/CarsList">
//           <CarsList/>
//           </Route>
          
//           <Route path="/MobxTodosList">
//           <TodoApp/>
//           </Route>
          
//           <Route path="/TodoListByStoreAndModel">
//           <TodosApp />
//           </Route>
         
//         <Route path="/EventsApp">
//           <EventsApp />
//           </Route>
          
//           <Route path="/TodosList">
//           <TodosList/>
//           </Route>
          
//       {/* <Route path="/FormComponents">
//           <FormComponents/>
//           </Route>*/}
         
                       
//         <Route path="/CountriesDashboardApp/details/:id">
//           <SpeceficCountryCard onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
//           </Route>
              
              
//         <Route path="/CountriesDashboardApp">
//           <CountriesDashboardApp  onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
//           </Route>
          
//       {/*  <Route path="/CountriesDashboardApp">
//           <CountriesDashboardApp  onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
//           </Route>*/}
            
//         <Route path="/EmojiGame">
//           <EmojiGame  />
//           </Route> 
          
//       <Route path="/CounterApp">
//           <CounterApp  />
//           </Route> 
          
//           <Route path="/inject">
//           <A />
//           </Route> 
//               <Route path="/Grid">
//           <GridMemoryGame />
//           </Route> 
    
//         </Switch>
//       </div>
//     </Router>
//     );
//   }
// }

// export default App;