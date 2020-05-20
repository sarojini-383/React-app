import React from 'react';

import withScreenSizeDetectors from '../../hocs/withScreenSizeDetectorsHoc.js'
import {
    ViewEditToggleContainer,
    Title,
    UserBlock,
    ShoppingList,
    EditBtn
} from './styledComponent'

class DeviceTypeText extends React.Component{
    
    
    render(){
        
        return(
            <ViewEditToggleContainer>
            <Title>DeviceTypeTex</Title>
            <p>Device Type:{this.props.deviceType}</p>
            
            </ViewEditToggleContainer>
            )
    }    
}


export default withScreenSizeDetectors(DeviceTypeText);
