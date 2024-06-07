import Header from "@/components/layouts/header/header";
import Sidebar from "@/components/layouts/sidebar/sideber";
import { Fragment } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      {/* sidebar */}
      <div>
        <Sidebar />
        <div className="ps-[240px] p-6">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default MainLayout;