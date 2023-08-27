import React from 'react'
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend 
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { generateRandomColors } from '../randomColor';

const PieChart = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const options = {
        responsive : true,
        legend : {
          position : 'top'
        },
        title : {
          display : true,
          text : "Pie Chart"
        }
      }
    const  labels =  ['Maths', 'Science', 'English', 'History', 'Civics', 'Marathi']
    const data = {

        labels,
        datasets :  [ 
            {
                label : '#marks',
                data : [70,90,80,100,89,60] ,
                backgroundColor: [
                    generateRandomColors(255),
                    generateRandomColors(255),
                    generateRandomColors(255),
                    generateRandomColors(255),
                    generateRandomColors(255),
                    generateRandomColors(255),
                  ],
                  borderColor: [
                    generateRandomColors(255),
                    generateRandomColors(255),
                    generateRandomColors(255),
                    generateRandomColors(255),
                    generateRandomColors(255),
                    generateRandomColors(255),
                  ],
                  borderWidth: 1,
            }
        ]
    }
  return (
    <div style={{width:"40%",margin:"auto"}}>
        <Pie data={data} options={options} />
    </div>
  )
}

export default PieChart