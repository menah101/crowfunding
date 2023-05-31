import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary"
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuth = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="w-full min-h-screen bg-lite dark:bg-darkbg p-10 relative isolate">
      <img src="/ellipse.png" alt="ellipse" className="hidden lg:block w-full absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]" />
      <Link to="/">
        <img srcSet="/logo.png 2x" alt="logo main" className="inline-block mb-5 lg:mb-16" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="text-lg font-semibold lg:text-xl mb-1 lg:mb-3 text-text1 dark:text-white text-center">{heading}</h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuth.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node
}

export default withErrorBoundary(LayoutAuth, {
  FallbackComponent: ErrorComponent
});
