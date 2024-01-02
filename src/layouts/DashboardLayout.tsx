import React from "react";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <aside>hello aside</aside>
      <header>hello header</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default DashboardLayout;
