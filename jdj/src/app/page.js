'use client';

import Navbar from "@/components/navbar/Navbar";
import MyHome from "@/components/home/Home";
import Footer from "@/components/footer/Footer";
import AboutUs from "@/components/about-us/AboutUs";
import ConnectWithUs from "@/components/home/ConnectWithUs";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Home() {

  const isLight = useSelector((state) => state.colorCode.isLight);

  return <Box bgColor={isLight ? "" : "#464544"}>
    <Navbar />
    <MyHome />
    <AboutUs />
    <ConnectWithUs />
    <Footer />
  </Box>
}
