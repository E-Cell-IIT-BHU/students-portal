import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    poster: "/Ecell-logo.jpg",
    title: "Service 1",
    knowMore: "#",
    register: "#",
  },
  {
    poster: "/Ecell-logo.jpg",
    title: "Service 1",
    knowMore: "#",
    register: "#",
  },
  {
    poster: "/Ecell-logo.jpg",
    title: "Service 1",
    knowMore: "#",
    register: "#",
  },
  {
    poster: "/Ecell-logo.jpg",
    title: "Service 1",
    knowMore: "#",
    register: "#",
  },
];

type ServiceProps = {
  poster: string;
  title: string;
  knowMore: string;
  register: string;
};

const Service = ({ poster, knowMore, title, register }: ServiceProps) => {
  console.log(register);
  return (
    <div className="max-w-sm rounded shadow shadow-gray-400 p-8 m-4">
      <Image
        className="w-full"
        src={poster}
        alt="poster"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
      />
      <div className="font-bold text-2xl my-6 text-center">{title}</div>
      <div className="flex flex-row justify-center align-center space-x-6">
        <Link href={register}>
          <button className="bg-green-500 border-green h-fit w-fit text-white py-2 px-4 rounded-md text-xl">
            Register Now!
          </button>
        </Link>
        <Link href={knowMore}>
          <button className="bg-orange-500 border-orange h-fit w-fit text-white py-2 px-4 rounded-md text-xl">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

const StartupServices: NextPage = () => {
  return (
    <div className="m-10">
      <h1 className="text-center text-6xl text-extrabold mb-10">
        Startup Services Programme
      </h1>
      <div className="flex flex-wrap justify-center align-center">
        {services.map((service, id) => {
          return (
            <Service
              key={id}
              poster={service.poster}
              knowMore={service.knowMore}
              register={service.register}
              title={service.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StartupServices;
