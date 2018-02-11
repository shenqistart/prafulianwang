import {getCartProductList, updateCartProduct} from "../../API/index";
import * as Types from "../actionTypes";

let actions = {
  setCartProductList(id) {//登录的时候拿
    return function (dispatch, getState) {
      dispatch({
        type: Types.CART_PRODUCTLIST,
        payload: getCartProductList(id)
      })
    }
  },
  cartCountAdd(index) {
    return {
      type: Types.CART_ADD,
      index
    }
  },
  cartCountMinus(index) {
    return {
      type: Types.CART_MINUS,
      index
    }
  },
  cartUpdate(data) {//购物车出来的时候改
    return function (dispatch, getSatte) {
      dispatch({
        type: Types.UPDATE_CART,
        payload: updateCartProduct(data)
      })
    }
  },
  addProduct(item) {
    return (dispatch, getState) => {
      dispatch({
        type: Types.CART_ADD_PRODUCT,
        item
      });
    }
  },
  deleteProduct(id) {
    return (dispatch, getState) => {
      dispatch({
        type: Types.CART_DELETE_PRODUCT,
        id
      })
    }
  },
};
export default actions;