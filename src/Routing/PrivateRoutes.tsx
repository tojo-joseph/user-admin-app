import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../auth/login/login";

export default function PrivateRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
