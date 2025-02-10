import { Outlet } from "react-router-dom";

const Layout = () => (
  <main className=" bg-gray-900 text-white h-screen Merriweather">
    <Outlet />
  </main>
);

export default Layout;
