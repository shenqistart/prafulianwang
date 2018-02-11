import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import Cart from "./container/Cart/Cart";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Home from "./container/Home/Home";
import Classes from "./container/Classes/Classes";
import Login from "./container/Login/Login";
import Reg from "./container/Reg/Reg";
import "./common/common.less";
import {Provider} from 'react-redux';
import store from './store/index';
import Detail from "./container/Detail/Detail";
import Profile from "./container/Profile/Profile";
import List from "./container/List/List";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/classes" component={Classes}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/lists/:type" component={List}/>
          <Redirect to="/home"/>
        </Switch>
      </App>
    </Router>
  </Provider>

  ,document.getElementById("root"));