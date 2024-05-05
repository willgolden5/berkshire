import React from "react";
import { RefObject } from "react";

interface NavbarProps {
  projectsRef: RefObject<HTMLElement>;
  homeRef: RefObject<HTMLElement>;
}

const Navbar = ({ projectsRef, homeRef }: NavbarProps) => {
  const handleAboutClick = () => {
    if (projectsRef.current) {
      const elementRect = projectsRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const middle =
        absoluteElementTop -
        window.innerHeight / 2 +
        elementRect.height / 2 -
        60;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    if (homeRef.current) {
      const elementRect = homeRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.screenY;
      const middle =
        absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bg-white left-0 top-0 z-10 mx-auto flex h-18 w-full items-center border-primary border-b-2 px-5 m500:h-16">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between p-1">
        <a className=" w-20 cursor-pointer" onClick={handleHomeClick}>
          <img src="./static/logo.png" />
        </a>
        <div className="flex space-x-8 px-8">
          <p
            onClick={handleHomeClick}
            className="flex items-center justify-center hover:animate-wiggle hover:text-secondary text-xl m500:text-xl cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={handleAboutClick}
            className="flex items-center justify-center hover:animate-wiggle hover:text-secondary text-xl m500:text-xl cursor-pointer"
          >
            About
          </p>
          <p
            onClick={handleAboutClick}
            className="flex items-center justify-center hover:animate-wiggle hover:text-secondary text-xl m500:text-xl cursor-pointer"
          >
            Contact
          </p>
          <p className="flex items-center justify-center hover:animate-wiggle hover:text-secondary text-xl m500:text-xl cursor-pointer">
            <a href="https://fundly.com/the-berkshire-project">Donate</a>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
