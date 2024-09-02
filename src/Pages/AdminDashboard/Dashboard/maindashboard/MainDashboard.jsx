import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MainDashboard = () => {
  const state = {
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: '100%',
        width: '100%',
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                width: 1000,
                height: 600,
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                width: '100%',
                height: 350,
              },
            },
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                width: '100%',
                height: 300,
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  };

  return (
    <div className=" bg-white shadow-md h-full max-h-[100vh] md:max-h-[80vh]">
      <h1 className='text-xl sm:text-4xl text-gray-700 ml-6'>Real Time Data Analysis</h1>
      <div className= "w-full md:w-[80vw] h-full p-4 pb-10">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default MainDashboard;
