import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 dark:text-white bg-transparent ${
          error.length > 0
            ? "border-error placeholder:text-error"
            : "border-strock placeholder:text-text4 dark:border-darkStroke dark:placeholder:text-text2"
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length > 0 ? error : placeholder}
        {...field}
        {...rest}
      />
      {children && (
        <span className="absolute -translate-y-1/2 cursor-pointer select-none right-6 top-1/2">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node,
  control: PropTypes.any.isRequired,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
