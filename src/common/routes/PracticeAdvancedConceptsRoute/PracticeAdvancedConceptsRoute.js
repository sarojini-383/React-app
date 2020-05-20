import React from 'react';
import ViewEditToggle from '../../components/ViewEditToggle'
import CollapseExpand from '../../components/CollapseExpand'
import DeviceTypeText from '../../components/DeviceTypeText'
import MouseCoordinates from '../../components/MouseCoordinates'

import {
 HocsUsageTxt 
} from './styledComponent';

class PracticeAdvancedConceptsRoute extends React.Component{
 
 render(){
     return(
         <div>
         
         <HocsUsageTxt>HOC's Usage</HocsUsageTxt>
         <ViewEditToggle />
         
         <CollapseExpand/>
         <DeviceTypeText />
         <HocsUsageTxt>Render props</HocsUsageTxt>
         
         <MouseCoordinates/>
         </div>
         );
 }   
}

export default PracticeAdvancedConceptsRoute;