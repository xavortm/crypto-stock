import styled from "styled-components";
import useD3 from "../../hooks/useD3";
import PropTypes from "prop-types";
import * as d3 from "d3";

const Graph = ({ data }) => {
  const ref = useD3((svg) => {}, []);

  return (
    <StyledGraph>
      <SVGGraph ref={ref}>
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
      </SVGGraph>
    </StyledGraph>
  );
};

Graph.propTypes = {
  data: PropTypes.object.isRequired,
};

const StyledGraph = styled.div``;

const SVGGraph = styled.svg`
  height: 500px;
  width: 100%;
`;

export default Graph;
