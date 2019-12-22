import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookList = ({ books }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Book</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => {
        return (
          <tr key={book.id}>
            <td>
              <Link to={`/book/${book.id}`}>{book.name}</Link>
            </td>
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
