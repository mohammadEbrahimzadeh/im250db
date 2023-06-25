import React, { useEffect } from "react";
import PageNationFilmsAdventure from "./Componnets/PageNationFilmsAdventure/PageNationFilmsAdventure";
import SideBar from "../../Components/GolobalComponents/SideBar/SideBar";
export default function Adventure() {
  return (
    <>
      <div className="d-flex p-3 gap-3  col-12 ">
        <SideBar></SideBar>
        <PageNationFilmsAdventure></PageNationFilmsAdventure>
      </div>
    </>
  );
}
