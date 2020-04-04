import React from "react";

import { Greetings } from '../Greetings/Greetings.js'
import '../Greetings/Greetings.css'

import { FavouriteDessert } from '../FavouriteDessert/FavouriteDessert.js'
import '../FavouriteDessert/FavouriteDessert.css'

import { VisitedCities } from '../VisitedCities/VistedCities.js'
import '../VisitedCities/VisitedCities.css'

import { YourState } from '../YourState/YourState.js'
import '../YourState/YourState.css'

import { DisableOrEnable } from '../DisableOrEnable/DisableOrEnable.js'
import '../DisableOrEnable/DisableOrEnable.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
}
from "react-router-dom";


const dessertList = ["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"];
const stateList = ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]
const cityList = ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]

function FormComponents() {
  return (
    <Router>
      <div>
      
    <div className="container" >
    <button class="back-icon"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg>
    </button>
    <div>Form Components</div>
    </div>
        <ul>
        
            <li>
              <Link to="/Greetings">Greetings</Link>
            </li>
              
              <li>
              <Link to="/FavouriteDessert">Favourite Dessert</Link>
            </li>
            
             <li>
              <Link to="/VisitedCities">Visited Cities</Link>
            </li>
            
                        <li>
              <Link to="/YourState">Your State</Link>
            </li>
            
                        <li>
              <Link to="/DisableOrEnable">DisableOrEnable</Link>
            </li>
        


        </ul>

        <Switch>
      
          <Route path="/Greetings">
          <Greetings/>
          </Route>
          
          <Route path="/FavouriteDessert">
          <FavouriteDessert list={dessertList}/>
          </Route>

          <Route path="/VisitedCities">
          <VisitedCities list={cityList}/>
          </Route>
          

          <Route path="/YourState">
          <YourState list={stateList}/>
          </Route>


  <Route path="/DisableOrEnable">
          <DisableOrEnable />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}





/*function NavBar() {
    return <div className="nav-bar">
    <div className="container" >
    <button onClick={renderToPreviousPage} class="back-icon"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg>
    </button>
    <div>Form Components</div>
    </div>
    <Greetings/>
    </div>
}*/

export { FormComponents }
//export default withRouter(NavBar);
