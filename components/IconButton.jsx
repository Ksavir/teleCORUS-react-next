"use client"

import React from "react";
import { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconToggler = () => {
  const [icon, setIcon] = useState("faMicrophone");

  const handleClick = () => {
    setIcon((icon === "faMicrophone") ? "faMicrophoneSlash" : "faMicrophone");
  };

  return (
    <div>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={`fa ${icon}`} />
      </button>
    </div>
  );
};

export default IconToggler;

