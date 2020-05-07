import AuthService from '../services/AuthService';
import AuthStore from './AuthStore';

const authStore =new AuthStore(new AuthService());

export default {authStore}
