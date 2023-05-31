import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const Button = ({ type = "button", children, className = "", isLoading = false, ...rest }) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={classNames(
        "flex items-center text-white min-h-[56px] justify-center py-4 text-base font-semibold rounded-xl p-4",
        isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
