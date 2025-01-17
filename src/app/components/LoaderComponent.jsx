import React from "react";
import Loaderstyle from "./../styles/loadercomponent.module.css"

export default function Loadercomponent() {
  return (
    <>
      <div className={`dark:text-green-600 text-green-300 ${Loaderstyle.loader}`}></div>
    </>
  );
}