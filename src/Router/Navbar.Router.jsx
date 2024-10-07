import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogPage from "../Pages/BlogPage/BlogPage";
import HomePage from "../Pages/HomePage/HomePage";

const NavbarRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
  );
};

export default NavbarRouter;
