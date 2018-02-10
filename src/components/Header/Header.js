import React from "react";
import './Header.less';
import PropTypes from "prop-types";
import {withRouter,Link} from 'react-router-dom';
@withRouter
export default class Header extends React.Component{
  static propsTypes={
    title:PropTypes.string.isRequired,
    hasBack:PropTypes.bool.isRequired,
    hasSearch:PropTypes.bool.isRequired
  };
  handle=()=>{
    this.props.history.goBack();
  };
    render(){
      let {title,hasBack,hasReg}=this.props;
        return (
            <div className="header-container">
              {hasBack?<i className="iconfont  icon-fanhui" onClick={this.handle}/>:null}
              {title?<span>{title}</span>:null}
              {hasReg?<Link to="/reg">注册</Link>:null}
            </div>
        )
    }
}