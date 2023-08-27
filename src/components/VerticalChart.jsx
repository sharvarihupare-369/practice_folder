import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { generateRandomColors } from '../randomColor';




const VerticalChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive : true,
    legend : {
      position : 'top'
    },
    title : {
      display : true,
      text : "Vertical Bar Chart"
    }
  }

  const labels = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  const data = {
     labels,
     datasets : [
        {
          label : "Dataset-1",
          data : labels.map(()=> faker.datatype.number({min : 0, max:1000})),
          backgroundColor: generateRandomColors(255),
        },
        {
          label : "Dataset-2",
          data : labels.map(()=> faker.datatype.number({min : 0, max:1000})),
          backgroundColor: generateRandomColors(255),
        }
     ]
  }

  return (
    <div style={{width:"60%",margin:"auto"}}>
   <Bar options={options} data={data} />
    </div>
  )
}

export default VerticalChart