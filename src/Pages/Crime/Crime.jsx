import React, { useEffect } from "react";
import PageNationFilmsCrime from "./Componnets/PageNationFilmsCrime/PageNationFilmsCrime";
import SideBar from "../../Components/GolobalComponents/SideBar/SideBar";
export default function Drama() {
  return (
    <>
      <div className="d-flex p-3 gap-3  col-12 ">
        <SideBar></SideBar>
        <PageNationFilmsCrime></PageNationFilmsCrime>
      </div>
    </>
  );
}
