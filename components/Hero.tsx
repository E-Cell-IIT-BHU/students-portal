import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row w-100 h-screen justify-center space-y-10 sm: space-x-10 items-center mx-10">
      <div className="flex flex-1 flex-col justify-center space-y-10">
        <div className="text-5xl font-extrabold mb-10">
          E-CELL IIT BHU
          <br />
          <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            STUDENT PORTAL!!
          </h1>
        </div>
        <div className="text-3xl font-bold">
          This portal is a
          <b className="rounded-md bg-gradient-to-r from-orange-400 to-red-600">
            one stop solution
          </b>
          to all of the requirements to enhance your{" "}
          <b className="font-bold">entrepreneurial mindset</b> and build a{" "}
          <b className="font-bold">startup!</b>
        </div>
        <div>
          <button
            className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Explore
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center align-center ">
        <iframe
          className="block"
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/PSEKcZQINvM"
          title="Why join E-Cell?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
