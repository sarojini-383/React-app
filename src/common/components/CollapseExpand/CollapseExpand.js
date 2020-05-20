import React from 'react';
import withToggle from '../../hocs/withTooggleHoc.js'
import {
    ViewEditToggleContainer,
    Title,
    UserBlock,
    ShoppingListTxt,
    ShoppingList,
    EditBtn
} from './styledComponent'

class CollapseExpand extends React.Component{
    
    
    render(){
        return(
            <ViewEditToggleContainer>
            <Title>CollapseExpand</Title>
            <UserBlock>
            <ShoppingListTxt>Sample Shopping List:</ShoppingListTxt>
             {this.props.toggleStatus?null:<ShoppingList style={{display:'flex',flexDirection:'column'}}>
             <p>Eggs</p>
             <p>Bread</p></ShoppingList>}
            <EditBtn onClick={this.props.onToggle} >{this.props.toggleStatus?'Exapand':'Collapse'}</EditBtn>
            </UserBlock>
            </ViewEditToggleContainer>
            )
    }    
}


export default withToggle(CollapseExpand);
