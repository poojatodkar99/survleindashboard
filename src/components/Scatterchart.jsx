import React from 'react'
import ReactApexChart from 'react-apexcharts';

const Scatterchart = () => {



   const options = {

        series: [{
          name: "SAMPLE A",
          data: [
          [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0]]
        },{
          name: "SAMPLE B",
          data: [
          [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9]]
        },{
          name: "SAMPLE C",
          data: [
          [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4]]
        }],
        options: {
          chart: {
            height: 350,
            type: 'scatter',
            zoom: {
              enabled: true,
              type: 'xy'
            }
          },
          xaxis: {
            tickAmount: 10,
            labels: {
              formatter: function(val) {
                return parseFloat(val).toFixed(1)
              }
            }
          },
          yaxis: {
            tickAmount: 7
          }
        },


      };



  return (
    <>
    <ReactApexChart options={options.options} series={options.series} type='scatter' height={250} />
    
    </>
    
  )
}

export default Scatterchart