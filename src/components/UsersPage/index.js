import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import LoadingWrapperWithFailure  from '../common/LoadingWrapperWithFailure/index.js'
import NoDataView  from '../common/NoDataView/index.js'

//import stores from '../../stores/index'
//import userStore from '../../stores/UserStore/index.js'

//const userStore=stores.userStore

@inject('userStore')
@observer
class UsersPage extends Component{
  
  componentDidMount(){
    //console.log(this.props.userStore)
      this.doNetworkCalls()
  }  
  
  getStore=()=>{
    return this.props.userStore;
  }
  doNetworkCalls=()=>{
      this.getStore().getUsers()
  }
  renderUsersList=()=>{
      const {users}=this.getStore();
      if(users.length===0){
          return <NoDataView />
      }
      return users.map(userName=><div>{userName}</div>)
  }
    render(){
        const {getUsersApiStatus,getUsersApiError}=this.getStore();
        return <LoadingWrapperWithFailure
        apiStatus={getUsersApiStatus}
        apiError={getUsersApiError}
        onRetryClick={this.doNetworkCalls}
        renderSuccessUI={this.renderUsersList}
        />

    }
}

export default UsersPage