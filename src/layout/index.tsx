import { Outlet } from "react-router-dom";

const Layout = () => (
  <main className=" bg-[#FAF9F5] text-white h-screen Merriweather">
    <Outlet />
  </main>
);

export default Layout;
