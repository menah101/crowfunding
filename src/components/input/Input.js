import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";

const Input = (props) => {
  const { control, name, type = "text", error = "", placeholder = "", children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={classNames(
          "w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent",
          error.length > 0
            ? "border-error text-error"
            : "border-strock text-text1 dark:border-darkStroke",
          children ? "pr-16" : ""
        )}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...field}
        {...rest}
      />
      {error.length > 0 && (
        <span className="text-sm font-medium text-error absolute top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && <div className="absolute right-6 top-2/4 -translate-y-2/4">{children}</div>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
