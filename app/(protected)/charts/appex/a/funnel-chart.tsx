"use client"
import Chart from "react-apexcharts";

const FunnelChart = ({ height = 300 }: { height?: number }) => {

    const options: any = {

        dataLabels: {
            enabled: true
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                barHeight: '70%'  ,
                isFunnel: true          
            }
        }
    };

    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];

    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height={height}
        />
    );
};

export default FunnelChart;
