import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <NavBar />

      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
