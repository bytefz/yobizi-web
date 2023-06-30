import NextImage from "next/image";

import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer class="rounded-t-lg border-cyan-700">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="flex flex-col space-y-5 sm:space-y-0 md:flex-row mb-6 px-4 py-6 lg:py-8">
          <div>
            <h2 class="mb-6 text-3xl font-semibold text-gray-900 uppercase dark:text-white">
              Yobizi Company
            </h2>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <a href="#" class="underline hover:text-black">
                  Contacto
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="underline hover:text-black">
                  Servicio al Cliente
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="underline hover:text-black">
                  Compañía
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="underline hover:text-black">
                  Términos y Condiciones
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="underline hover:text-black">
                  Servicio de Soporte
                </a>
              </li>
            </ul>
          </div>
          <div className="grow" />
          <div className="flex flex-col">
            <NextImage
              src="/logo_icon.png"
              width={100}
              height={100}
              alt="Yobizi"
            />
            <div className="grow" />
            <p className="text-white font-medium">
              © Todos los derechos reservados.
            </p>
          </div>
          <div className="grow" />
          <div className="flex flex-col">
            <h2 class="mb-6 text-3xl font-semibold text-gray-900 uppercase dark:text-white">
              Redes Sociales
            </h2>
            <p className="text-white font-medium w-52 text-justify mb-4">
              Síguenos en nuestras redes sociales para tener información y ver
              noticias actuales sobre nosotros
            </p>
            <ul class="flex flex-row text-gray-500 dark:text-gray-400 font-medium space-x-4">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <BsFacebook className="w-10 h-10" />
                  <span class="sr-only">Facebook page</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <AiFillTwitterCircle className="w-10 h-10" />
                  <span class="sr-only">Twitter page</span>
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <AiFillLinkedin className="w-10 h-10" />
                  <span class="sr-only">Twitter page</span>
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <AiOutlineInstagram className="w-10 h-10" />
                  <span class="sr-only">Twitter page</span>
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <AiOutlineWhatsApp className="w-10 h-10" />
                  <span class="sr-only">Twitter page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
