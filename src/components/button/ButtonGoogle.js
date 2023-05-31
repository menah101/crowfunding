import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button onClick={onClick} className="flex text-base font-semibold items-center justify-center w-full gap-x-3 py-3 border border-strock dark:border-darkStroke rounded-xl text-text2 dark:text-white mb-4">
      <img srcSet="/icon-google.png 2x" alt="google" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: <ErrorComponent />
});
