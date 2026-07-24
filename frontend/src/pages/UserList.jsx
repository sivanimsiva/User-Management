import { useEffect, useState } from "react";
import API from "../services/api";
import UserTable from "../components/UserTable";
import Filter from "../components/Filter";
import { useNavigate } from "react-router-dom";

function UserList() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [place, setPlace] = useState("");

  const getUsers = async () => {
    const res = await API.get("/");
    setUsers(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) &&
    (place === "" || user.place === place)
  );

  return (

    <div className="max-w-6xl mx-auto mt-10">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-bold">
          User List
        </h1>
        <button
          onClick={() => navigate("/admin")}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Back
        </button>
      </div>
      <Filter
        search={search}
        setSearch={setSearch}
        place={place}
        setPlace={setPlace}
      />
      <UserTable users={filteredUsers} />
    </div>

  );

}

export default UserList;