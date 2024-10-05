import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogPage from "../Pages/BlogPage/BlogPage";

const NavbarRouter = () => {
  return (
    <Routes>
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
};

export default NavbarRouter;
