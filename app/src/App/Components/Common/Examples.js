import React, {Component} from 'react';
import {Display} from './Display';
import {Loader} from './Loader';
import 'whatwg-fetch';
import '../../../Styles/style.css';

class Examples extends Component {
  constructor() {
    super();
    this.state = {
      forbes400Youngest: [],
      url: 'https://forbes400.herokuapp.com/api/forbes400/industries/technology'
    }
  }

  componentWillMount() {
    let data = []
    fetch(this.state.url).then((response) => {
      return response.json()
    }).then((json) => {
      data.push(json);
    }).catch((error) => {
      if (error) {
        throw error;
      }
    });
    let refreshIntervalId = setInterval(() => {
      this.setState({forbes400Youngest: data});
      if(data.length > 0){
        clearInterval(refreshIntervalId);
      }

    }, 100);
  }
  render() {
    return (<div className="card shadow" style={{
        maxHeight: '70vh',
        overflow: 'scroll'
      }}>
      <div className="card-body">
        <h4 className="card-title text-center">
          <a className="badge badge-dark text-white">Richest People In Technology</a>
        </h4>
        <br />
        {
          (this.state.forbes400Youngest.length > 0)
            ? <Display data={this.state.forbes400Youngest}/>
            : <Loader />
        }
      </div>
    </div>);
  }

}

export {
  Examples
}
