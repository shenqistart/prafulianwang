import React from 'react';
import Header from "../../components/Header/Header";
import './detail.less';
import {getOneProduct} from '../../API';
import 'babel-polyfill';
export default class Detail extends React.Component {
  constructor(){
    super();
    this.state={product:{}}
  }
  async componentWillMount(){
    let product={};
    if(!this.props.location.state){
      product=await getOneProduct(this.props.match.params.id)
    }
    // console.log(this.props.location.state,'111');
    this.setState({product});
  }

  render(){
    console.log(this.props,'12');
    console.log(this.state);
    let state=this.props.location.state||this.state.product;
    return (<div>
      <Header title="商品详情页" hasBack={true} hasReg={false}/>
        <div className="detail-container">
        <img src={state.productImg}/>
        <p>{state.productTitle}</p>
        <p>{state.info}</p>
        <p><span>特惠价格:</span> <span>￥{state.productInfo}</span></p>
        <p><span>送货至 : </span><span> 北京市回龙观</span></p>
        </div>
    </div>)
  }
}