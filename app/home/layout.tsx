import MainLayout from "./main-layout";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
};

export default Layout;