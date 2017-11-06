import React, {Component} from 'react';
import '../../../Styles/style.css';

class NavBar extends Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title
    }
  }

  render() {
    return (<nav className="navbar navbar-light bg-info justify-content-between shadow ">
      <a className="navbar-brand text-light">
        <b> {this.state.title} </b>
      </a>
      <div className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
      </div>
    </nav>);
  }

}

export {
  NavBar
};
