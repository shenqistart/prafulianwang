import React from "react";
import {NavLink as Link} from "react-router-dom";
import "./Tab.less";
export default class Tab extends React.Component{
  componentWillMount() {
    if (this.props.productList.length > 0) {
      this.mycount = this.props.productList.reduce((prev, next) => {
        return prev + next.count;
      }, 0);
      // console.log(this.mycount);
    }
  }
    render(){
        return (
          <div className="tab-container">
            <ul className="tab-nav-box">
              <li><Link to="/home"><em className="inconfont icon-home"></em><span>首页</span></Link></li>
              <li><Link to="/classes"><em className="iconfont icon-tubiao-"></em><span>分类</span></Link></li>
              <li><Link to="/cart"><em className="iconfont icon-xiazai1"></em><span>购物车{this.mycount ? `(${this.mycount})` : `(0)`}</span></Link>
              </li>
              <li><Link to="/profile"><em className="iconfont icon-gerenzhongxin"></em><span>个人中心</span></Link></li>
            </ul>
          </div>
        )
    }
}
