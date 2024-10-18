"use client"
import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/sidebar";
import FooterMenu from "@/components/layouts/sidebar/footer-menu";
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
                <div className={cn("flex-1 xl:ps-[220px] lg:ps-24",{
                    "xl:ps-16":collapsed
                })}>
                    {children}
                </div>
            </div>
            <FooterMenu/>
        </Fragment>
    );
};

export default MainLayout;