import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <div>
        <h2>gorom gorom Coffee {coffees.length}</h2>
        <div className="grid md:grid-cols-2">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
      <Link to="/addCoffee">
        <button className="btn">Add a Coffee</button>
      </Link>
      <Link to="/updateCoffee">
        <button className="btn">Update a Coffee</button>
      </Link>
    </div>
  );
}

export default App;
