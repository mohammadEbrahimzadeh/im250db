import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetAboutFilmsApi from "./../../Apis/GetAboutFilmsApi";
import { AiOutlineApartment } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";
import { GiEarthAmerica, GiDirectorChair } from "react-icons/gi";
import { BsCalendarCheck, BsFillPenFill } from "react-icons/bs";
import { MdOutlineHowToVote, MdRecentActors } from "react-icons/md";
import { BiTime } from "react-icons/bi";

export default function AboutFilm() {
  let { id } = useParams();
  const [Film, setFilm] = useState();
  // useEffect(() => {
  //   GetAboutFilmsApi(id);
  // }, []);
  useEffect(() => {
    SearchbyIdFilms(id);
  }, [id]);

  function SearchbyIdFilms(id) {
    const TwelveTopImdbPromise = Promise.resolve(GetAboutFilmsApi(id));
    TwelveTopImdbPromise.then((value) => {
      setFilm([value]);
    });
  }

  return (
    <div className="PageNationFilmsHome  p-sm-5 col-12 ">
      {Film
        ? Film.map((item) => {
            return (
              <div
                key={item.id}
                className="col-12 d-flex gap-sm-4  gap-0 flex-column   p-3 mainDivCardPagtion"
              >
                <div className="d-flex gap-4  ">
                  <div className=" col-3  ">
                    <img src={item.poster} className="w-100  " alt="" />
                  </div>
                  <div className=" col-9 d-flex  justify-content-evenly flex-column ">
                    <h2>{item.title}</h2>
                    <div className="d-flex align-items-center  gap-1">
                      <p className="m-0 p-0">
                        <AiOutlineApartment></AiOutlineApartment>
                      </p>
                      <p className=" m-0  me-3 ">
                        {" "}
                        {item.genres[1]} {item.genres[2]} {item.genres[3]}
                      </p>
                      <p className="m-0 p-0 text-center ">
                        <BsCalendarCheck></BsCalendarCheck>
                      </p>{" "}
                      <p className=" m-0  me-3">{item.year}</p>
                      <p className="m-0 p-0">
                        <GiEarthAmerica></GiEarthAmerica>{" "}
                      </p>{" "}
                      <p className=" me-3 m-0  ">{item.country}</p>
                    </div>{" "}
                    <hr />{" "}
                    <div className="d-flex gap-1  col-11  ">
                      {" "}
                      <p className="m-0 p-0">
                        <FaImdb></FaImdb>
                      </p>
                      <p className="mt-1">{item.imdb_rating}</p>
                      <p className="m-0 p-0">
                        <MdOutlineHowToVote></MdOutlineHowToVote>
                      </p>
                      <p className="mt-1">{item.imdb_votes}</p>
                      <p className="m-0 p-0">
                        <BiTime></BiTime>
                      </p>
                      <p className="mt-1">{item.runtime}</p>
                    </div>{" "}
                    <div className="d-flex flex-column gap-1  col-11  ">
                      {" "}
                      <div className="d-flex gap-2">
                        <p className="m-0 p-0">
                          <MdRecentActors></MdRecentActors>
                        </p>
                        <p className="mt-0 p-0">Actors: </p>
                        <p className="mt-0">{item.actors}</p>
                      </div>
                      <div className="d-flex gap-2">
                        <p className="m-0 p-0">
                          <GiDirectorChair></GiDirectorChair>
                        </p>
                        <p className="m-0 p-0">Director: </p>
                        <p className="mt-0">{item.director}</p>
                      </div>
                      <div className="d-flex gap-2">
                        <p className="m-0 p-0">
                          <BsFillPenFill></BsFillPenFill>
                        </p>
                        <p className="m-0 p-0">Writer: </p>
                        <p className="mt-0">{item.writer}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-12  justify-content-evenly  flex-wrap">
                  {item.images.map((element, id) => {
                    return (
                      <div key={id} className=" col-3">
                        <img src={element} className="w-100" alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
