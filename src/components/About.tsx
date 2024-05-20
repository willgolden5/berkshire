import React, { forwardRef, useEffect } from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const About = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
      }
      allContentfulAboutSection {
        nodes {
          title
          text {
            raw
          }
        }
      }
    }
  `);

  const aboutSectionText = data.allContentfulAboutSection.nodes[0];

  const imageLinks = data.allContentfulAsset.nodes.map(
    (node: { file: { url: string }; title: string; description: string }) => {
      return { link: node.file.url, title: node.title };
    }
  );

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div
      ref={ref}
      className="flex flex-col h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row items-center align-middle justify-center w-[340px] md:w-[940px]">
        <div className="flex flex-col mr-auto pr-4">
          <h1 className=" font-bold text-primary hover:text-secondary text-5xl pb-4">
            {data.allContentfulAboutSection.nodes[0].title}
          </h1>
          <div className="text-sm">
            <p className="font-light w-150px pb-2">
              {documentToReactComponents(JSON.parse(aboutSectionText.text.raw))}
            </p>
          </div>
          <div className="w-full pt-6">
            <button className="bg-primary hover:bg-secondary hover:animate-wiggle text-white px-4 w-1/3 py-2 rounded-lg w-full">
              Donate
            </button>
          </div>
        </div>
        <div className="pl-4 hidden md:block ml-auto w-2/3">
          <Slider {...settings}>
            {imageLinks.map((obj: { link: string; title: string }) => (
              <div className="max-h-[370px]">
                <img src={obj.link} className="h-[370px]" alt={obj.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
});
export default About;
