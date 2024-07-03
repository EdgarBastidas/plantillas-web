import React from "react";
import { useRef } from "react";
import logo from "../img/log.png";
//icons
import { CiLocationOn } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { CiMail, CiPhone } from "react-icons/ci";
//iconos de react
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  const refFooter = useRef(null);
  return (
    <div className="bg-fondo pt-5 text-white">
      <div className="flex flex-row gap-3 justify-center items-center">
        <span className="bg-fucsia h-1 w-14 text-transparent rounded-full">
          1
        </span>
        <span className="text-[2.5vh] sm:text-2xl font-semibold">Contacto</span>
        <span className="bg-fucsia h-1 w-14 text-transparent rounded-full">
          1
        </span>
      </div>

      <div className="ml-3 sm:ml-[25%] mr-3 sm:mr-[25%] justify-center">
       
        <div className="">
           
          <p className="pt-2 text-[15px] pl-5 pr-5 sm:text-base font-normal text-center">
          Por favor dejanos un mensaje y con gusto nos ponemos en contacto
          contigo.
          </p>
          <form action="">
            <div className="flex flex-row gap-2 mt-3 text-center">
               
              <input
                className="border shadow-sm border-fondo1 shadow-gray-200  focus:border-rose-600 w-full px-3 py-2 rounded-lg 
                      focus:outline-none"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <textarea
                className="mt-4 border shadow-sm border-fondo1 shadow-gray-200  focus:border-rose-600 w-full px-3 py-2 rounded-lg 
                      focus:outline-none"
                name="mensaje"
                id=""
                placeholder="mensaje"
                rows={4}
                required
              ></textarea>
            </div>
          </form>
          <button className="bg-fucsia rounded-lg p-2 w-28 text-md sm:text-xl text-white cursor-pointer mt-2">
            Enviar
          </button>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col text-white gap-2  items-center justify-items-center bg-fondo1 mt-14 p-4">
         

        <div className="flex gap-6 -mt-10 text-2xl text-white ml-3 sm:ml-0 sm:text-2xl cursor-pointer">
          <FaLinkedinIn />
          <FaFacebookF className="" />
          <FaInstagram />
          <FaTelegramPlane />
        </div>
        <p className="text-[15px] sm:text-md">
          © Copyright 2024 todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
