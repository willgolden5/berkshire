import React, { RefObject } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Navbar = ({
  projectsRef,
  homeRef,
}: {
  projectsRef: RefObject<HTMLElement>;
  homeRef: RefObject<HTMLElement>;
}) => {
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
    }
  };

  const handleHomeClick = () => {
    if (homeRef.current) {
      const elementRect = homeRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle =
        absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bg-white left-0 top-0 z-10 mx-auto flex h-18 w-full items-center border-primary border-b-2 px-5 m500:h-16">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between p-1">
        <a className="w-20 cursor-pointer" onClick={handleHomeClick}>
          <img src={imageUrl} alt="Navigation Bar Logo" />
        </a>
        <div className="md:flex hidden space-x-8 px-8">
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
    </nav>
  );
};

export default Navbar;
