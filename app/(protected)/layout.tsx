import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Fragment } from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();

    if (!session) {
        redirect("/");
    }
    return (
        <Fragment>
            <Header />
  

            <div>
                <Sidebar />
                <div className="ps-[240px] p-6">
                    {children}
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;