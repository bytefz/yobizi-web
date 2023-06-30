import NextImage from "next/image";

export const Benefits = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 id="benefits" className="mb-10 text-white text-lg md:text-4xl">
        Beneficios
      </h2>
      <div className="flex flex-col xl:flex-row">
        <CardBenefit
          description="En YOBIZI vas a poder encontrar el trabajador calificado perfecto para lo que necesites."
          primaryBgColor="#234A60"
          secondaryBgColor="#15252C"
          iconAsset="/icons/beneficio1.png"
        />
        <CardBenefit
          description="Aseguramos tu dinero al 100% hasta terminar el trabajo."
          primaryBgColor="#252E2F"
          secondaryBgColor="#415D69"
          isReversed
          iconAsset="/icons/beneficio2.png"
        />
        <CardBenefit
          description="Como trabajador vas a poder propulsar tu carrera teniendo contacto con múltiples clientes."
          primaryBgColor="#2A6D7B"
          secondaryBgColor="#12475E"
          iconAsset="/icons/beneficio3.png"
        />
      </div>
    </section>
  );
};

const CardBenefit = ({
  description = "",
  iconAsset = "",
  primaryBgColor = "#ccc",
  secondaryBgColor = "#000",
  isReversed = false,
}) => {
  if (isReversed) {
    return (
      <div
        className="flex flex-col my-5 mx-5 items-center py-14 rounded-3xl"
        style={{
          backgroundColor: primaryBgColor,
        }}
      >
        <NextImage
          src={iconAsset}
          width={300}
          height={300}
          className="w-48 md:w-80"
        />
        <div className="my-14" />
        <div
          className="text-center rounded-3xl text-white 2xl:w-96 lg:w-80 h-44 p-8 text-lg md:text-2xl mx-8"
          style={{
            backgroundColor: secondaryBgColor,
          }}
        >
          {description}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col my-5 mx-5 items-center py-14 rounded-3xl"
      style={{
        backgroundColor: primaryBgColor,
      }}
    >
      <div
        className="text-center rounded-3xl text-white 2xl:w-96 lg:w-80 h-44 p-8 text-lg md:text-2xl mx-8"
        style={{
          backgroundColor: secondaryBgColor,
        }}
      >
        {description}
      </div>
      <div className="my-14" />
      <NextImage
        src={iconAsset}
        width={300}
        height={300}
        className="w-48 md:w-80"
      />
    </div>
  );
};
