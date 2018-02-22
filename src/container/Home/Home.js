import React from "react";
import {NavLink as Link} from "react-router-dom";
import "./Home.less";
import HomeSlider from "./HomeSwiper";
import {connect} from 'react-redux';
import actions from '../../store/actions/home'
import HomeProducts from "./HomeProducts";
import Tab from "../../components/Tab/Tab";
@connect(state=>({...state.home,...state.cart}),actions)
export default class Home extends React.Component{
  componentDidMount(){
    if(this.props.sliders.length === 0){// 如果没有数据我才请求 redux里有数据了我就不请求了
      this.props.getSliderAPI();
    }
    if(this.props.homeHot.length === 0){// 如果没有数据我才请求 redux里有数据了我就不请求了
      this.props.getHomeHotAPI();
    }
  }
    render(){
      // console.log(this.props.homeHot,'1');
      let {homeHot} =this.props;
      return (
            <div className="home-container" ref = {x=>this.ele=x}>
              {this.props.sliders.length?<HomeSlider lists={this.props.sliders}/>:''}
             <nav className="home-nav-box">
                 <Link to="/lists/hot"><i className="iconfont icon-remen" style={{backgroundColor:"#63cdff"}}></i><span>热门商品</span></Link>
                 <Link to="/lists/cheap"><i className="iconfont icon-tejia" style={{backgroundColor:"#2dffdf"}}></i><span>特价专区</span></Link>
                 <Link to="/lists/0"><i className="iconfont icon-msnui-tel" style={{backgroundColor:"#ff4c4c"}}></i><span>手机专场</span></Link>
                 <Link to="/"><i className="iconfont icon-dingdan" style={{backgroundColor:"#ffa223"}}></i><span>我的订单</span></Link>
                 <Link to="/"><i className="iconfont icon-fuwuzhongxin" style={{backgroundColor:"#ff209f"}}></i><span>服务中心</span></Link>
                 <Link to="/"><i className="iconfont icon-pingce" style={{backgroundColor:"#536dff"}}></i><span>F评测</span></Link>
                 <Link to="/"><i className="iconfont icon-chongzhi" style={{backgroundColor:"red"}}></i><span>手机充值</span></Link>
                 <Link to="/"><i className="iconfont icon-tuangou" style={{backgroundColor:"#ff5a17"}}></i><span>企业团购</span></Link>
             </nav>
              {/*{console.log(Object.keys(homeHot),homeHot,'222')}*/}
              {/*["phone", "earPhone", "computer", "household"] "222"*/}

              {Object.keys(homeHot).map((item,index)=><HomeProducts title={item} key={index} products={homeHot[item]}/>)}
              <div className="home-hot-refresh">
                <p>商品已经刷新</p>
              </div>
              <Tab productList={this.props.productList}/>
            </div>
        )
    }
}