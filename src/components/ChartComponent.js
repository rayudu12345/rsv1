import Chart from "react-apexcharts";
import React from "react";
class ChartComponent extends React.Component {
  render() {
    return (
      <Chart
        options={this.props.options}
        series={this.props.series}
        type={this.props.type}
      />
    );
  }
}

export default ChartComponent;
