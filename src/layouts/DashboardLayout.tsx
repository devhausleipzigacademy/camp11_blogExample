import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <aside>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </aside>
      <header>hello header</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default DashboardLayout;
