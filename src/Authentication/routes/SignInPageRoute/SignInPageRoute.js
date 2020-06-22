import React,{Component} from 'react';
import { observable,action } from 'mobx';
import {observer,inject} from 'mobx-react';
import { withRouter } from 'react-router-dom';

import SignInPage from '../../components/SignInPage/SignInPage.js'


@inject('authStore')
@observer
class SignInPageRoute extends React.Component {
    @observable username
    @observable password
    @observable errorMessage
  //  passwordRef=React.createRef();
    
    constructor(props){
        super(props);
        this.init();
    }
    
    @action
    init(){
        this.username=""
        this.password=""
        this.errorMessage=null;
    }
    
    @action.bound
    onChangeUsername(event){
            this.username=event.target.value;
            
    }
    
    @action.bound
    onChangePassword(event){
            this.password=event.target.value;
            
    }
    
    @action.bound
    onClickSignIn(){
        

        if(this.username.length === 0){
            this.errorMessage='please Enter Username';
        }
        else if(this.password.length === 0){
            this.errorMessage='please Enter password';
           // this.passwordRef.current.focus();
        }
        else{
        this.props.authStore.userSignIn(); 
        let { history } = this.props;
        history.push(`/ProductsPage`);
        }
    }
    
            
        
    
    render(){
      const onChangeUsername=this.onChangeUsername
        const onChangePassword=this.onChangePassword
        const onClickSignIn =this.onClickSignIn
        const errorMessage =this.errorMessage
        const username=this.username
        const password=this.password
        
        
      //  const passwordRef=this.passwordRef;
        
        return (<SignInPage onChangeUsername={onChangeUsername}
        onChangePassword={onChangePassword}
        onClickSignIn={onClickSignIn}
        errorMessage={errorMessage}
        username={username}
        password={password}
        />);
    }
}

export default withRouter(SignInPageRoute);