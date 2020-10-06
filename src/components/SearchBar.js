import React from "react";
import "./SearchBarStyle.css";

class SearchBar extends React.Component {
  state = { searchInput: "" };

  onInputChange = (event) => {
    // event = onChange input
    this.setState({ searchInput: event.target.value }); // update the search value
  };
  onFormSubmit = (event) => {
    event.preventDefault();

    // Make sure we call
    this.props.onSearchSubmit(this.state.searchInput);
  };

  render() {
    return (
      <div className="box">
        <h2>YouTube Search</h2>
        <form action="" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.onInputChange}
            name=""
            placeholder="Type..."
          />
          <input type="submit" onChange={this.onInputChange} value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
