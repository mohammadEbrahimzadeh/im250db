import React, { useEffect, useState } from "react";
import TwelveTopImdb from "./../../../Apis/TwelveTopImdb";
import { Link } from "react-router-dom";

import { FaImdb } from "react-icons/fa";
export default function Header() {
  const [TwelveTopImdbArray, setTwelveTopImdb] = useState();
  useEffect(() => {
    const TwelveTopImdbPromise = Promise.resolve(TwelveTopImdb());
    TwelveTopImdbPromise.then((value) => {
      let valueEntries = Object.entries(value);
      setTwelveTopImdb(valueEntries[0][1]);
    });
  }, []);
  const [x, setx] = useState();

  // function routeChange(id) {
  //   let path = `/aboutfilm/?${id}`;
  //   navigate(path);
  // }
  return (
    <div className="Header  col-12   d-flex align-items-stretch justify-content-evenly flex-wrap">
      <div
        className=" mainDiv  col-12 d-flex 
      align-items-center p-3    justify-content-evenly flex-wrap"
      >
        {" "}
        {TwelveTopImdbArray
          ? TwelveTopImdbArray.map((item) => {
              return (
                <div key={item.id} className="  m-1  d-flex  divItem   ">
                  <div className="col-12   ">
                    <img
                      src={item.poster}
                      className="w-100 imgItem h-100 "
                      alt=""
                    />
                    <div className="divOverlay  p-3">
                      <div className="d-flex  align-items-center ">
                        <p className="  m-0 pb-1 me-1 ">
                          {" "}
                          <FaImdb></FaImdb>
                        </p>
                        <p className="p-0 m-0 d-flex align-items-center ">
                          {" "}
                          {item.imdb_rating}
                        </p>
                      </div>

                      <Link to={"/aboutFilm/" + item.id}>
                        <p className="p-0 m-0">{item.title}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}{" "}
      </div>
    </div>
  );
}
