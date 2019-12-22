import React from "react";
import PropTypes from "prop-types";

const ChapterList = ({ chapters }) =>
  chapters.map(chapter => (
    <span key={chapter.id}>
      {chapter.chapter}
      {" | "}{" "}
    </span>
  ));

ChapterList.propTypes = {
  chapters: PropTypes.array.isRequired
};

export default ChapterList;
