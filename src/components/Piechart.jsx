import React from 'react'
import ReactApexChart from 'react-apexcharts'



const Piechart = () => {
   const state = {
          
        series: [44, 55, 41, 17],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
  return (
<>



<div id="chart" style={{width:"300px"}}>
  <ReactApexChart options={state.options} series={state.series} type="donut" />
</div>
    
</>  )
}

export default Piechart