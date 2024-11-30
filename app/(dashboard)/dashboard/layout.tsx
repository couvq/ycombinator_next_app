import React, { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <h1 className="text-3xl">DASHBOARD</h1>
      {children}
    </div>
  );
};

export default Layout;
