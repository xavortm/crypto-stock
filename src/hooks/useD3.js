import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import * as d3 from "d3";

const useD3 = (renderChart, dependencies) => {
  const ref = useRef();

  useEffect(() => {
    renderChart(d3.select(ref.current));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, renderChart]);

  return ref;
};

useD3.propTypes = {
  renderChart: PropTypes.func.isRequired,
  dependencies: PropTypes.array.isRequired,
};

export default useD3;
