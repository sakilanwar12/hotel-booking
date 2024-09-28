
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import MainLayout from "./main-layout";

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();

    if (!session) {
        redirect("/");
    }
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
};

export default Layout;