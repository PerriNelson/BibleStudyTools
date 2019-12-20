import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadBooks } from "../../redux/actions/bookActions";
import PropTypes from "prop-types";
import BookList from "./BookList";
import Spinner from "../common/Spinner";

const BooksPage = ({ books, loadBooks, loading }) => {
  useEffect(() => {
    if (books.length === 0)
      loadBooks().catch(error => {
        alert("Loading books failed." + error);
      });
  }, []);

  return (
    <>
      <h2>Books of the Bible</h2>
      {loading ? <Spinner /> : <BookList books={books} />}
    </>
  );
};

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  loadBooks: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps({ books, apiCallsInProgress }) {
  return {
    books: books,
    loading: apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  loadBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
