import React from "react";
import PropTypes from "prop-types";

const BookList = ({ books }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Abbreviation</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => {
        return (
          <tr key={book.id}>
            <td>{book.abbr}</td>
            <td>{book.name}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
