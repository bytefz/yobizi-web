import NextImage from "next/image";
import NextLink from "next/link";

export const Hero = () => {
  return (
    <section class=" flex flex-col items-center">
      <div class="py-8 px-4 mx-auto max-w-screen-xl flex flex-col md:flex-row lg:py-16 lg:px-12">
        <div className="text-center items-center">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            ¿Listo para encontrar al mejor talento independiente?
          </h1>
          <p class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Descubre nuestra aplicación hoy mismo
          </p>

          <p className="text-gray-900 dark:text-white md:text-lg lg:text-xl">
            ¡Bienvenido a una nueva experiencia que combina lo servicios de
            trabajo con lo digital!
          </p>

          <button className="">
            <NextLink href="/">
              <button
                type="button"
                className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center mt-3 mr-3 md:mr-0"
              >
                Empieza Ya!
              </button>
            </NextLink>
          </button>
        </div>
        <div className="text-center items-center">
          <NextImage
            src="/header_banner.png"
            width={1000}
            height={1000}
            className="rounded-lg shadow-xl w-full h-full mt-8 md:mt-0"
          />
        </div>
      </div>
      <p className="pb-8 text-white">
        Más de 300,000 personas ya se han registrado.
      </p>
      <div>
        <NextImage src="/users.png" width={200} height={50} />
      </div>
    </section>
  );
};
