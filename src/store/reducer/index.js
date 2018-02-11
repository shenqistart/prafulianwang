import {combineReducers} from 'redux'
import home from './home';
import user from './user';
import cart from './cart';
// {home:{currentLesson:'all'},session:{user,err,msg,success}}
export default combineReducers({
  home,user,cart
});