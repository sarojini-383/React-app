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

const DisplayMessage=(props)=>{
    return <div>{props.children()}</div>
}
@observer
class SignInPage extends React.Component {
    @observable username
    @observable password
    @observable errorMessage
    userNameRef=React.createRef();
    
    
    componentDidMount(){
      this.userNameRef.current.focus();
    }
   // static contextType = ThemeContext;
    render(){
        
        const {
            onChangeUsername,
            onChangePassword,
            onClickSignIn,
            errorMessage,
            username,
            password,
            passwordRef
        } =this.props;
        return (<SignInPageContainer>
                    <SignInTxt>Sign in</SignInTxt>
                    <UserInput ref={this.userNameRef} placeholder="Username" value={username} onChange={onChangeUsername} type="text"></UserInput>
                    <Password ref={passwordRef} placeholder="Password" value={password} onChange={onChangePassword}  type="password"></Password>
                    <SignInBtn color={'black'} onClick={onClickSignIn} >Sign in</SignInBtn>
                    <ErrorMsg>{errorMessage}</ErrorMsg>
                    <DisplayMessage>{()=><div>Lasii</div>}</DisplayMessage>
            </SignInPageContainer>);
    }
}

export default SignInPage;