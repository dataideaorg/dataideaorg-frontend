import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet /> {/* Placeholder for nested routes */}
        <ToastContainer />
      </main>
    </>
  );
};

export default MainLayout;
