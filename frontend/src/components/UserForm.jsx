import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function UserForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    place: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/", form);

      alert("User Added Successfully");

      setForm({
        name: "",
        email: "",
        place: "",
      });

      navigate("/users");
    } catch (error) {
      console.log(error);
      alert("Failed to Add User");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-5 text-center">
        Add User
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Place
          </label>

          <input
            type="text"
            name="place"
            value={form.place}
            onChange={handleChange}
            placeholder="Enter Place"
            className="w-full border rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save User
        </button>

      </form>
    </div>
  );
}

export default UserForm;