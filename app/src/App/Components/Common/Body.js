import React, { Component } from "react";
import { Docs } from "./Docs";
import { Examples } from "./Examples";
import "../../../Styles/style.css";

class Body extends Component {
  componentDidMount() {
    document.getElementById("docs-tab").click();
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link text-info"
              id="docs-tab"
              data-toggle="tab"
              href="#docs"
              role="tab"
              aria-controls="docs"
              aria-selected="true"
            >
              <b>Api Documetation / Endpoints</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-info"
              id="demo-tab"
              data-toggle="tab"
              href="#demo"
              role="tab"
              aria-controls="demo"
              aria-selected="false"
            >
              <b>Demo / Examples</b>
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="docs"
            role="tabpanel"
            aria-labelledby="docs-tab"
          >
            <br />
            <div className="container-fluid">
              <Docs />
              <br />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="demo"
            role="tabpanel"
            aria-labelledby="demo-tab"
          >
            <br />
            <div className="container-fluid">
              <Examples
                url="https://forbes400.onrender.com/api/forbes400/real-time?limit=10"
                title={"Forbes400 Real Time"}
              />
              <br />
              <Examples
                url="https://forbes400.onrender.com/api/forbes400/industries/fashion?limit=10"
                title={"Forbes400 Fashion Industry"}
              />
              <br />
              <Examples
                url="https://forbes400.onrender.com/api/forbes400/youngest?limit=10"
                title={"Forbes400 Youngest"}
              />
              <br />
              <Examples
                url="https://forbes400.onrender.com/api/forbes400/women?limit=10"
                title={"Forbes400 Women"}
              />
              <br />
              <Examples
                url="https://forbes400.onrender.com/api/forbes400/oldest?limit=10"
                title={"Forbes400 Oldest"}
              />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Body };
