import React from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

function withToggle(WrappedComponent){
    
    @observer
    class ToggleComponent extends React.Component{
    @observable toggleStatus;
    @observable data;
     constructor(props){
         super(props);
        this.toggleStatus=true;
        this.data="";
     }
    
    @action.bound
     handleChange(event){
             this.data=event.target.value
     }
     
     
    @action.bound
    onToggle(){
       this.toggleStatus=!this.toggleStatus; 
    }

     render(){
         return <WrappedComponent handleChange={this.handleChange} toggleStatus={this.toggleStatus} onToggle={this.onToggle}/>
     }
     
    }
   return ToggleComponent;
}

export default withToggle;

/*function withToggle(WrappedComponent){
    return class extends React.Component{
     
     constructor(props){
         super(props);
         console.log("props",this.props)
         this.state={
             data:"",
             isEditing:true,
             editingStatus:'Edit'
         }
     }
     componentDidMount(){
         
     } 
     
     @action.bound
     handleChange(event){
         
         this.setState({
             data:event.target.value
         })
     }
     
     @action.bound
     handleClick(){
         if(this.state.isEditing){
         this.setState({
             isEditing:false,
             editingStatus:'Cancel'
         })
         }
         else{
             this.setState({
             isEditing:true,
             editingStatus:'Edit'
         })
         }
     }
     render(){
         return <WrappedComponent editingStatus={this.state.editingStatus} handleClick={this.handleClick} isEditing={this.state.isEditing} handleChange={this.handleChange} data={this.state.data} {...this.props} />
     }
    }
}

export default withToggle;*/