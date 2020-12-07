import React from "react";

interface Props {
  onClick?: any;
  children: any;
}

function Button({ onClick, ...props }: Props) {
  const { children } = props;

  return <button onClick={onClick}>{children}</button>;
}
export default Button;
