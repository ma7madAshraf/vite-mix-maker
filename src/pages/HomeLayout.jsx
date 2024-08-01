import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <section className="page">
        {navigation.state === "loading" ? (
          <div className="loading" />
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
