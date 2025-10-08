import { FiEye } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { IoEyeSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id,  name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoURL } = coffee;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className= "hero  font-sans rounded">
     <div className=" hero-content  flex-row">
     
       <div className=" h-[200px]">
         <img className="h-full" src={photoURL} alt={name} />
       </div>
      
     {/* </div> */}
    
      <div className="mx-6 flex flex-col">
        <h2 className=" "><span className="font-bold">Name: </span>{name}</h2>
        <h2 className=""><span className="font-bold"> Chef:</span>{chef}</h2>
        <h2 className=""> <span className="font-bold">Price: </span>{taste}tk</h2>
      </div>
    
     
      
        
        
          <div className="join join-vertical gap-6">
            <button className="btn join-item bg-[#D2B48C] text-white font-bold text-xl"><IoEyeSharp /></button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item text-xl bg-[#3C393B] text-white"><HiOutlinePencil /></button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn text-white bg-[#EA4744] text-xl join-item">
             <MdDeleteOutline />
            </button>

          </div>
          </div>
        </div>
      
  
  );
};

export default CoffeeCard;
