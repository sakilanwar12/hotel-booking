import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Accordion Page',
  description: 'Accordion Page',
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;