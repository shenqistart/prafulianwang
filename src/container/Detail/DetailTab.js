import React from 'react';
import {Link} from 'react-router-dom';

export default class DetailTab extends React.Component {
  componentWillMount(){
    if(this.props.productList.length>0){
      this.myCount=this.props.productList.reduce((prev,next)=>{
        return prev+next.count
      },0)
    }
  }
  componentWillReceiveProps(newProps){
    if(newProps.productList.length>0){
      this.myCount = newProps.productList.reduce((prev,next)=>{
        return prev+next.count;
      },0);
      console.log(this.myCount,'2');
}
  }
  render() {
    console.log(this.props.productList,'1');
    console.log(this.myCount,'3');
    return (<div className="detail-tab">
      <li>
        {/*子组件调用父级方法*/}
        <p onClick={this.props.add}>
          加入购物车
        </p>
        <p>
          <Link to="/cart">
            <i className="iconfont icon-xiazai1"/>
            <span>购物车{this.myCount ? `(${this.myCount})` : `(0)`}</span>
          </Link>
        </p>

      </li>

    </div>)
  }
}