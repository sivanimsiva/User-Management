import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  return (

    <div className="max-w-xl mx-auto mt-10">

      <h1 className="text-3xl font-bold mb-5">

        Admin Dashboard

      </h1>

      <UserForm />

      <button
        onClick={() => navigate("/users")}
        className="bg-green-600 text-white mt-5 px-5 py-2 rounded"
      >
        View Users
      </button>

    </div>

  );

}

export default AdminDashboard;