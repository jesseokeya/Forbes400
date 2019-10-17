import React, {Component} from 'react';
import {Display} from './Display';
import {Loader} from './Loader';
import 'whatwg-fetch';
import '../../../Styles/style.css';

class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forbes400Youngest: [],
      url: props.url,
      title: props.title
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
    return (
      <div
        className="card border-light"
        style={{
          maxHeight: "100%",
          overflow: "scroll"
        }}
      >
        <div className="card-body">
          <h4 className="card-title text-center">
            <a
              style={{
                padding: "17px"
              }}
              className="badge badge-dark text-white"
            >
              {this.state.title}
            </a>
          </h4>
          <br />
          {this.state.forbes400Youngest.length > 0 ? (
            <Display data={this.state.forbes400Youngest} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }

}

export {
  Examples
}
