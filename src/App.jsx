import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Banner from "./components/Banner";
import cups from "../src/assets/images/more/4.png"
import Follow from "./components/Follow";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState([loadedCoffees]);

  return (
    <div>
      <div>
     <div>
      <Banner></Banner>
     </div>
     <div className="py-20 text-center">
      <h2 className="text-2xl font-bold text-[#331A15] py-2">Our Popular Products</h2>
      <Link to='/addCoffee'><button className="btn bg-[#E3B577]">Add Coffee</button></Link>
     </div>
        <div className="grid md:grid-cols-2 gap-6 w-10/12 mx-auto relative opacity-0.5
        ">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
          
        </div>
        <div  className="absolute left-0  top-[99%]  opacity-1">
         <img className="h-56" src={cups} alt="" />
        </div>
        
      </div>
      <div className="py-20 text-center">
        <p className="text-center">Follow Us Now</p>
      <h2 className="text-2xl font-bold text-[#331A15] py-2">Follow on Instagram</h2>
      <Follow></Follow>
     </div>
    </div>
  );
}

export default App;
