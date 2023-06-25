import React, { useEffect } from "react";
import PageNationFilmsBiography from "./Componnets/PageNationFilmsBiography/PageNationFilmsBiography";
import SideBar from "../../Components/GolobalComponents/SideBar/SideBar";
export default function Biography() {
  return (
    <>
      <div className="d-flex p-3 gap-3  col-12 ">
        <SideBar></SideBar>
        <PageNationFilmsBiography></PageNationFilmsBiography>
      </div>
    </>
  );
}
