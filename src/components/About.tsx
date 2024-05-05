import React, { forwardRef, useEffect } from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    }
  `);

  useEffect(() => {
    console.log(data.allContentfulAsset.nodes);
  }, [data]);

  const imageLinks = data.allContentfulAsset.nodes.map(
    (node: { file: { url: string }; title: string; description: string }) =>
      node.file.url
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
      <div className="flex items-center align-middle justify-center md:w-[940px]">
        <div className="flex flex-col mr-auto pr-4">
          <h1 className=" font-bold text-primary hover:text-secondary text-5xl pb-4">
            Our Mission Statement:
          </h1>
          <div className="text-sm">
            <p className="font-light w-150px pb-2">
              Living with a disability can create barriers to building social
              connections. Help us break down these barriers by joining adult
              individuals of all abilities to spend a life-changing week
              together in the Berkshires.
            </p>

            <p className="font-light pb-2">
              <p className="hover:text-light-green">
                We are entirely funded by private donations,
              </p>{" "}
              allowing us to offer the program to participants free of charge
              with all lodging, meals, and programming included.
            </p>
          </div>
          <div className="w-full pt-6">
            <button className="bg-primary hover:bg-secondary hover:animate-wiggle text-white px-4 w-1/3 py-2 rounded-lg w-full">
              Donate
            </button>
          </div>
        </div>
        <div className="pl-4 ml-auto w-2/3">
          <Slider {...settings}>
            {imageLinks.map((link: string) => (
              <div className="max-h-[370px]">
                <img src={link} className="h-[370px]" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
});
export default About;
