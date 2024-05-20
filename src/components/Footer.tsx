import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 bg-white text-center p-4 w-full flex flex-col">
      <div className="flex space-x-8 mr-auto ml-auto pb-2">
        <a
          href="https://www.instagram.com/theberkshireproject2023/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="text-gray-700 hover:text-secondary transition duration-300"
          />
        </a>
        <a
          href="https://venmo.com/theberkshireproject"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faCreditCard}
            size="2x"
            className="text-gray-700 hover:text-secondary transition duration-300"
          />
        </a>
        <a
          href="https://www.facebook.com/theberkshireproject2023"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className="text-gray-700 hover:text-secondary transition duration-300"
          />
        </a>
      </div>
      <p>© 2024 The Berkshire Project, an independent 501c3.</p>
    </footer>
  );
};

export default Footer;
