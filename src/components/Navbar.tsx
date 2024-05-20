import React, { RefObject, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  projectsRef: RefObject<HTMLElement>;
  homeRef: RefObject<HTMLElement>;
}

const Navbar = ({ projectsRef, homeRef }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(contentful_id: { eq: "3ICHVIVe8mmjHfDezjWAQt" }) {
        file {
          url
        }
      }
    }
  `);

  const imageUrl = data.contentfulAsset.file.url;

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
      setIsMobileMenuOpen(false);
    }
  };

  const handleHomeClick = () => {
    if (homeRef.current) {
      const elementRect = homeRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle =
        absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;
      window.scrollTo({ top: middle, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed bg-white left-0 top-0 z-10 w-full border-b-2 border-primary">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between p-5">
        <a className="w-20 cursor-pointer" onClick={handleHomeClick}>
          <img src={imageUrl} alt="Navigation Bar Logo" />
        </a>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl">
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className="hidden md:flex space-x-8 px-8">
          <p
            onClick={handleHomeClick}
            className="cursor-pointer hover:text-secondary text-xl"
          >
            Home
          </p>
          <p
            onClick={handleAboutClick}
            className="cursor-pointer hover:text-secondary text-xl"
          >
            About
          </p>
          <a
            href="mailto:theberkshireproject2020@gmail.com/?subject=Hello%20Berkshire%20Team!"
            className="cursor-pointer hover:text-secondary text-xl"
          >
            Contact
          </a>
          <p className="cursor-pointer hover:text-secondary text-xl">
            <a href="https://fundly.com/the-berkshire-project">Donate</a>
          </p>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t-2 border-primary">
          <div className="flex flex-col items-start p-5 space-y-4">
            <p
              onClick={handleHomeClick}
              className="cursor-pointer hover:text-secondary text-xl"
            >
              Home
            </p>
            <p
              onClick={handleAboutClick}
              className="cursor-pointer hover:text-secondary text-xl"
            >
              About
            </p>
            <a
              href="mailto:theberkshireproject2020@gmail.com/?subject=Hello%20Berkshire%20Team!"
              className="cursor-pointer hover:text-secondary text-xl"
            >
              Contact
            </a>
            <p className="cursor-pointer hover:text-secondary text-xl">
              <a href="https://fundly.com/the-berkshire-project">Donate</a>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
