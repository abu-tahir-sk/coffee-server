import {  Link, NavLink} from "react-router-dom";
import logo from "../assets/images/more/logo1.png"
import img15 from "../assets/images/more/15.jpg"


const Navbar = () => {
      return (
          
<div style={{ backgroundImage: `url(${img15})`, }}  className="navbar  shadow-sm text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black font-serif">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <img className="w-12 h-12" src={logo} alt="" />
    <a className="btn btn-ghost text-xl">Espresso Emporium</a>
  </div>
  <div className="navbar-end">
   
   <Link to="/signIn">
    <button className="btn ">
      
     login
     
    </button>
   </Link>
  </div>
</div>
      );
};

export default Navbar;