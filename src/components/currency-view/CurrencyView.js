import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Graph from "../graph/Graph";

const CurrencyView = ({ id }) => {
  const [tickers, setTickers] = useState();
  const [isLoading, setisLoading] = useState(true);
  console.log(tickers);
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
    <Body>
      {isLoading ? (
        "Loading ..."
      ) : (
        <>
          <Heading>
            <h2>Showing data for {tickers.name}</h2>
          </Heading>
          <Graph data={tickers} />
        </>
      )}
    </Body>
  );
};

const Body = styled.div``;
const Heading = styled.header`
  border-bottom: 1px solid #ddd;
  padding-bottom: 1em;
  margin-bottom: 1em;

  h2 {
    margin: 0;
  }
`;

export default CurrencyView;
