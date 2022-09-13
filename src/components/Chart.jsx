import React from "react";
// import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const state = {
    series: [48, 55, 77],
    options: {
      chart: {
        // height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return state.series.reduce((x,y)=>x+y);

              },
            },
          },
        },
      },
      labels: ["Handled", "Pending", "Alert"],
      colors: ["#FFB200", "#3EC70B", "#ff1a1a"],
    },
  };

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={350}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: state.options.colors[0],
              height: "20px",
              width: "20px",
              borderRadius: "50%",
            }}
          ></div>
          <span>
            {state.options.labels[0]}{" "}
            <div style={{ backgroundColor: state.options.colors[0],borderRadius:'12px 12px',textAlign:'center'  }}>
              {state.series[0]}%
            </div>
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: state.options.colors[1],
              height: "20px",
              width: "20px",
              borderRadius: "50%",
            }}
          ></div>
          <span>
            {state.options.labels[1]}
            <div style={{ backgroundColor: state.options.colors[1] ,borderRadius:'12px 12px',textAlign:'center' }}>
              {state.series[1]}%
            </div>
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: state.options.colors[2],
              height: "20px",
              width: "20px",
              borderRadius: "50%",
            }}
          ></div>
          <span>{state.options.labels[2]}
          <div style={{ backgroundColor: state.options.colors[2],borderRadius:'12px 12px',textAlign:'center',padding:'0px 8px' }}>
              {state.series[2]}%
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Chart;
