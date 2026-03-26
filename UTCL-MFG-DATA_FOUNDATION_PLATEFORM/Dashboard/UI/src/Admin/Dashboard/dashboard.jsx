import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import DataTable from "../Data-Table/dataTable";
import Navbar from "../Navbar/navbar";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { MdFileDownloadDone } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className='container-fluid'>
        <div className="row">
          <div className="col" style={{textAlign:"center"}}>
          <Link to="/admin/Dashboard/DataTable">
          <button type="button" className={`btn btn-primary ${styles.user_button}`}>User Management Dashboard</button>
        </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
