import React from 'react';
import Header from "../../components/Header/Header";
import Tab from "../../components/Tab/Tab";
import {Link} from 'react-router-dom';
export default class Profile extends React.Component {
  render(){
    return (<div>
      <Header title="个人中心" hasReg={false} hasBack={false}/>
      <div className="detail-container">
        <Link to="/login">
          <img src="" alt=""/>
          <div>

          </div>
          <i className=""/>
        </Link>
        <ul>
          <li>
            <i/>
            <p>
              我的订单
            </p>
            <i/>
          </li>
        </ul>
        <ul>
          <li>
            <i/>
            <p>
              我的订单
            </p>
            <i/>
          </li>
        </ul>
        <button>
          退出登录
        </button>
      </div>
      <Tab/>
    </div>)
  }
}