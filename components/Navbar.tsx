import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    else if (pathname === "/projects") setActiveItem("Projects");
    else if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  const NavItem: FunctionComponent<{
    activeItem: string;
    name: string;
    route: string;
    setActiveItem: Function;
  }> = ({ activeItem, name, route, setActiveItem }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <span
          onClick={() => setActiveItem(name)}
          className="mx-2 cursor-pointer hover:border-b-4 hover:text-green"
        >
          {name}
        </span>
      </Link>
    ) : null;
  };

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-green">
        {activeItem}
      </span>
      <div className="flex space-x-3 text-red-400 font-lg">
        <NavItem
          activeItem={activeItem}
          name="About"
          route="/"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Projects"
          route="/projects"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Resume"
          route="/resume"
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
};

export default Navbar;
