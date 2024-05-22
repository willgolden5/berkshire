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
          subtitle
          text {
            raw
          }
        }
      }
    }
  `);

  const aboutSectionText = data.allContentfulAboutSection.nodes[0];

  console.log(data.allContentfulAboutSection.nodes);

  const imageLinks = data.allContentfulAsset.nodes
    .filter(
      (node: { file: { url: string } }) =>
        !node.file.url.includes("3ICHVIVe8mmjHfDezjWAQt")
    )
    .map(
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
      <div className="flex flex-col-reverse md:flex-row items-center align-middle justify-center w-[340px] md:w-[940px]">
        <div className="flex flex-col mr-auto pr-4">
          <h1 className=" font-bold text-primary hover:text-secondary text-5xl pb-4">
            {data.allContentfulAboutSection.nodes[0].title}
          </h1>
          <h3 className=" font-bold text-primary hover:text-secondary text-lg pb-4">
            {data.allContentfulAboutSection.nodes[0].subtitle}
          </h3>
          <div className="text-sm">
            <p className="font-light w-150px pb-2">
              {documentToReactComponents(JSON.parse(aboutSectionText.text.raw))}
            </p>
          </div>
          <div className="w-full pt-6">
            <button className="bg-primary hover:bg-secondary hover:animate-wiggle text-white px-4 py-2 rounded-lg w-full">
              Donate
            </button>
          </div>
        </div>
        <div className="md:pl-4 ml-auto w-full pb-12 md:pb-0 md:w-2/3">
          <Slider {...settings}>
            {imageLinks.map((obj: { link: string; title: string }) => (
              <div className="h-[300px] md:h-[400px] overflow-hidden">
                <img
                  src={obj.link}
                  className="w-full h-full object-cover px-1"
                  alt={obj.title}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
});
export default About;
