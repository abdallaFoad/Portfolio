import Image from "next/image";
import imgPortfolio from "../public/images/portfolio.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={{ width: "100%" }}>
      <div className=" mx-auto  " style={{ width: "90%" }}>
        <Image
          width="130"
          height="130"
          src={imgPortfolio}
          quality="100"
          alt="imagePortfolio"
          style={{ width: "100%", height: "100%", margin: "0 auto" }}
          className="rounded-full"
          layout="intrinsic-fit"
        />
      </div>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
        <span className="text-green-500">Abdalla</span> Foad
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">
        Front-end Developer
      </p>
      <a
        href="/assets/Abdullah Fouad Ibrahim.pdf"
        className=" px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex items-center justify-center text-lg md:text-sm"
        download="Abdullah Fouad Ibrahim.pdf"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/*social icons*/}
      <div className="social flex justify-around my-5 mx-auto text-green-500 w-9/12 md:w-full ">
        <a
          href="https://github.com/abdallaFoad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="w-8 h-8 hover:text-dark dark:hover:text-github transition-all duration-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdofoad1179674/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 hover:text-linkedin transition-all duration-500" />
        </a>
        <a
          href="https://www.facebook.com/abdalla.foad.50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookFill className="w-8 h-8 hover:text-facebook transition-all duration-500" />
        </a>
      </div>
      {/*address*/}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-.5rem", marginRight: "-.5rem" }}
      >
        <div className="flex justify-center items-center gap-3">
          <GoLocation />
          <span>Zagazig,Egypt</span>
        </div>
        <p className="my-2 text-lg md:text-sm sm:text-sm">
          foadabdalla314@gmail.com
        </p>
        <p className="my-2 text-lg md:text-sm sm:text-sm">
          01144704339 / 01033556097
        </p>
      </div>

      {/*email*/}
      <div className="flex items-center justify-center flex-col">
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-300 to-blue-400 "
          onClick={() => window.open("mailto:foadabdalla314@gmail.com")}
        >
          Email Me
        </button>
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-300 to-blue-400  md:text-sm sm:px-1"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
