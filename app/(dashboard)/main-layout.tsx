import Header from "@/components/layouts/header/header";
import { Fragment } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <div className="flex">
        <div className="w-[248px] h-screen overflow-y-auto  flex-none">Sidebar</div>
        <div className="flex-1">
          {children}
        </div>
      </div>

    </Fragment>
  );
};

export default MainLayout;