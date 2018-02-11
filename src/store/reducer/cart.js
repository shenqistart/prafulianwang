import * as Types from "../actionTypes";

let initState={
  productList:[

  ],
};
function cart(state=initState,action) {
  switch (action.type){
    case Types.CART_PRODUCTLIST:
      return {productList:[...action.payload]};
    case Types.CART_ADD:
      state.productList[action.index].count++;//因为数据结构中的数组中的第几个对象
      return {productList:[...state.productList]};
    case Types.CART_MINUS:
      state.productList[action.index].count--;
      return {productList:[...state.productList]};
    case Types.UPDATE_CART:
      return {...state};
    case Types.CART_ADD_PRODUCT://列表页的加
      let product = state.productList.find(item=>{
        console.log(item);
        return item.product.productId==action.item.productId;
      });
      if(!product){
        let obj={product:action.item,count:1};
        return {productList:[...state.productList,obj]}
      }
      product.count++;
      return {productList:[...state.productList]};
    case Types.CART_DELETE_PRODUCT:
      let productList = state.productList.filter(item=>item.product.productId!=action.id);
      return {productList:[...productList]};
  }
  return state;
}
export default cart