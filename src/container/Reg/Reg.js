import React from "react";
import './reg.less';
import Header from "../../components/Header/Header";
// import {reg} from '../../API';
import actions from '../../store/actions/user';
import {connect} from 'react-redux';
import 'babel-polyfill';
@connect((state) => ({...state.user}), actions)
export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      info: '',
      status: 0
    }
  }
  handle = () => {
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
    //let info=await reg(obj)//为什么不能这么用
    this.props.regAPI(obj);
  };
  componentWillReceiveProps(newProps){
    console.log(newProps,'2');
    if(newProps.reg.success){
      let info=newProps.reg.success;
      this.setState({info,status:1});
      setTimeout(()=>{
        newProps.history.push("/login");
      },2000)
    }
    else{
      let info=newProps.reg.fail;
      this.setState({info,status:0})
    }
  }
  render() {
    console.log(this.props,'1');//在新的网页打开看有什么方法，state可以用
    return (
      <div>
        <Header title="注册" hasReg={false} hasBack={true}/>
        <ul className="reg-container">
          <li>
            <label htmlFor="username">用户名</label>
            <input type="text" id="username" ref={x => this.un = x}/>
          </li>
          <li>
            <label htmlFor="password">密码</label>
            <input type="text" id="password" ref={x => this.pw = x}/>
          </li>
          <li>
            <span className={this.state.status?'ok':'wrong'}>{this.state.info}</span>
          </li>
          <li>
            <button onClick={this.handle}>注册</button>
          </li>
        </ul>
      </div>
    )
  }
}