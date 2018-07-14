import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="Restaurant">Restaurant Type:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="term"
        list="location"
        type="text"
        className="form-control"
        placeholder="Type in a restaurant type to begin"
        id="term"
      />
      <datalist id="location">
        {props.location.map(term => <option value={term} key={term} />)}
      </datalist>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
