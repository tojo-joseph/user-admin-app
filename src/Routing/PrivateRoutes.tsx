import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function PrivateRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" />
      </Routes>
    </Router>
  );
}
