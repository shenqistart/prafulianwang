import * as Types from '../actionTypes';
import {reg,login} from "../../API/index";
let actions={
  regAPI(data){
    return function (dispatch,getState) {
      dispatch({type:Types.SET_REG,payload:reg(data)})
    }
  },
  loginAPI(data){
    return function (dispatch,getState) {
      dispatch({type:Types.SET_LOGIN,payload:login(data)});
    }
  },
  clearLogin(){
    return {
      type:Types.CLEAR_LOGIN
    }
  }
};
export default actions;