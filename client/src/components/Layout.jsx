import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <header>
        <p>Layout</p>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
