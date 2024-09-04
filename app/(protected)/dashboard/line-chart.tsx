"use client"
import Chart from "react-apexcharts";

const LineChart = ({ height = 300 }: { height?: number }) => {
    const series: any = [{
        name: "Sales",
        data: [1220, 1600, 1800, 1600, 2000, 1900, 2100, 1500, 2300, 2100, 2000, 1800]
    }];

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
            curve: "smooth",
            width: 3,
        },
        grid: {
            borderColor: '#ECEFF8',
            strokeDashArray: 0
        },
        colors: ["#0570eb"],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            theme:"dark",
            y: {
                formatter: function (val: any) {
                    return "$ " + val + "K"
                }
            }
        }
      
    };


    return (
        <Chart
            options={options}
            series={series}
            type="line"
            width="100%"
            height={height}
        />
    );
};

export default LineChart;
