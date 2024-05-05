import React, { useRef } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

const IndexPage: React.FC<PageProps> = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  return (
    <main>
      <div className="flex flex-col w-full justify-start scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-primary scrollbar-thumb:!rounded scrollbar-thumb:!bg-primary scrollbar-track:!rounded bg-white scroll-primary">
        <Navbar homeRef={homeRef} projectsRef={aboutRef} />
        <Hero ref={homeRef} />
        <About ref={aboutRef} />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
