import * as Types from "../actionTypes";
let initState={
  login:{
    success:'',fail:'',user:{}
  },
  reg:{
    success:'',
    fail:''
  }
};
function user(state=initState,actions) {//actions不用引入进来，dispatch中加的
  // console.log({...state,reg:{...actions.payload}},'1');
  switch (actions.type){
    case Types.SET_REG:
      return {...state,reg:{...actions.payload}};
    case Types.SET_LOGIN:
      return {...state,login:{...actions.payload}};
  }

  return state;
}
export default user;