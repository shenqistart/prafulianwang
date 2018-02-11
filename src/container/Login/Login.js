import React from "react";
import './login.less';
import Header from "../../components/Header/Header";
import {connect} from 'react-redux';
import actions from '../../store/actions/index';
@connect(state=>({...state.user}),actions)
export default class Profile extends React.Component {
  constructor(){
    super();
    this.state={
      info:'',
      status:0
    }
  }
  handle=()=>{
    if (!this.un.value) {
      this.setState({info: '用户名不能为空'});
      return;
    }
    if (!this.pw.value) {
      this.setState({info: '密码不能为空'});
      return;
    }
    let obj = {};
    obj.username = this.un.value;
    obj.password = this.pw.value;
    this.props.loginAPI(obj);
  };
  componentWillReceiveProps(newProps){
    console.log(newProps,'2');
    if(newProps.login.success){
      this.setState({info:newProps.login.success,status:1});
      this.props.setCartProductList(newProps.login.user.userId);
      setTimeout(()=>{
        newProps.history.push('/profile');
      },2000);
      return;
    }
    if(newProps.login.fail){
      this.setState({info:newProps.login.fail,status:0});
      return;
    }
  }
  render() {
    console.log(this.props,'1');
    return (
      <div>
        <Header title="登录" hasReg={true} hasBack={true}/>
        <ul className="login-container">
          <li>
            <label htmlFor="username">用户名</label>
            <input type="text" id="username" ref={x=>this.un=x}/>
          </li>
          <li>
            <label htmlFor="password">密码</label>
            <input type="text" id="password" ref={x=>this.pw=x}/>
          </li>
          <li>
            <span>忘记密码</span>
            <span>{this.state.info}</span>
          </li>
          <li>
            <button onClick={this.handle}>登录</button>
          </li>
        </ul>
      </div>
    )
  }
}