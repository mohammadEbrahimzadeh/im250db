import React, { useEffect, useState } from "react";
import SearchbyGrners from "../../../Apis/SearchbyGrntrs";
import { FaImdb } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SectionsGenres() {
  const [SearchbyGrnerCrimeArray, setSearchbyGrnerCrimeArray] = useState();
  const [SearchbyGrnerActionArray, setSearchbyGrnerActionArray] = useState();
  const [
    SearchbyGrnerBiographyArray,
    setSearchbyGrnerBiographyArray,
  ] = useState();
  useEffect(() => {
    crime();
    Action();
    Biography();
  }, []);
  function crime() {
    const SearchbyGrnersPromise = Promise.resolve(SearchbyGrners(1));
    SearchbyGrnersPromise.then((value) => {
      let valueEntries = Object.entries(value);
      valueEntries = valueEntries[0][1].slice(0, 5);
      setSearchbyGrnerCrimeArray(valueEntries);
    });
  }
  function Action() {
    const SearchbyGrnersPromise = Promise.resolve(SearchbyGrners(3));
    SearchbyGrnersPromise.then((value) => {
      let valueEntries = Object.entries(value);
      valueEntries = valueEntries[0][1].slice(0, 5);
      setSearchbyGrnerActionArray(valueEntries);
    });
  }
  function Biography() {
    const SearchbyGrnersPromise = Promise.resolve(SearchbyGrners(4));
    SearchbyGrnersPromise.then((value) => {
      let valueEntries = Object.entries(value);
      valueEntries = valueEntries[0][1].slice(0, 5);
      setSearchbyGrnerBiographyArray(valueEntries);
    });
  }
  return (
    <div className="SectionsGenres">
      <section className="mainSection p-3 p-sm-3 ">
        <h1>Crime</h1> <hr />
        <div className="divContCards justify-content-sm-evenly gap-3     d-flex ">
          {SearchbyGrnerCrimeArray
            ? SearchbyGrnerCrimeArray.map((item) => {
                return (
                  <div key={item.id} className=" divCard col-5 col-sm-2 ">
                    <div className="position-relative">
                      <img className="w-100" src={item.poster} alt="" />
                      <div className="position-absolute ps-1 ps-sm-3 overlayCardsGenres  text-break bottom-0 col-12  bg-opacity-25 w-100 top-25">
                        <p className="m-0  ">
                          {item.genres[0] + ` ` + item.genres[1]}
                        </p>
                        <div className="d-flex">
                          <p className="m-0 pt-1 ">{item.imdb_rating}</p>
                          <p className="m-0  ps-1 ">
                            {" "}
                            <FaImdb></FaImdb>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link to={"/aboutFilm/" + item.id}>
                        <p className="my-2 ps-1 ps-sm-3 ">{item.title}</p>
                      </Link>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </section>
      <section className="mainSection p-3 p-sm-4 ">
        <h1>Action</h1> <hr />
        <div className="divContCards justify-content-sm-evenly gap-3     d-flex ">
          {SearchbyGrnerActionArray
            ? SearchbyGrnerActionArray.map((item) => {
                return (
                  <div key={item.id} className=" divCard col-5 col-sm-2 ">
                    <div className="position-relative">
                      <img className="w-100" src={item.poster} alt="" />
                      <div className="position-absolute ps-1 ps-sm-3 overlayCardsGenres  text-break bottom-0 col-12   w-100 top-25">
                        <p className="m-0 ">
                          {" "}
                          {item.genres[0] + ` ` + item.genres[1]}
                        </p>
                        <div className="d-flex">
                          <p className="m-0 pt-1 ">{item.imdb_rating}</p>
                          <p className="m-0  ps-1 ">
                            {" "}
                            <FaImdb></FaImdb>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link to={"/aboutFilm/" + item.id}>
                        <p className="my-2  ps-1 ps-sm-3">{item.title}</p>
                      </Link>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </section>
      <section className="mainSection p-3 p-sm-4 ">
        <h1>Biography</h1> <hr />
        <div className="divContCards justify-content-sm-evenly gap-3     d-flex ">
          {SearchbyGrnerBiographyArray
            ? SearchbyGrnerBiographyArray.map((item) => {
                return (
                  <div key={item.id} className=" divCard col-5 col-sm-2 ">
                    <div className="position-relative">
                      <img className="w-100" src={item.poster} alt="" />
                      <div className="position-absolute ps-1 ps-sm-3 overlayCardsGenres  text-break bottom-0 col-12  bg-opacity-25 w-100 top-25">
                        <p className="m-0 ">
                          {" "}
                          {item.genres[0] + ` ` + item.genres[1]}
                        </p>
                        <div className="d-flex">
                          <p className="m-0 pt-1 ">{item.imdb_rating}</p>
                          <p className="m-0  ps-1 ">
                            {" "}
                            <FaImdb></FaImdb>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link to={"/aboutFilm/" + item.id}>
                        <p className="my-2 ps-1 ps-sm-3">{item.title}</p>
                      </Link>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </section>
    </div>
  );
}
