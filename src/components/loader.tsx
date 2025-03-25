"use client";
import React from "react";
import Loaderstyle from "@/styles/loader.module.css";

export default function Loadercomponent() {
  return (
    <div
      className={`text-green-300 dark:text-green-600 ${Loaderstyle.loader}`}
    />
  );
}
