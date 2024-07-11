import React, { useState, useEffect } from "react";
import ReactIcono from "../img/React-Icono.png";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FiCheck } from "react-icons/fi";
import loadingGif from "../img/loading.gif";

const PlantillasPagWeb = () => {
  const [plantillasW, setPlantillasW] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showCompraModal, setShowCompraModal] = useState(false);
  const [showCapturaDatosModal, setShowCapturaDatosModal] = useState(false);
  const [selectedPlantilla, setSelectedPlantilla] = useState(null);
  const [enviandoMensaje, setEnviandoMensaje] = useState(false); // Estado para controlar el envío del formulario

  useEffect(() => {
    const fetchPlantillasWeb = async () => {
      try {
        const url =
          "https://raw.githubusercontent.com/EdgarBastidas/db_plantillas-web/main/web.json";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }

        const data = await response.json();
        setPlantillasW(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPlantillasWeb();
  }, []);

  const handleOpenModal = (plantilla) => {
    setSelectedPlantilla(plantilla);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlantilla(null);
  };

  const handleOpenCompraModal = () => {
    setShowCompraModal(true);
    setShowModal(false); // Cerrar el primer modal al abrir el segundo
  };

  const handleCloseCompraModal = () => {
    setShowCompraModal(false);
    setSelectedPlantilla(null);
    setShowModal(true); // Volver a abrir el primer modal al cerrar el segundo
  };

  const handleSubmitDatosCliente = async (event) => {
    try {
      // Mostrar indicador visual de carga y bloquear la página
      setEnviandoMensaje(true);

      // Aquí iría la lógica real para enviar el formulario al servidor
      await fetch("https://formsubmit.co/edgarbastidas079@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plantilla: selectedPlantilla.name,
          nombre: event.target.nombre.value,
          telefono: event.target.telefono.value,
          email: event.target.email.value,
        }),
      });

      // Mostrar un mensaje o realizar otras acciones después de enviar el formulario
      alert(
        "¡Muchas gracias por tu compra!, Estamos preparando tu plantilla para enviarla a tu correo."
      );

      // Cerrar modal y mostrar siguiente modal si es necesario
      setShowCapturaDatosModal(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Manejar errores si es necesario
    } finally {
      // Ocultar el indicador visual y permitir interacciones nuevamente
      setEnviandoMensaje(false);
    }
  };

  return (
    <>
      <div className="p-6 sm:pt-8 sm:p-14 text-center">
        <div className="flex flex-row gap-3 justify-center items-center">
          <span className="bg-fucsia h-1 w-14 text-transparent rounded-full">
            1
          </span>
          <span className="text-[2.5vh] sm:text-2xl font-semibold">
            Plantillas  Web
          </span>
          <span className="bg-fucsia h-1 w-14 text-transparent rounded-full">
            1
          </span>
        </div>

        <div className="pt-4 flex flex-wrap gap-8">
          {plantillasW.map((plantilla) => (
            <div
              key={plantilla.id}
              className="w-full sm:w-[30%] hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                className="rounded-tr-3xl rounded-tl-3xl w-full object-cover"
                src={plantilla.image}
                alt={plantilla.name}
              />

              <div className="shadow-lg border border-gray-400 rounded-br-3xl rounded-bl-3xl">
                <div className="flex flex-row justify-between gap-2 items-center p-2">
                  <img src={ReactIcono} className="w-[6%]" alt="React Icono" />
                  <h5 className="text-base font-semibold text-gray-900">
                    {plantilla.name}
                  </h5>
                  <h1 className="font-bold text-xl text-fucsia">
                    $ {plantilla.price}
                  </h1>
                </div>
                <div className="flex items-center justify-center pb-3">
                  <button className="border rounded-md border-fucsia w-full text-fucsia bg-white sm:hover:bg-fucsia sm:hover:text-white flex flex-row justify-center items-center text-base p-1 ml-4 mr-4">
                    <a
                      href={plantilla.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <span className="">Ver Demo en línea</span>
                    </a>
                  </button>
                </div>
                <div className="flex items-center justify-center pb-3">
                  <button
                    onClick={() => handleOpenModal(plantilla)}
                    className="border rounded-md border-fondo w-full text-fondo bg-white sm:hover:text-white sm:hover:bg-fondo flex flex-row justify-center items-center text-base p-1 ml-4 mr-4"
                  >
                    <span className="">Detalles</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Primer Modal */}
      {showModal && selectedPlantilla && (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-700 bg-opacity-80 z-50">
          <div className="bg-white p-8 sm:p-8 sm:mx-[20%] rounded-lg shadow-lg">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col sm:flex-row gap-1">
                <div className="flex flex-col items-center justify-center sm:pr-4 mb-4 sm:mb-0">
                  <img
                    className="w-full sm:w-96 rounded-xl"
                    src={selectedPlantilla.image}
                    alt={selectedPlantilla.name}
                  />
                </div>
                <div className="border flex flex-col rounded-lg">
                  <div className="mx-2 flex flex-row gap-2 justify-between items-center">
                    <h1 className="text-xl text-center font-semibold">
                      {selectedPlantilla.name}
                    </h1>

                    <h1 className="font-bold text-fucsia text-2xl">
                      ${selectedPlantilla.price}
                    </h1>
                  </div>

                  <div className="flex flex-col p-2 mt-4">
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <FiCheck className="text-xl text-lime-600" />
                      <h1 className="text-md font-semibold">Responsive</h1>
                    </div>

                    <div className="flex flex-row gap-2 items-center justify-start">
                      <FiCheck className="text-xl text-lime-600" />
                      <h1 className="text-md font-semibold">
                        Diseño elegante.
                      </h1>
                    </div>

                    <div className="flex flex-row gap-2 items-center justify-start">
                      <FiCheck className="text-xl text-lime-600" />
                      <h1 className="text-md font-semibold">Personalizable.</h1>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <FiCheck className="text-xl text-lime-600" />
                      <h1 className="text-md font-semibold">
                        Compra 100% segura.
                      </h1>
                    </div>

                    <div className="mt-4 mb-4">
                      <button
                        onClick={handleOpenCompraModal}
                        className="border rounded-md border-fondo w-full text-white bg-fondo  text-base p-2"
                      >
                        Comprar
                      </button>
                    </div>

                    <button
                      onClick={handleCloseModal}
                      className="bg-fucsia text-white py-2 px-4 rounded-md"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Segundo Modal (Compra) */}
      {showCompraModal && selectedPlantilla && (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-700 bg-opacity-80 z-50">
          <div className="bg-white p-4 sm:p-8 sm:mx-[10%] rounded-lg shadow-lg">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">
              Completar datos de la compra
            </h1>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
              <div className="w-full border flex flex-col p-2 rounded-lg">
                <h1 className="font-bold text-gray-700">
                  Detalles de la plantilla.
                </h1>

                <div className="flex flex-row gap-5 justify-between items-center mt-2">
                  <p>{selectedPlantilla.name}.</p>
                  <p>${selectedPlantilla.price}.00</p>
                </div>

                <div className="flex flex-row gap-5 justify-between items-center mt-2">
                  <p>Tasa de tramitación.</p>
                  <p>$ 0.00</p>
                </div>

                <div className="mt-4 font-bold text-xl flex flex-row gap-5 justify-between items-center">
                  <p className="">Total:</p>
                  <p>US$ {selectedPlantilla.price}.00</p>
                </div>

                <div className="mt-6 text-center font-semibold mb-2">
                  Finalizar compra
                </div>

                <div className="my-1">
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "Ad9wWUy6t5EYND89rlzTi85deUeKZhU0yOpimfwXo2VmPt1qAUWnmW51O371WJa8ndBravmSdkhlCN-F",
                      currency: "USD",
                    }}
                  >
                    <PayPalButtons
                      style={{ layout: "horizontal" }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: selectedPlantilla.price,
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                          alert("Pago completado correctamente");
                          setShowCompraModal(false); // Cerrar el modal de compra
                          setShowCapturaDatosModal(true); // Mostrar el modal para capturar datos del cliente
                          // Aquí puedes agregar la lógica para entregar el producto al cliente
                        });
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-end">
              <button
                onClick={handleCloseCompraModal}
                className="bg-fucsia text-white py-2 px-4 rounded-md"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tercer Modal (Captura de Datos del Cliente) */}
      {showCapturaDatosModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-700 bg-opacity-80 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h1 className="text-xl sm:text-xl text-gray-700 font-semibold mb-4">
              Su pago ha sido recibido..
            </h1>

            <p className="font-semibold text-gray-700 mb-2">
              Complete sus datos para enviar la plantilla.
            </p>

            <div className="">
              <div className="border rounded-lg p-2">
                <form
                  action="https://formsubmit.co/edgarbastidas079@gmail.com"
                  method="POST"
                  onSubmit={handleSubmitDatosCliente}
                >
                  <div className="">
                    <input
                      name="plantilla"
                      className="outline-none select-none text-transparent"
                      type="text"
                      value={selectedPlantilla.name}
                      readOnly
                    />
                    <div className="-mt-6">
                      <label
                        htmlFor="nombre"
                        className="text-sm inline font-medium text-gray-700"
                      >
                        <span className="text-red-700 font-bold">* </span>
                        Nombre:
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="border outline-none border-gray-300 rounded-md py-2 px-2 w-full"
                        placeholder="Ingrese su nombre"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="telefono"
                      className="text-sm inline font-medium text-gray-700"
                    >
                      <span className="text-red-700 font-bold">* </span>
                      Teléfono:
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      id="telefono"
                      className="border outline-none border-gray-300 rounded-md py-2 px-2 w-full"
                      placeholder="Ingrese su numero de telefono"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="email"
                      className="text-sm inline font-medium text-gray-700"
                    >
                      <span className="text-red-700 font-bold">* </span>
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border outline-none border-gray-300 rounded-md py-2 px-2 w-full"
                      placeholder="Ingrese email"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-center pt-6 mb-4">
                    <input
                      className="bg-fondo text-white rounded-md px-2 py-2 cursor-pointer"
                      type="submit"
                      value="Enviar y Finalizar"
                    />
                  </div>

                  <input
                    type="hidden"
                    name="_next"
                    value="https://edgarbastidas.github.io/plantillas-web/"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                </form>
              </div>
              <p className="text-red-700 font-semibold text-center">
                Nota:{" "}
                <span className="text-black font-normal text-base">
                  Por favor verifique muy bien sus datos antes de enviar.
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Indicador de Carga */}
      {enviandoMensaje && (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-700 bg-opacity-80 z-50">
          <div className="bg-white p-4 sm:p-8 sm:mx-[10%] rounded-lg shadow-lg">
            <img
              src={loadingGif}
              alt="Cargando..."
              className="w-20 h-20 animate-spin"
            />
            <p className="text-center mt-4">Enviando datos...</p>
            <p className="text-center mt-4">Cargando plantilla...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PlantillasPagWeb;
