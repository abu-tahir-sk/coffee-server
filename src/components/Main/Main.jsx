import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Main = () => {
  return (
    <div className="rancho-regular">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
