import React, { useEffect, useState } from "react";
import { AiOutlineApartment } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";
import SearchbyGrntrs from "../../../../Apis/SearchbyGrntrs";
import { Link } from "react-router-dom";
export default function PageNationFilmsAdventure({}) {
  const [SearchbyGrntrsArry, setSearchbyGrntrsArry] = useState();
  const [cunterpage, setTcunterpage] = useState(1);
  useEffect(() => {
    SearchbyGrntrsFunc();
  }, []);

  useEffect(() => {
    SearchbyGrntrsFunc();
  }, [cunterpage]);

  function SearchbyGrntrsFunc() {
    const TwelveTopImdbPromise = Promise.resolve(SearchbyGrntrs(6, cunterpage));
    TwelveTopImdbPromise.then((value) => {
      let valueEntries = Object.entries(value);

      setSearchbyGrntrsArry(valueEntries[0][1]);
    });
  }
  function prevfunc() {
    if (cunterpage > 1) {
      setTcunterpage(cunterpage - 1);
    }
  }
  function nextfunc() {
    if (cunterpage >= 1) {
      if (SearchbyGrntrs) {
        setTcunterpage(cunterpage + 1);
      }
    }
  }
  return (
    <div className="PageNationFilmsHome  py-sm-5 col-12 col-sm-9">
      {SearchbyGrntrsArry
        ? SearchbyGrntrsArry.map((item) => {
            return (
              <div
                key={item.id}
                className="col-12 d-flex gap-3   mb-4 p-3 mainDivCardPagtion"
              >
                <div className=" col-4 col-sm-2  ">
                  <img src={item.poster} className="w-100 h-100 " alt="" />
                </div>
                <div className=" col-8 col-sm-9 d-flex justify-content-evenly flex-column ">
                  <Link to={"/aboutFilm/" + item.id}>
                    <h2>{item.title}</h2>
                  </Link>
                  <div className="d-flex gap-1">
                    <p className="m-0 p-0">
                      <AiOutlineApartment></AiOutlineApartment>
                    </p>
                    <p className="mt-1 me-2">
                      {" "}
                      {item.genres[1]} {item.genres[2]} {item.genres[3]}
                    </p>
                    <p className="m-0 p-0">
                      <FaImdb></FaImdb>
                    </p>
                    <p className="mt-1">{item.imdb_rating}</p>
                  </div>{" "}
                  <hr />{" "}
                  <div className="d-flex gap-1  col-11  ">
                    <p className="m-0 p-0">
                      <GiEarthAmerica></GiEarthAmerica>{" "}
                    </p>{" "}
                    <p className="mt-1 me-2 ">{item.country}</p>
                    <p className="m-0 p-0 text-center ">
                      <BsCalendarCheck></BsCalendarCheck>
                    </p>{" "}
                    <p className=" mt-1">{item.year}</p>
                  </div>{" "}
                </div>
              </div>
            );
          })
        : ""}
      <div className="gap-3   justify-content-center d-flex">
        <button onClick={prevfunc}>Prev</button>
        <button onClick={nextfunc}>next</button>
      </div>
    </div>
  );
}
