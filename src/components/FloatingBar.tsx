import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const FloatingBar = () => {
  return (
    <div className="hidden fixed top-20 right-10 z-20 md:flex flex-col items-center space-y-6 p-2">
      <a
        href="https://www.instagram.com/theberkshireproject2023/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          className="hover:text-secondary transition duration-300"
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
          className="hover:text-secondary transition duration-300"
        />
      </a>
      <a
        href="https://www.facebook.com/theberkshireproject2023"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          className="hover:text-secondary transition duration-300"
        />
      </a>
    </div>
  );
};

export default FloatingBar;
