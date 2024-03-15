'use client'

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import TechnologyHome from "@/components/technology/TechnologyHome";
import TechnologyAll from "@/components/technology/TechnologyAll";
import SideMessageBox from "@/utils/SideMessageBox";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Technology = () => {
    const isLight = useSelector((state) => state.colorCode.isLight);

    return (
        <Box bgColor={`${isLight ? '' : '#464544'}`}>
            <Navbar />
            <TechnologyHome />
            <TechnologyAll />
            {/* <SideMessageBox /> */}
            <Footer />
        </Box>
    )
}

export default Technology;