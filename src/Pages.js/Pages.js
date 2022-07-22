import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Category from "../components/Category";
import Search from "../components/Search";
import Searched from "./Searched";
import Recipe from "./Recipe";
import {AnimatePresence} from 'framer-motion'

function Pages() {

  return (
    <AnimatePresence exitBeforeEnter>
    <Router>
      <Search />
      <Category />
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/cuisine/:type" exact element={<Cuisine />} />
        <Route path="/search/:search" exact element={<Searched />} />
        <Route path="/recipe/:id" exact element={<Recipe />} />
      </Routes>
    </Router>
    </AnimatePresence>
  );
}

export default Pages;
