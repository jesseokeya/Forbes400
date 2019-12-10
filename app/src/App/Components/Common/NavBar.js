import React, { Component } from "react";
import "../../../Styles/style.css";

class NavBar extends Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title,
      search: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  depthFirstSearch = word => {
    const collection = [];
    const root = window.document.body;
    const arr = [root];
    while (arr.length) {
      const node = arr.shift();
      const innerText = node.innerText.trim().toLowerCase();
      const ctx = word.trim().toLowerCase();
      arr.push(...node.children);
      const empty = innerText.length <= 0 && ctx.length <= 0;
      if (!empty && innerText.includes(ctx)) collection.push(node);
    }
    return Array.from(new Set(collection));
  };

  handleSearch = _ => {
    const { search } = this.state;
    const hits = this.depthFirstSearch(this.state.search);
    hits.forEach(hit => this.highlightSearchTerm(hit, search));
  };

  handleKeyUp = e => {
    if (e.keyCode === 13) this.handleSearch();
  };

  highlightSearchTerm = (node, word) => {
    const innerHTML = node.innerHTML;
    const index = innerHTML.indexOf(word);
    const blacklist = ["body", "div", "nav"];
    if (index >= 0 && !blacklist.includes(node.localName)) {
      const split = innerHTML.split(word);
      const newInnerHTML = split.join(`<mark>${word}</mark>`);
      node.innerHTML = newInnerHTML;
    }
  };

  render() {
    const { search } = this.state;
    return (
      <nav className="navbar navbar-light bg-dark justify-content-between">
        <a className="navbar-brand text-light">
          <b> {this.state.title} </b>
        </a>
        <div className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            name="search"
            value={search}
            placeholder="Search"
            aria-label="Search"
            onKeyUp={this.handleKeyUp}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-light my-2 my-sm-0"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </div>
      </nav>
    );
  }
}

export { NavBar };
