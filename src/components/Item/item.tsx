import React from "react";
import styled from "styled-components";

interface IProps {
  children: any;
}

const Container = styled.div`
  display: flex;
  padding: 1rem;
`;

function Item({ children }: IProps) {
  return (
    <>
      <Container>
        <div>{children}</div>
      </Container>
    </>
  );
}

export default Item;
