import { ItemNavBar } from "./ItemBar";

export const ItemsBar = ({ id = "", isMenuOpen = false }) => {
  return (
    <div
      id={id}
      className={`items-center justify-end w-full md:flex md:w-auto md:order-1 pr-5 ${
        isMenuOpen ? "block" : "hidden"
      } animate__animated animate__fadeInDown animate__faster`}
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <ItemNavBar name="Inicio" href="/" />
        <ItemNavBar name="Sobre Nosotros" href="#about-us" />
        <ItemNavBar name="Servicios" href="#services" />
        <ItemNavBar name="Beneficios" href="#benefits" />
      </ul>
    </div>
  );
};
