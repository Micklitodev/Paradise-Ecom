import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ orders }) => {
  const chartRef = useRef(null);

  const gross = orders?.reduce((accumulator, order) => {
    accumulator += parseInt(order.total);
    return accumulator;
  }, 0);

  useEffect(() => {
    if (orders.length === 0) return;

    // convert arr obj =>  needed data
    const parsedData = orders.map((order) => ({
      date: new Date(parseInt(order.purchaseDate)),
      total: parseInt(order.total),
    }));

    // group needed data
    const groupedData = {};
    parsedData.forEach((data) => {
      const month = data.date.getMonth();
      const day = data.date.getDate();
      const key = `${month}-${day}`;

      if (!groupedData[key]) {
        groupedData[key] = {
          date: data.date,
          total: 0,
        };
      }

      let dataInDollars = data.total / 100;
      groupedData[key].total += dataInDollars;
    });

    // setup data for chartt
    const ctx = chartRef.current.getContext("2d");

    const chartData = {
      labels: Object.values(groupedData).map((data) =>
        data.date.toDateString()
      ),
      datasets: [
        {
          label: "Total Sales",
          data: Object.values(groupedData).map((data) => data.total),
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const config = {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: `Total Gross: $${gross / 100} `,
          },
        },
      },
    };

    // del existing chart
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }
    // create chart instance
    chartRef.current.chart = new Chart(ctx, config);
  }, [orders]);

  return (
    <>
      <div
        className="container"
        style={{ display: "block", position: "relative" }}
      >
        <canvas
          className="bg-white bg-opacity-10 rounded"
          ref={chartRef}
          id="lineChart"
        />
      </div>
    </>
  );
};

export default LineChart;
