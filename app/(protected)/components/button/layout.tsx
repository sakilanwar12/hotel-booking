
import { Fragment } from "react";
export const metadata = {
  title: "Button Page",
  description: "Button Page",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

export default Layout;