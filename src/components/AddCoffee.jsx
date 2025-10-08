import Swal from "sweetalert2";

const AddCoffee = () => {
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
    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success",
          text: "User Added Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className="w-10/12 mx-auto py-10">
      <div className="flex flex-col justify-center items-center w-6/12 mx-auto">
        <h2 className="text-center text-2xl font-bold text-[#331A15] p-4">
          Add New Coffee
        </h2>
        <p className="text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div className="card bg-slate-100 p-6 my-6 font-serif">
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
           

          <button className="btn bg-[#D2B48C]  mt-4">add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
