import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, placeholder = "", children, ...rest } = props;
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <textarea
      className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl min-h-[141px] dark:text-white border-strock text-text1 placeholder:text-text4 outline-none"
      placeholder={placeholder}
      {...rest}
      {...field}
    ></textarea>
  );
};

export default Textarea;
