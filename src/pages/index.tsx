import React, { useRef } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import FloatingBar from "../components/FloatingBar";

const IndexPage: React.FC<PageProps> = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  return (
    <main>
      <div className="flex flex-col w-full justify-start">
        <Navbar homeRef={homeRef} projectsRef={aboutRef} />
        <FloatingBar />
        <Hero ref={homeRef} projectsRef={aboutRef} />
        <About ref={aboutRef} />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
