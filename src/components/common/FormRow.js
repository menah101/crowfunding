import React from "react";

function FormRow({ children }) {
  return <div className="grid grid-cols-2 gap-x-[45px]">{children}</div>;
}

export default FormRow;
