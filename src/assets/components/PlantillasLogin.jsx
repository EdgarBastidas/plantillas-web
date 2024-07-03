import React from "react";
//iconos
import { IoEyeOutline } from "react-icons/io5";
//imagenes de proyectos
import p1free from "../img/P1M.png";
import p2free from "../img/P2M.png";
import p3free from "../img/P3M.png";
import p4free from "../img/P4M.png";

const PlantillasLogin = () => {
  const plantillas_login = [
    { id: 1,name: "Login UiLover", image: p1free, url: "https://github.com/daredilson/HOTEL-SANTANA/"},
    { id: 2, name: "Login Fitnees", image: p2free, url: "https://github.com/daredilson/HOTEL-SANTANA/"},
    { id: 3, name: "Login Music Studio", image: p3free, url: "https://github.com/daredilson/HOTEL-SANTANA/"},
    { id: 4, name: "Login Astara", image: p4free, url: "https://github.com/daredilson/HOTEL-SANTANA/" },
  ];
  return (
    <>
      <div className="p-6 sm:pt-8 sm:p-14 text-center">
        <div className="flex flex-row gap-3 justify-center items-center">
          <span className="bg-fucsia h-1 w-14 text-transparent rounded-full">
            1
          </span>
          <span className="text-[2.5vh] sm:text-2xl font-semibold">
            Plantillas Login
          </span>
          <span className="bg-fucsia h-1 w-14 text-transparent rounded-full">
            1
          </span>
        </div>

        {/**cards */}
        <div className="pt-4 flex flex-wrap gap-8">
          {plantillas_login.map((pl) => (
            <div
              key={pl.id}
              className="border border-fucsia rounded-lg shadow-sm shadow-gray-400 dark:border-gray-700 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <a href={pl.url} target="_blank">
                <img
                  className="p-1 rounded-lg w-full sm:w-70 h-[80%] sm:h-60 "
                  src={pl.image}
                  alt="product image"
                />

                <div className=" pt-2 flex  flex-row justify-between items-center px-5 pb-3">
                  <h5 className="text-md  sm:text-xl font-semibold  text-gray-900 ">
                    {pl.name}
                  </h5>
                  <button className=" text-fucsia flex flex-row justify-center items-center gap-2 text-base">
                    <IoEyeOutline />
                    <span className="hover:font-semibold">Ver Demo</span>
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/**fin cards */}
      </div>
    </>
  );
};

export default PlantillasLogin;
