import React, {Component} from 'react';
import { NavBar, Body } from './Common';

class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title
    }
  }
  render() {
    return (<div>
      <NavBar title={this.state.title}/>
      <Body />
    </div>);
  }
}

export default Layout;
