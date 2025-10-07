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
    <div>
      <h2></h2>
      <div className="card flex">
        <form className="card-body" onSubmit={handleSubmit}>
          <label className="label">Coffee Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Coffee Name"
          />
          <label className="label">Chef</label>
          <input
            name="chef"
            type="text"
            className="input"
            placeholder="Enter Coffee Chef"
          />

          <label className="label">Supplier</label>
          <input
            name="supplier"
            type="text"
            className="input"
            placeholder="Enter coffee supplier"
          />

          <label className="label">Taste</label>
          <input
            name="taste"
            type="text"
            className="input"
            placeholder="Enter coffee taste"
          />
          <label className="label">Category</label>
          <input
            name="category"
            type="text"
            className="input"
            placeholder="Enter coffee category"
          />
          <label className="label">Details</label>
          <input
            name="details"
            type="text"
            className="input"
            placeholder="Enter coffee details"
          />
          <label className="label">Photo</label>
          <input
            type="url"
            name="photoURL"
            className="input"
            placeholder="Enter photo"
          />

          <button className="btn btn-neutral mt-4">add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;

