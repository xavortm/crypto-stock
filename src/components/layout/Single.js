import React from "react";
import styled from "styled-components";
import Graph from "../graph/Graph";

const Single = () => {
  return (
    <StyledSingle>
      <ColumnAside>CryptoStock</ColumnAside>
      <ColumnMain>
        <Graph id="bitcoin" />
      </ColumnMain>
      <ColumnAside></ColumnAside>
    </StyledSingle>
  );
};

const StyledSingle = styled.div`
  display: grid;
  grid-template-columns: 20em 1fr 20em;
`;

const ColumnMain = styled.div`
  padding: 2em;
`;

const ColumnAside = styled.aside`
  padding: 2em;
`;

export default Single;
