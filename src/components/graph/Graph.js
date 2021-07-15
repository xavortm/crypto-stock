import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";

const Graph = ({ id }) => {
  const [tickers, setTickers] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(true);

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}/tickers`)
      .then((response) => {
        setTickers(response.data);
        setisLoading(false);
      });
  }, [id]);

  return (
    <StyledGraph>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Body>
          <Heading>
            <h2>Showing data for {tickers.name}</h2>
          </Heading>
        </Body>
      )}
    </StyledGraph>
  );
};

Graph.propTypes = {
  id: PropTypes.string.isRequired,
};

const StyledGraph = styled.div``;
const Loading = styled.div``;
const Body = styled.div``;
const Heading = styled.header`
  h2 {
    margin: 0;
  }
`;

export default Graph;
