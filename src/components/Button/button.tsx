import React from "react";
import styled from "styled-components";

interface IProps {
  onClick: React.ReactEventHandler;
  children: any;
  primary?: boolean;
}

interface IStyle {
  primary?: boolean;
}

const ButtonBase = styled.button<IStyle>`
  display: flex;
  background: transparent;
  color: "black";
  margin: 0 auto;
`;

function Button({ onClick, ...props }: IProps) {
  const { children } = props;

  return <ButtonBase onClick={onClick}>{children}</ButtonBase>;
}
export default Button;
