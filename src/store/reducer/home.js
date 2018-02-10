import * as Types from '../actionTypes';
let initState={
  sliders:[],
  homeHot:[]
};
function home(state=initState,actions) {
  switch(actions.type){
    case Types.SET_SLIDERS:
      console.log({...state,sliders:actions.payload},'222');
      return {...state,sliders:actions.payload};
    case Types.SET_HomeHot:
      return {...state,homeHot:actions.payload}
  }
  return state;
}
export default home;