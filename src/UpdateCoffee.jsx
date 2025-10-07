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
      <div className="card flex">
        <form className="card-body" onSubmit={handleSubmit}>
          <label className="label">Coffee Name</label>
          <input
            name="name"
            type="text"
            className="input"
            defaultValue={name} placeholder="Coffee Name"
          />
          <label className="label">Chef</label>
          <input
            name="chef"
            type="text"
            className="input"
            defaultValue={name} placeholder="Enter Coffee Chef"
          />

          <label className="label">Supplier</label>
          <input
            name="supplier"
            type="text"
            className="input"
            defaultValue={name} placeholder="Enter coffee supplier"
          />

          <label className="label">Taste</label>
          <input
            name="taste"
            type="text"
            className="input"
            defaultValue={name} placeholder="Enter coffee taste"
          />
          <label className="label">Category</label>
          <input
            name="category"
            type="text"
            className="input"
            defaultValue={name} placeholder="Enter coffee category"
          />
          <label className="label">Details</label>
          <input
            name="details"
            type="text"
            className="input"
            defaultValue={name} placeholder="Enter coffee details"
          />
          <label className="label">Photo</label>
          <input
            type="url"
            name="photoURL"
            className="input"
            defaultValue={photoURL} placeholder="Enter photo"
          />

          <button className="btn btn-neutral mt-4">Update Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
