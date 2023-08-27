import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { generateRandomColors } from '../randomColor';

const AreaChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );
      const options = {
          responsive : true,
          plugins : {
            legend : {
                position : 'top'
            },
            title : {
                display : true,
                text : "Area Chart Weekdays"
            }
          }
      }

      const labels =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

      const data = {
         labels ,
         datasets : [
            {
                fill:true,
                label : 'Dataset-1',
                data : labels.map(()=> faker.datatype.number({min:0, max : 100})),
                borderColor: generateRandomColors(),
                backgroundColor: generateRandomColors()
            }
         ]
      }

  return (
    <div style={{width:"60%",margin:"auto"}}>
        <Line data={data} options={options} />
    </div>
  )
}

export default AreaChart