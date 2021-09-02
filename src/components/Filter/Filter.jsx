import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Filter = ({ value, handler }) => {
  const id = uuidv4();
  return (
    <>
      <label htmlFor={id}></label>
      <input id={id} type="text" value={value} onChange={handler} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

export default Filter;
