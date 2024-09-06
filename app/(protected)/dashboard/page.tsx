import CustomBreadcrumb from "@/components/custom-breadcrumb";
import DashboardSelect from "@/components/dashboard-select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatisticsWidget } from "@/components/widgets/statistics-widget";
import { ArrowUp, Box } from "lucide-react";
import LineChart from "./line-chart";
import PieChart from "./pie-chart";
import DashboardDropdown from "@/components/dashboard-dropdown";
import { activityData, campaignData, revinueData, salesData } from "./data";
import CountryItem from "./country-item";
import RevinueItem from "./revinue-item";
import CampaignItem from "./campaign-item";
import ActivityItem from "./activity-item";

const Dashboard = () => {
  return (
    <div className="space-y-6">
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
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardHeader className="justify-between items-center mb-0 pb-0">
              <CardTitle>Monthly Earning</CardTitle>
              <DashboardSelect />
            </CardHeader>
            <CardContent className="py-0">
              <LineChart height={300} />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Card>
            <CardHeader className="justify-between items-center mb-0 pb-0">
              <CardTitle>Sales Overviw</CardTitle>
              <DashboardSelect />
            </CardHeader>
            <CardContent className="py-0 pb-5">
              <PieChart />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex  items-center">
            <div className="flex-1">
              <CardTitle>Sales by Countries</CardTitle>
              <div className="mt-1.5 text-sm font-medium text-default-600">Monthly Sales Overview</div>
            </div>
            <div className="flex-none">
              <DashboardDropdown />
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {salesData.map((item, index) => <CountryItem key={index} item={item} />)}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex  items-center">
            <div className="flex-1">
              <CardTitle>Revenue Sources</CardTitle>
              <div className="mt-1.5 text-sm font-medium text-default-600">Analytics based on sources</div>
            </div>
            <div className="flex-none">
              <DashboardDropdown />
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mt-2">
              {revinueData.map((item, index) => <RevinueItem key={index} item={item} />)}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex  items-center">
            <div className="flex-1">
              <CardTitle>Monthly Campaign State</CardTitle>
              <div className="mt-1.5 text-sm font-medium text-default-600">24.72k Social Visiters</div>
            </div>
            <div className="flex-none">
              <DashboardDropdown />
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6 mt-2">
              {campaignData.map((item, index) => <CampaignItem key={index} item={item} />)}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex  items-center">
            <div className="flex-1">
              <CardTitle>Recent Activity</CardTitle>
              <div className="mt-1.5 text-sm font-medium text-default-600">Our latest activities</div>
            </div>
            <div className="flex-none">
              <DashboardDropdown />
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6 mt-2">
              {
                activityData.map((item, index) => <ActivityItem key={index} item={item} />)
              }
            </ul>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};

export default Dashboard;