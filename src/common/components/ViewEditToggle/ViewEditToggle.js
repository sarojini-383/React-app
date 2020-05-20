import React from 'react';
import withToggle from '../../hocs/withTooggleHoc.js'
import {
    ViewEditToggleContainer,
    Title,
    UserBlock,
    InputField,
    EditBtn
} from './styledComponent'
class ViewEditToggle extends React.Component{
    
    
    render(){
        return(
            <ViewEditToggleContainer>
            <Title>ViewEditToggle</Title>
            <UserBlock>
           <InputField  disabled={this.props.toggleStatus} value={this.props.data} onChange={()=>this.props.handleChange(event)} placeholder="Click on the edit button to start editing">
            </InputField>
            
            <EditBtn onClick={this.props.onToggle} >{this.props.toggleStatus?'Edit':'Cancel'}</EditBtn></UserBlock>
            </ViewEditToggleContainer>
            )
    }    
}


export default withToggle(ViewEditToggle);
