import React, {Component} from 'react';
import { data } from './Data.js';
import '../../../Styles/style.css';

class Docs extends Component {
  render() {
    return (<div>
      <div className="list-group shadow">
        {
          data.map((value, index) => {
            return (<a key={index} className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1"><b>Url:</b> <a href={value.url}>{value.url}</a></h5>
                <b><small className="text-muted">{ index + 1 }</small></b>
              </div>
              <h6 className="mb-1"><b>Description:</b> {value.description}</h6>
              <small className="text-muted"><b>Resource:</b> {value.resource}</small>
            </a>)
          })
        }
      </div>
    </div>);
  }

}
export {
  Docs
}
