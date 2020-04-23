import UserService from '../services/UserService/index.api'
import TodoService from '../services/TodoService/index.api'

import CounterStore from './CounterStore'
import UserStore from './UserStore'
import TodoStoreForNetworkCalls from './TodoStoreForNetworkCalls'


const counterStore = new CounterStore()
const userStore = new UserStore( new UserService())
const todoStoreForNetworkCalls=new TodoStoreForNetworkCalls(new TodoService())

export default{
    counterStore,
    userStore,
    todoStoreForNetworkCalls,
}