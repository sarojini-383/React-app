import React from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

function withScreenSizeDetectors(WrappedComponent){
  
    
    @observer
    class DeviceTypeComponent extends React.Component{
       @observable deviceType;
       
       constructor(props){
        super(props);
        this.DeviceType="";
        }
        
       render(){
        if(window.innerWidth<576){
         this.deviceType="Mobile";
        }
        else if(window.innerWidth>=576 && window.innerWidth<992){
         this.deviceType="Tablet"
        }
        else{
         this.deviceType="Desktop"
        }
        return <WrappedComponent deviceType={this.deviceType}/>
       }
    }
    return DeviceTypeComponent;
}

export default withScreenSizeDetectors;

