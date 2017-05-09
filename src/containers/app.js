import React, { Component } from 'react'
import Header from './header/index';
import Footer from './Footer/index';
import LeftMenu from "./menu/index";
import '../styles/theme.scss'
import '../styles/index.scss'
export default class App extends Component {

  constructor(props, context) {
    super(props)
    this.state = {
      pathname: "",
      modle: "group"
    }
  }

  getHeader () {
    let header = "";
    let flag = location.hash.indexOf("#/mobile");
    let pathname = "";
    if(flag === 0) {
      pathname = "mobile";
    }
    else {
      header = <Header setModle={this.setModle.bind(this)} />
    }
    return header;
  }

  setModle (value) {
    this.setState({
      modle: value
    })
  }

	render() {
		return (
			<div className="main">
				<div className="main-header">{this.getHeader()}</div>
				<div className="main-content">
          <div className="main-left-content">
            <LeftMenu modle={this.state.modle} />
          </div>
          <div className="main-right-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
        // <div className="footer"><Footer /></div>