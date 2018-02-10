import * as Types from '../actionTypes';
import {getSliders,getHomeHot} from "../../API/index";
let action={
     getSliderAPI(){
       return function (dispatch,getState) {
         dispatch({type:Types.SET_SLIDERS,payload:getSliders()});
         // debugger;
       }
     },
     getHomeHotAPI(){
       return function (dispatch,getState) {
         dispatch({type:Types.SET_HomeHot,payload:getHomeHot()});
       }
     }
};
export default action;