import Footer from "@/components/layouts/footer";
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
            <Sidebar />
            <div className="h-[calc(100vh-64px)] w-full flex flex-col">
                <div className="flex-1 lg:ps-[240px] p-6">
                    {children}
                </div>
                <div className="flex-none">
                    <Footer />
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;