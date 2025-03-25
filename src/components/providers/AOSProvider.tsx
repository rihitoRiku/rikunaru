"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
  }, []);

  return null;
}
