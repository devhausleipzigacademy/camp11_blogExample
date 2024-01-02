import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>Hai friends</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default RootLayout;
