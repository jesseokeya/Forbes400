import React, {Component} from 'react';
import { Docs } from './Docs';
import '../../../Styles/style.css';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      valid: true
    }
  }

  render() {
    return (<div>
      <ul className="nav nav-tabs nav-fill shadow border-bottom" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link text-info" id="docs-tab" data-toggle="tab" href="#docs" role="tab" aria-controls="docs" aria-selected="true">
            <b>
              Api Documetation / Endpoints
            </b>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" id="demo-tab" data-toggle="tab" href="#demo" role="tab" aria-controls="demo" aria-selected="false">
            <b>
              Demo / Examples
            </b>
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="docs" role="tabpanel" aria-labelledby="docs-tab">
          <br/>
          <div className="container-fluid">
            <Docs />
            <br />

          </div>
        </div>
        <div className="tab-pane fade" id="demo" role="tabpanel" aria-labelledby="demo-tab">
          <br/>
          <div className="container-fluid">
            EXAMPLES / DEMO
          </div>
        </div>
      </div>
    </div>)
  }

}

export {
  Body
}
