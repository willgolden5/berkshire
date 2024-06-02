import { graphql, useStaticQuery } from "gatsby";
import React, { RefObject, forwardRef } from "react";

interface HeroProps {
  projectsRef: RefObject<HTMLElement>;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ projectsRef }, ref) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHeroSection {
        nodes {
          title
          subtitle
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  `);

  const handleAboutClick = () => {
    if (projectsRef && projectsRef.current) {
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

  return (
    <div
      ref={ref}
      className="flex flex-col h-screen w-full items-center justify-center animate-fadeIn"
    >
      <div className="flex flex-col md:flex-row items-center align-middle md:w-[940px]">
        <div className="flex align-middle items-center p-6 w-full">
          <div className="w-full lg:w-1/2">
            <h3 className="text-5xl text-primary font-bold pb-[.3em] hover:text-secondary ">
              {data.allContentfulHeroSection.nodes[0].title}
            </h3>
            <h1 className="font-light text-black text-xl pb-[16px]">
              {data.allContentfulHeroSection.nodes[0].subtitle}
            </h1>
            <div className="flex w-full space-x-2">
              <a
                href="https://fundly.com/the-berkshire-project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="bg-primary hover:bg-secondary hover:animate-wiggle text-white px-4 w-full py-2 rounded-lg">
                  Donate
                </button>
              </a>
              <button
                onClick={handleAboutClick}
                className="bg-secondary hover:bg-primary text-white w-2/3 px-4 py-2 rounded-lg"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="ml-auto w-[400px] hidden md:block animate-slideIn">
            <img
              src={data.allContentfulHeroSection.nodes[0].image.file.url}
              alt="berkshire logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
export default Hero;
