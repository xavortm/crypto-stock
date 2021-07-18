import React from "react";
import styled from "styled-components";
import CurrencyView from "../currency-view/CurrencyView";

const Single = () => {
  return (
    <StyledSingle>
      <ColumnAside>CryptoStock</ColumnAside>
      <ColumnMain>
        <CurrencyView id="bitcoin" />
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
