import React, { useState, useEffect } from "react";
import { FaImdb } from "react-icons/fa";
import SearchbyGrners from "./../../../Apis/SearchbyGrntrs";
import { Link } from "react-router-dom";
export default function SideBar() {
  const [SearchbyGrnerHistoryArray, setSearchbyGrnerHistoryArray] = useState();

  useEffect(() => {
    History();
  }, []);
  function History() {
    const SearchbyGrnersPromise = Promise.resolve(SearchbyGrners(5));
    SearchbyGrnersPromise.then((value) => {
      let valueEntries = Object.entries(value);
      valueEntries = valueEntries[0][1].slice(0, 5);
      setSearchbyGrnerHistoryArray(valueEntries);
    });
  }

  return (
    <div className="SideBar  d-none d-sm-block">
      <h1>History</h1>
      <div className="MainContentSideBar d-flex flex-column gap-3">
        {SearchbyGrnerHistoryArray
          ? SearchbyGrnerHistoryArray.map((item) => {
              return (
                <div
                  onClick={() => {
                    let path = `/aboutfilm/?id=${item.id}`;
                    window.location = path;
                  }}
                  key={item.id}
                  className="CardSideBar position-relative"
                >
                  <div>
                    <img src={item.poster} className="w-100" alt="" />
                  </div>
                  <div className="position-absolute flex-column p-3 overlaySidebar bottom-0 ">
                    <div className="d-flex ">
                      {" "}
                      <p className="m-0 me-1 ">
                        {" "}
                        <FaImdb></FaImdb>
                      </p>{" "}
                      <p className="m-0 pt-1 ">{item.imdb_rating}</p>
                    </div>
                    <div className="">
                      <Link to={"/aboutFilm/" + item.id}>
                        <p className="m-0 ">{item.title}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
