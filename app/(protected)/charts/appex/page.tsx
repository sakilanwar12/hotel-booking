import Card from "@/components/ui/code-card";
import LineChart from "./line-chart";
import BarChart from "./bar-chart";
import AreaChart from "./area-chart";
import FunnelChart from "./funnel-chart";

const AppexChart = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <Card title="Line Chart">
                <LineChart />
            </Card>
            <Card title="Bar Chart">
                <BarChart />
            </Card>
            <Card title="Area Chart">
                <AreaChart />
            </Card>
            <Card title="Funnel Chart">
                <FunnelChart />
            </Card>
        </div>
    );
};

export default AppexChart;