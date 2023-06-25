import React, { useEffect } from "react";
import PageNationFilmsDrama from "./Componnets/PageNationFilmsDrama/PageNationFilmsDrama";
import SideBar from "../../Components/GolobalComponents/SideBar/SideBar";
export default function Drama() {
  return (
    <>
      <div className="d-flex p-3 gap-3  col-12 ">
        <SideBar></SideBar>
        <PageNationFilmsDrama></PageNationFilmsDrama>
      </div>
    </>
  );
}
