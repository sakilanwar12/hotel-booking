"use client"
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/sidebar";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store";
import { Fragment } from "react";

const MainLayout =  ({ children }: { children: React.ReactNode }) => {
    const { collapsed } = useSidebar();
    return (
        <Fragment>
            <Header />
            <Sidebar />
            <div className=" w-full flex flex-col">
                <div className={cn("flex-1 lg:ps-[220px]",{
                    "lg:ps-16":collapsed
                })}>
                    {children}
                </div>
                <div className="flex-none">
                    <Footer />
                </div>
            </div>
        </Fragment>
    );
};

export default MainLayout;