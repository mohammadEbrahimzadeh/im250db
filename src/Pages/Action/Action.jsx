import React, { useEffect } from "react";
import PageNationFilmsAction from "./Componnets/PageNationFilmsAction/PageNationFilmsDrama";
import SideBar from "../../Components/GolobalComponents/SideBar/SideBar";
export default function Action() {
  return (
    <>
      <div className="d-flex p-3 gap-3  col-12 ">
        <SideBar></SideBar>
        <PageNationFilmsAction></PageNationFilmsAction>
      </div>
    </>
  );
}
