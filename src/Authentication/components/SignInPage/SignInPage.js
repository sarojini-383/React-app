import React,{Component} from 'react';
import { observable,action } from 'mobx';
import {observer} from 'mobx-react';
import { withRouter } from 'react-router-dom';
import authStore from '../../stores/AuthStore'
import {
    SignInPageContainer,
    UserInput,
    Password,
    SignInBtn,
    SignInTxt,
    ErrorMsg,
} from '../../styledComponent';

@observer
class SignInPage extends React.Component {
    @observable username
    @observable password
    @observable errorMessage
    
    constructor(props){
        super(props);
        this.init();
    }
    
    @action
    init(){
        this.username="",
        this.password="",
        this.errorMessage=null;
    }
    
    @action.bound
    onChangeUsername(event){
            this.username=event.target.value;
    }
    
    @action.bound
    onChangePassword(){
            this.password=event.target.value;
    }
    
    @action.bound
    onClickSignIn(){
       // authStore.userSignIn();
        if(this.username.length === 0){
            this.errorMessage='please Enter username';
        }
        else if(this.password.length === 0){
            this.errorMessage='please Enter password';
        }
        else{
        let { history } = this.props;
        history.push(`/ProductsPage`);
        }
    }
    
    render(){
        return <SignInPageContainer>
                    <SignInTxt>Sign in</SignInTxt>
                    <UserInput placeholder="Username" onChange={this.onChangeUsername} type="text"></UserInput>
                    <Password  placeholder="Password" onChange={this.onChangePassword}  type="password"></Password>
                    <SignInBtn onClick={this.onClickSignIn} >Sign in</SignInBtn>
                    <ErrorMsg>{this.errorMessage}</ErrorMsg>
            </SignInPageContainer>
    }
}

export default withRouter(SignInPage);