"use client"
import Chart from "react-apexcharts";

const PieChart = ({ height = 325 }: { height?: number }) => {
    const series = [50, 45, 33];

    const options: any = {

        dataLabels: {
            enabled: false
        },
        chart: {
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: 0
        },
        grid: {
            borderColor: '#ECEFF8',
            strokeDashArray: 0
        },
        colors: ["#34d399", "#336eeb", "#38bdf8"],
        labels: ['Completed', 'In Progress', 'Pending '],

        tooltip: {
            theme: "dark",
            y: {
                formatter: function (val: any) {
                    return "$ " + val + "K"
                }
            }
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            pie: {
            }
        }

    };


    return (
        <Chart
            options={options}
            series={series}
            type="pie"
            width="100%"
            height={height}
        />
    );
};

export default PieChart;
