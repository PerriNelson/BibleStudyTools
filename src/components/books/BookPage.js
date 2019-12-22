import { connect } from "react-redux";
import { loadBooks } from "../../redux/actions/bookActions";
import { loadChapters } from "../../redux/actions/chapterActions";
import React, { useEffect, useState } from "react";
import ChapterList from "./ChapterList";
import Spinner from "../common/Spinner";
import PropTypes from "prop-types";

const BookPage = ({
  books,
  chapters,
  loading,
  loadBooks,
  loadChapters,
  match
}) => {
  const [book, setBook] = useState({ id: 0, name: "" });

  useEffect(() => {
    if (!chapters.length)
      loadChapters(match.params.bookId).catch(error => {
        alert("Loading chapters failed." + error);
      });
    if (books.length === 0) {
      loadBooks().catch(error => {
        alert("Loading books failed." + error);
      });
    } else {
      const _book = books.find(book => book.id == match.params.bookId);
      setBook(_book);
    }
  }, [books.length]);

  return (
    <>
      <h2>{book.name}</h2>
      {loading ? <Spinner /> : <ChapterList chapters={chapters} />}{" "}
    </>
  );
};

BookPage.propTypes = {
  books: PropTypes.array,
  chapters: PropTypes.array,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  loadBooks: PropTypes.func.isRequired,
  loadChapters: PropTypes.func.isRequired
};

function mapStateToProps({ books, chapters, apiCallsInProgress }, { match }) {
  return {
    books,
    chapters: chapters[match.params.bookId] || [],
    loading: apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  loadChapters,
  loadBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
