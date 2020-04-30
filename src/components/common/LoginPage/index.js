import React,{Component} from 'react';
import { withRouter,Redirect  } from "react-router-dom";
import {observable} from 'mobx'

import {ACCESS_TOKEN} from '../../../utils/StorageUtils';

//import { toast, cssTransition } from 'react-toastify'



class LoginPage extends React.Component{
 isLoggedin=false
 @observable toast
 getGridGame=()=>{
             let { history } = this.props;

             console.log(ACCESS_TOKEN)
this.isLoggedin=true
let arr = [
    {
        num: 3,
        text: 'z',
    },

    {
        num: 1,
        text: 'y'
    },

    {
        num: 2,
        text: 'x'
    },
];
     // arr.sort((a, b) => (a.num - b.num))
    //  console.log('ass',arr)

      arr.sort((a, b) => (b.num - a.num))
      console.log('desc',arr)
  
}

 

 
 render(){

     return (
         <div style={{width:'200px',display:'flex',flexDirection:'column',margin:'auto',marginTop:'60px'}}>
         <input style={{border:'2px solid black',color:'black'}} type="text" placeholder="Username" />
         <input style={{border:'2px solid black',color:'black',margin:'10px' }} type="password"  placeholder="password" />
         <button onClick={this.getGridGame()} style={{border:'2px solid black'}}>Login</button>
         <button onClick={this.notify()}>toast</button>
         </div>
         )
 }
    
}

export default LoginPage;