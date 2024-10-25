import HomePage from "./Pages/HomePage/HomePage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import Product from "./Pages/ProductPage/Product";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
