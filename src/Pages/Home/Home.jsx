import React, { useEffect } from "react";
import PageNationFilmsHome from "./Componnets/PageNationFilmsHome/PageNationFilmsHome";
import SideBar from "./../../Components/GolobalComponents/SideBar/SideBar";
export default function Home() {
  return (
    <>
      <div className="d-flex p-3 gap-3  col-12 ">
        <SideBar></SideBar>
        <PageNationFilmsHome></PageNationFilmsHome>
      </div>
    </>
  );
}
