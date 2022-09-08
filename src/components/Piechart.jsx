import React from "react";
import ReactApexChart from "react-apexcharts";

const Piechart = () => {
  const state = {
    series: [44, 55, 41, 17],
    options: {
      pie: {
        size: 50
      },
      labels: ['Customer Name Violation', 'TRansaction Name Violation', 'Case Violation', 'Rule Violation']
,
      colors: ["#A149FA", "#3EC70B", "#FFB200", "#0099ff"],

      chart: {
        width:"100",
        type: "donut",
      },
      fill: {
        colors: ["#A149FA", "#3EC70B", "#FFB200", "#0099ff"],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            // chart: {
            //   width: 200,
            // },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <>
      <div id="chart" style={{ width: "430px",}}>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
    </>
  );
};

export default Piechart;
