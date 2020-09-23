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
    this.props.onSearchSubmit(this.state.searchInput); // this.onSearchInput(this.state.searchInput);
    // Callback from parent component
  };

  render() {
    return (
      <div className="box">
        <h2>Search</h2>
        <form action="" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.onInputChange}
            name=""
            placeholder="Type..."
          />
          <input
            type="submit"
            // value={this.state.searchInput}
            onChange={this.onInputChange}
            value="Search"
          />
        </form>
      </div>
    );
  }
  // render() {
  //   return (
  //     <div className="search-bar ui segment">
  //       <form action="" onSubmit={this.onFormSubmit} className="ui form">
  //         <div className="field">
  //           <label>Video Search</label>
  //           <input
  //             placeholder="Search"
  //             type="text"
  //             value={this.state.searchInput}
  //             onChange={this.onInputChange}
  //           />
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
}

export default SearchBar;
