import React from "react";

export default class App extends React.Component{
    render(){
      console.log(this.props);
      return (
            <div>
              {this.props.children}
            </div>
        )
    }
}