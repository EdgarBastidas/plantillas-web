import React from 'react';
import { useRef } from 'react';
//imagenes de proyectos
//iconos
import { IoEyeOutline } from "react-icons/io5";
import p1free from "../img/P1M.png";
import p2free from "../img/P2M.png";
import p3free from "../img/P3M.png";
import p4free from "../img/P4M.png";

const PlantillasPagWeb = () => {
  const plantillas_web = [
    { id: 1,name: "Gym Monster", image: p1free, url: "https://github.com/daredilson/HOTEL-SANTANA/"},
    { id: 2, name: "Naturaleza", image: p2free, url: "https://github.com/daredilson/HOTEL-SANTANA/"},
    { id: 3, name: "Gym Cool", image: p3free, url: "https://github.com/daredilson/HOTEL-SANTANA/"},
    { id: 4, name: "Eccomerce flat", image: p4free, url: "https://github.com/daredilson/HOTEL-SANTANA/" },
  ];
  return (
    <>
      <div className="p-6 sm:pt-8 sm:p-14 text-center">
        <div className="flex flex-row gap-3 justify-center items-center">
          <span className="bg-fucsia h-1 w-14 text-transparent rounded-full">
            1
          </span>
          <span className="text-[2.5vh] sm:text-2xl font-semibold">
            Plantillas Web
          </span>
          <span className="bg-fucsia h-1 w-14 text-transparent rounded-full">
            1
          </span>
        </div>

        {/**cards */}
        <div className="pt-4 flex flex-wrap gap-8">
          {plantillas_web.map((pw) => (
            <div
              key={pw.id}
              className="w-full max-w-sm  border border-fucsia rounded-lg shadow-sm shadow-gray-400 dark:border-gray-700 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <a href={pw.url} target="_blank">
                <img
                  className="p-1 rounded-lg w-full sm:w-70 h-[80%] sm:h-60 "
                  src={pw.image}
                  alt="product image"
                />

                <div className="  flex  flex-row justify-between items-center px-5 pb-3">
                  <h5 className="text-md  sm:text-xl font-semibold  text-gray-900 ">
                    {pw.name}
                  </h5>
                  <button className="pt-2 text-fucsia flex flex-row justify-center items-center gap-2 text-base">
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
export default PlantillasPagWeb;
