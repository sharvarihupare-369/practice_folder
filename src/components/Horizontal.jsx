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
// import faker from 'faker';
import { faker } from '@faker-js/faker';
import { generateRandomColors } from '../randomColor';

const Horizontal = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
    const options = {
        indexAxis : 'y',
        elements : {
           bar : {
              borderWidth : 2,
           },
        },
        responsive : true,
        plugins : {
            legend : {
                position : 'right'
            },
            title : {
                display : true,
                text : "Horizontal Bar Chart"
            }
        }
    }

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets : [
            {
                label : 'Dataset-1',
                data : labels.map(()=> faker.datatype.number({min:-1000, max:1000})),
                borderColor : generateRandomColors(255),
                backgroundColor : generateRandomColors(255)
            },
            {
                label : 'Dataset-2',
                data : labels.map(()=> faker.datatype.number({min:-1000, max:1000})),
                borderColor : generateRandomColors(255),
                backgroundColor : generateRandomColors(255)
            },
            {
                label : 'Dataset-3',
                data : labels.map(()=> faker.datatype.number({min:-1000, max:1000})),
                borderColor : generateRandomColors(255),
                backgroundColor : generateRandomColors(255)
            }
        ]
    }

  return (
    <div style={{width:"60%",margin:"auto"}}>
        <Bar options={options} data={data} />
    </div>
  )
}

export default Horizontal