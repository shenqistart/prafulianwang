import React from "react";
import {Redirect} from "react-router-dom"
import {connect} from "react-redux";
@connect(state=>({...state.user}))
export default class ProtectedRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }

  componentWillMount() {
    if (!this.props.login.success) {
      this.setState({
        isShow: false
      })
    }
  }
  render() {
    let {component: Component} = this.props;
    if (this.state.isShow) {
      return <Component/>
    }else{
      return <Redirect to="/login"/>
    }

  }
}