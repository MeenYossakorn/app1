import React, { Component } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "./navlink.css";
import Home from "./home";
import Member from "./member";
import Products from "./products";

export default function Router3() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Home
        </NavLink>{" "}
        -&nbsp;
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Product
        </NavLink>
        -&nbsp;
        <NavLink
          to="/member"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Member
        </NavLink>
        -&nbsp;
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Contact Us
        </NavLink>
      </nav>
      <Routes style={{ margin: "20px" }}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/member" Component={Member} />
        <Route
          path="/contact"
          element={<div style={{ textAlign: "center" }}>Contact Page</div>}
        />
        <Route path="/*" element={<h3 style={{textAlign:'center'}}>Error 404 Not Found</h3>} />
      </Routes>
    </BrowserRouter>
  );
}
