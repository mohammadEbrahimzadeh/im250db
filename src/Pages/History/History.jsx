import React, { useEffect } from "react";
import PageNationFilmsHistory from "./Componnets/PageNationFilmsHistory/PageNationFilmsHistory";
import SideBar from "../../Components/GolobalComponents/SideBar/SideBar";
export default function History() {
  return (
    <>
      <div className="d-flex p-3 gap-3  col-12 ">
        <SideBar></SideBar>
        <PageNationFilmsHistory></PageNationFilmsHistory>
      </div>
    </>
  );
}
