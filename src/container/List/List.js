import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../../components/Header/Header";
import './list.less';
import {getProducts} from '../../API';
import 'babel-polyfill';
export default class List extends React.Component {
  constructor(){
    super();
    this.state={
      products:[],
      status:1
    }
  }
  async componentWillMount(){
    let type = this.props.match.params.type;
    let title='商品列表';
    switch (type){
      case 'hot':
        title='热门商品';
        break;
      case 'cheap':
        title='特价专区';
        break;
      case 'phone':
        title='手机专区';
        break;
      case 'computer':
        title='电脑专区';
        break;
      case 'earphone':
      title='办公专区';
      break;
      case 'household':
        title='家用专区';
        break;
    }
    this.title=title;
    let products=await getProducts(type);
    this.setState({products});
  }
  handleClick=(e)=>{
    // console.log(e);
    // console.log(e.target);
    let target=e.target.parentNode;
    if(target.tagName==='LI'){
      let ary=[...this.state.products];
      let order=target.childNodes[0].innerHTML;
      console.log(order);
      switch(order){
        case '销量':
          ary.sort((a,b)=>(a.productHot-b.productHot)*this.state.status)
          this.setState({
            products:ary,
            status:this.state.status*-1
          });
          break;
        case "价格":
          ary.sort((a,b)=>(a.productPrice-b.productPrice)*this.state.status);
          this.setState({
            products:ary,
            status:this.state.status*-1
          });
          break;
        case "评论":
          ary.sort((a,b)=>(a.productQuality-b.productQuality)*this.state.status);
          this.setState({
            products:ary,
            status:this.state.status*-1
          });
          break;
      }
    }
  }

  render(){
    console.log(this.props,'1');
    console.log(this.state,'2');
    return (
      <div>
      <Header hasBack={true} hasSearch={false} title={this.title}/>
      <div className="list-header">
        <ul onClick={this.handleClick}>
          <li><span>销量</span><em></em></li>
          <li><span>价格</span><em></em></li>
          <li><span>评论</span><em></em></li>
        </ul>
      </div>
      <div className="lists-container">
        <ul className="lists-box">
          {this.state.products.map((item,index)=>(
            <Link to={{pathname:`/detail`, state:{item}}} key={index}>
              <li className="lists-item" >
                <img src={item.productImg}/>
                <p>{item.productTitle}</p>
                <p>
                  <span>￥{item.productPrice}</span>
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>)
  }
}