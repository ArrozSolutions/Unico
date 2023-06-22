import React, { useEffect } from "react";
import "./Admin.css";
import { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import unico from "../../assets/Unico.jpeg";
import AddProduct from "./AddProduct";
import Allcustomer from "./Allcustomer";
import Allproduct from "./Allproduct";
import Alluser from "./Alluser";
import UpdatePro from "./UpdatePro";

const Admin = () => {
  const [page, setPage] = useState("");
  const [showPage,setShowPage] = useState(false);
  const Navigate = useNavigate();

  const clickHander = (event) => {
    console.log(event);

    setPage(event);

    console.log(page);
  };

  useEffect(()=>{
    if(!localStorage.getItem("isAdmin")){
      setShowPage(false);
      Navigate('/');
    }else{
      setShowPage(true)
    }
  },[Navigate])

  const clickHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    Navigate("/");
  };



  return (
<>{showPage &&
<div className="admin-body">
      <div class="side-menu">
        <div class="brand-name">
          <Link to="/">
            <img src={unico} alt="" />
          </Link>
          <h1>Super Admin</h1>
        </div>
        <ul>
          <NavLink>
            <li onClick={() => clickHander("Dashboard")}>
              {/* <img src="dashboard (2).png" alt="" /> */}
              &nbsp; <span>Dashboard</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("Alluser")}>
              {/* <img src="reading-book (1).png" alt="" /> */}
              &nbsp;<span>All User</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("Allcustomer")}>
              {/* <img src="teacher2.png" alt="" /> */}
              &nbsp;<span>All Customers</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("Allproducts")}>
              {/* <img src="school.png" alt="" /> */}
              &nbsp;<span>All products</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("UpdatePro")}>
              {/* <img src="payment.png" alt="" /> */}
              &nbsp;<span>Update Stocks of Product</span>{" "}
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => clickHander("Addproduct")}>
              {/* <img src="payment.png" alt="" /> */}
              &nbsp;<span>Add New Products</span>{" "}
            </li>
          </NavLink>
        </ul>
      </div>
      <div class="admincontainer">
        <div class="header">
          <div class="nav">
            <div class="search">
              <input type="text" placeholder="Search.." />
              <button type="submit">
                <img
                  src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png"
                  alt=""
                />
              </button>
            </div>
            <div class="user">
              <a href="/" class="btn" onClick={clickHandler}>
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          {page === "Dashboard" ? (
            <Dashboard />
          ) : page === "Addproduct" ? (
            <AddProduct />
          ) : page === "UpdatePro" ? (
            <UpdatePro />
          ) : page === "Alluser" ? (
            <Alluser />
          ) : page === "Allcustomer" ? (
            <Allcustomer />
          ) : page === "Allproducts" ? (
            <Allproduct />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
}</>
  );
};

export default Admin;
