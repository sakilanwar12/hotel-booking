import CustomBreadcrumb from "@/components/custom-breadcrumb";
import { Button } from "@/components/ui/button";
import { StatisticsWidget } from "@/components/widgets/statistics-widget";
import { ArrowUp, Box, Speaker } from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <CustomBreadcrumb pageTitle="Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatisticsWidget>
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-base  text-default-900">Total Products</h3>
              <div className="text-3xl font-bold text-default-900 mt-2">500+</div>
              <div className="flex items-center gap-1 mt-2 text-sm"> <ArrowUp className="w-5 h-5 text-primary" /><span className="text-primary">28.36%</span> <span>Since last month</span></div>
            </div>
            <Button className="flex-none h-12 w-12 p-0 rounded-full "  >
              <Box className="w-6 h-6 text-primary-foreground" />
            </Button>
          </div>
        </StatisticsWidget>
        <StatisticsWidget className="bg-info/10 hover:bg-info/20">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-base  text-default-900">New Orders</h3>
              <div className="text-3xl font-bold text-default-900 mt-2">350k+</div>
              <div className="flex items-center gap-1 mt-2 text-sm"> <ArrowUp className="w-5 h-5 text-destructive" /><span className="text-destructive">29.36%</span> <span>Since last month</span></div>
            </div>
            <Button className="flex-none h-12 w-12 p-0 rounded-full bg-info"  >
              <Box className="w-6 h-6 text-primary-foreground" />
            </Button>
          </div>
        </StatisticsWidget>
        <StatisticsWidget className="bg-success/10 hover:bg-success/20">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-base  text-default-900">Total Orders</h3>
              <div className="text-3xl font-bold text-default-900 mt-2">50k+</div>
              <div className="flex items-center gap-1 mt-2 text-sm"> <ArrowUp className="w-5 h-5 text-success" /><span className="text-success">29.36%</span> <span>Since last month</span></div>
            </div>
            <Button className="flex-none h-12 w-12 p-0 rounded-full bg-success">
              <Box className="w-6 h-6 text-primary-foreground" />
            </Button>
          </div>
        </StatisticsWidget>
        <StatisticsWidget className="bg-destructive/10 hover:bg-destructive/20">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-base  text-default-900">Total Revenue</h3>
              <div className="text-3xl font-bold text-default-900 mt-2">150k+</div>
              <div className="flex items-center gap-1 mt-2 text-sm"> <ArrowUp className="w-5 h-5 text-destructive" /><span className="text-destructive">29.36%</span> <span>Since last month</span></div>
            </div>
            <Button className="flex-none h-12 w-12 p-0 rounded-full bg-destructive"  >
              <Box className="w-6 h-6 text-primary-foreground" />
            </Button>
          </div>
        </StatisticsWidget>
   
      </div>

    </div>
  );
};

export default Dashboard;