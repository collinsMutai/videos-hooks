import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    // passing current state to parent component
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
