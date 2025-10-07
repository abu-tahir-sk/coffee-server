import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";


const Main = () => {
      return (
            <div>
                  <div>
                        <Navbar></Navbar>
                  </div>
               <Outlet/>   
            </div>
      );
};

export default Main;