"use client"
import { useState } from "react";

export const useParallax=()=>{
    const [scrollY, setScrollY]= useState(0);

    useState(()=>{
       const handleScroll = () => setScrollY(window.scrollY)

        window.addEventListener("scroll", handleScroll );

        return () => window.removeEventListener("scroll", handleScroll );


    },[])
    return scrollY;
};
export default useParallax;