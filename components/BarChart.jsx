import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
          {
              label: 'Sales $',
              data: [18127, 22201, 19490, 17938, 24182, 17842, 22475, 20000, 21000, 19000, 22000, 30000],
              borderColor: 'rgb(173, 250, 29)',
              backgroundColor: 'rgb(173, 250, 29, 1)',
              borderRadius: 5            
          }, 
      ]
      
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly revenue 2023'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white shadow'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
