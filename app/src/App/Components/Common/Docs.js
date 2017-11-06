import React, {Component} from 'react';
import {data} from './Data.js';
import '../../../Styles/style.css';

class Docs extends Component {
  render() {
    return (<div className="row">
      {
        data.map((value, index) => {
          return (<div key={index} class="col-lg-10 col-md-10 card border-dark mb-3 shadow" style={{
              width: '40rem',
              marginLeft: '8%',
              marginRight: '20px',
              marginTop: '20px'
            }}>
            <div class="card-body">
              <h6 className="card-title">
                <b>Path:</b>
                <a className="shift text-info font-weight-bold">
                  {value.path}
                </a>
              </h6>
              <br/>
              <h6 className="card-subtitle mb-2">
                <b>
                  Example:
                </b>
                <a href={value.url} className="shift text-info font-weight-bold">
                  {value.url}
                </a>
              </h6>
              <br/>
              <p className="card-text">
                <b>
                  Description:
                </b>
                <a className="shift text-info font-weight-bold">{value.description}</a>
              </p>
              <br/>
              <p className="card-text">
                <b>
                  Params:
                </b>
                <a className="shift text-info font-weight-bold"> {value.params} </a>
              </p>
              <a className="card-link text-info font-weight-bold">
                <span className="badge badge-pill badge-info">{index + 1}</span>
              </a>
            </div>
          </div>);
        })
      }
    </div>);
  }

}
export {
  Docs
}
