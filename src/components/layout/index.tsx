import { LayoutProps } from "./interface";

import Navbar from "../navbar";

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
