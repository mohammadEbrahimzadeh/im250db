import React, { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./Components/GolobalComponents/NavBar/NavBar";
import Header from "./Components/GolobalComponents/Header/Header";
import SectionsGenres from "./Components/GolobalComponents/SectionsGenres/SectionsGenres";
import Footer from "./Components/GolobalComponents/Footer/Footer";

export default function App() {
  const router = useRoutes(Routes);
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    });
  }, [location]);
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <SectionsGenres></SectionsGenres>
      {router}
      <Footer></Footer>
    </>
  );
}
