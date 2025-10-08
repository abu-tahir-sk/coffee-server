import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
      const navigate = useNavigate()
  const loadedCoffees = useLoaderData();
  const { _id, name, photoURL } = loadedCoffees;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    console.log(updateCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
          title: "Success",
          text: "Coffee Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
          
        });
        navigate('/')
        }
        
      });
      
  };

  return (
    <div className="px-36 p-6">
      <h2 className="font-bold text-4xl">Update Coffee : {name}</h2>
      <div className="card  bg-slate-100 p-6 my-6 font-serif">
        <form className="card-body" onSubmit={handleSubmit}>
           <div className="flex justify-center items-center w-full gap-6 py-3">
            <div className="flex w-full flex-col">
              <label className="label">Coffee Name</label>
              <input
                name="name"
                type="text"
                className="input w-full border-none "
                placeholder="Coffee Name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="label">Chef</label>
              <input
                name="chef"
                type="text"
                className="input w-full border-none "
                placeholder="Enter Coffee Chef"
              />
            </div>
          </div>

          <div className="flex gap-6 pb-3">
            <div className="flex flex-col w-full">
              <label className="label">Taste</label>
              <input
                name="taste"
                type="text"
                className="input w-full border-none"
                placeholder="Enter coffee taste"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="label">Category</label>
              <input
                name="category"
                type="text"
                className="input w-full border-none bg-white"
                placeholder="Enter coffee category"
              />
            </div>
          </div>
          <div className="flex w-full gap-6 pb-3">
            <div className="flex flex-col w-full">
              <label className="label">Details</label>
              <input
                name="details"
                type="text"
                className="input w-full border-none "
                placeholder="Enter coffee details"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="label">Taste</label>
              <input
                name="taste"
                type="text"
                className="input w-full border-none"
                placeholder="Enter coffee taste"
              />
            </div>
            
          </div>
       
              <label className="label">Photo</label>
              <input
                type="url"
                name="photoURL"
                className="input w-full border-none "
                placeholder="Enter photo"
              />
           

          <button className="btn bg-[#D2B48C]  mt-4">Update Coffee</button>
         
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
