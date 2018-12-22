import React from "react";

const SearchLine = () => {
  return (
    <div className="container">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search.." />
        <button type="button" className="btn btn-default btn-lg">
          <span
            className="glyphicon glyphicon-text-background"
            aria-hidden="true"
          />{" "}
          Star
        </button>
      </div>
    </div>
  );
};

export default SearchLine;
