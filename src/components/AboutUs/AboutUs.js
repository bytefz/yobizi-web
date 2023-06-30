import NextImage from "next/image";

export const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col items-center space-y-9 md:mx-12"
    >
      <div className="flex flex-col items-center">
        <CardTitleComponent textContent="YOBIZI" color="#35749F" isTitle />
        <CardTitleComponent
          textContent="Somos un grupo de personas dedicadas a dar oportunidades a personas como tú. Te ofrecemos variedad y diversidad."
          color="#153542"
        />
      </div>
      <div className="flex flex-col md:flex-row mt-10 space-y-4 md:space-x-52">
        <div className="flex flex-col items-center md:pt-14">
          <CardTitleComponent
            textContent="Desarrolladores de Software"
            color="#0e153f"
            isTitle
          />
          <div className="flex flex-wrap mt-5 md:space-x-4">
            <EmployeeComponent imageAsset="/employees/d-software2.svg" />
            <EmployeeComponent imageAsset="/employees/d-software.svg" />
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <EmployeeComponent imageAsset="/employees/CEO.svg" />
          <CardTitleComponent textContent="CEO" color="#80828b" isTitle />
        </div>
        <div className="flex flex-col items-center md:pt-10">
          <CardTitleComponent
            textContent="Gerentes de Operaciones"
            color="#12258d"
            isTitle
          />
          <div className="flex flex-wrap mt-5 md:space-x-4">
            <EmployeeComponent imageAsset="/employees/g-operaciones2.svg" />
            <EmployeeComponent imageAsset="/employees/g-operaciones.svg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-64 ">
        <CardTitleComponent
          color="#233CC1"
          textContent="Estamos conformados por desarrolladores y a la vez estudiantes de la Universidad Peruana de Ciencias Aplicadas"
        />
        <CardTitleComponent
          color="#7CADDA"
          textContent="Apasionados en crear oportunidades y fomentar la colaboración entre profesionales independientes y empleadores"
        />
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

const EmployeeComponent = ({
  imageAsset = "",
  nameEmployee = "Employee Name",
}) => {
  if (imageAsset === "" || imageAsset === null) {
    throw new Error("Image asset is required");
  }

  return (
    <NextImage
      src={imageAsset}
      alt={nameEmployee}
      width={150}
      height={150}
      loading="lazy"
    />
  );
};
