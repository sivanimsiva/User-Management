import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ServiceDashboard from "./pages/ServiceDashboard";
import UserList from "./pages/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/service" element={<ServiceDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;