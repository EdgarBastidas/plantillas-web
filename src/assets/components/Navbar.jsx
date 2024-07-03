import React, { useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logo from "../img/log.png";

const Navbar = () => {
  const [estadoMenu, setEstadoMenu] = useState(false);

  const controlarMenu = () => {
    setEstadoMenu(!estadoMenu);
  };

  return (
    <>
      <div className="w-full fixed z-10">
        <div className="">
          <nav className="bg-fondo p-2 sm:p-4">
            <div className="mx-auto">
              <div className="flex flex-col items-center sm:flex-row ">
                <div className="relative">
                  <img
                    className="object-cover w-[60%] sm:w-[70%] "
                    src={logo}
                    alt=""
                  />
                  <button
                    onClick={controlarMenu}
                    className="z-10 block mr-1 text-white text-3xl sm:hidden absolute top-2 right-2"
                  >
                    {estadoMenu ? <RiCloseFill /> : <RiMenu3Fill />}
                  </button>
                </div>
                <div
                  className={`relative text-md font-normal sm:font-semibold w-full flex flex-col sm:flex-row gap-4 sm:gap-10 justify-start   items-start sm:items-center transition-all duration-300 ease-in-out pl-4 sm:pl-0 pt-6 sm:pt-0 ${
                    estadoMenu ? "" : "hidden"
                  } sm:flex`}
                >
                  {/* Enlaces de navegación */}
                  <ScrollLink
                    onClick={controlarMenu}
                    to="p_login"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={1000}
                    className="cursor-pointer hover:text-fucsia text-white"
                  >
                    Plantillas Login
                  </ScrollLink>

                  <ScrollLink
                    onClick={controlarMenu}
                    to="p_navbar"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={1000}
                    className="cursor-pointer hover:text-fucsia text-white"
                  >
                    Plantillas Navbar
                  </ScrollLink>

                  <ScrollLink
                    onClick={controlarMenu}
                    to="p_pagweb"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={1000}
                    className="cursor-pointer hover:text-fucsia text-white"
                  >
                    Páginas Web
                  </ScrollLink>

                  {/* Enlace externo */}
                  <a
                    href="ponerenlaceapremiun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-fucsia text-white"
                  >
                    Plantillas Premium
                  </a>

                  <ScrollLink
                    onClick={controlarMenu}
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="cursor-pointer hover:text-fucsia text-white"
                  >
                    Contacto
                  </ScrollLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="z-0 bg-fondo2 pb-2">
        <div className="pt-16 sm:pt-[70px] font-bold text-center  text-white">
          <h1 className="pt-2 pl-2 pr-2 sm:pt-6 text-[2.5vh] sm:text-4xl">
            Descarga, personaliza y edita a tu gusto
          </h1>
          <p className="pt-2 text-[15px] pl-5 pr-5 sm:text-base font-normal">
            Explora nuestras plantillas y empieza a construir tu proyecto hoy
            mismo.
          </p>
        </div>
        <div className="text-center mx-auto p-4">
          <span className="font-semibold p-2 bg-gradient-to-r from-fucsia to-fuchsia-950 rounded-tr-full rounded-bl-full  pl-10 pr-10 text-white">
            Empieza Ahora
          </span>
          
        </div>
         
      </div>
    </>
  );
};

export default Navbar;
