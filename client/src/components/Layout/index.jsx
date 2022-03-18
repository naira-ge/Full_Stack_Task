import { Outlet } from "react-router-dom";

import './styles.css';

const Layout = () => {
  return (
      <main className="container">
        <Outlet />
      </main>
  )
}

export default Layout;
