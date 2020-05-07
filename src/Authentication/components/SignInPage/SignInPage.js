import React,{Component} from 'react';
import { observable,action } from 'mobx';
import {observer,inject} from 'mobx-react';
import { withRouter } from 'react-router-dom';


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
    
    
    render(){
        
        const {
            onChangeUsername,
            onChangePassword,
            onClickSignIn,
            errorMessage,
            username,
            password,
        } =this.props;
        return (<SignInPageContainer>
                    <SignInTxt>Sign in</SignInTxt>
                    <UserInput placeholder="Username" value={username} onChange={onChangeUsername} type="text"></UserInput>
                    <Password  placeholder="Password" value={password} onChange={onChangePassword}  type="password"></Password>
                    <SignInBtn  onClick={onClickSignIn} >Sign in</SignInBtn>
                    <ErrorMsg>{errorMessage}</ErrorMsg>
            </SignInPageContainer>);
    }
}

export default SignInPage;