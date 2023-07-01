import NextImage from "next/image";

export const Services = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage: "url('/unsplash_dIMJWLx1YbE.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="py-10 px-4 md:px-10 lg:px-20 xl:px-40 2xl:px-60 flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className="flex flex-col items-center space-y-5">
          <NextImage src={"/logo-circular.png"} width={100} height={100} />
          <CardTitleComponent
            textContent="Nosotros somos una empresa encargada de brindar servicios trabajo independiente de tipo:"
            color="#15252C"
            isTitle
          />
          <div className="flex flex-col md:flex-row">
            <NextImage src={"/serv-trabajador.png"} width={250} height={200} />
            <p className="text-white text-center text-lg font-bold py-2 px-4 my-2 mx-4 md:mx-0">
              O
            </p>
            <NextImage src={"/serv-empleador.png"} width={250} height={200} />
          </div>
          <CardTitleComponent
            textContent="Conectamos y beneficiamos a los trabajadores independientes con clientes potenciales."
            color="#15252C"
            isTitle
          />
        </div>
      </div>
    </section>
  );
};

const CardTitleComponent = ({
  textContent = "",
  color = "",
  isTitle = false,
}) => {
  let isTextLong = false;

  if (textContent.length > 30) {
    isTextLong = true;
  }

  return (
    <div
      className={`rounded-xl shadow-white shadow-md bg-white ${
        isTextLong ? "max-w-xl" : "w-fit"
      } text-white text-center ${
        isTitle ? "text-2xl" : "text-lg"
      } font-bold py-2 px-4 my-2 mx-4 md:mx-0`}
      style={{
        backgroundColor: color ? color : "#000000",
      }}
    >
      {textContent}
    </div>
  );
};
