"use client"
import Header from "@/components/layouts/header/header";
import Sidebar from "@/components/layouts/sidebar";
import SessionProvider from "@/providers/session-provider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <SessionProvider>
      <Header />
      <div>
        <Sidebar />
        <div className="ps-[240px] p-6">
          {children}
        </div>
      </div>
    </SessionProvider>
  );
};

export default MainLayout;