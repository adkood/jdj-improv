'use client';

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import TechnologyHome from "@/components/technology/TechnologyHome";
import TechnologySoloHead from "@/components/technology/TechnologySoloHead";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const TechnologyDetail = ({ params }) => {
    const isLight = useSelector((state) => state.colorCode.isLight);
    const { techId } = params;

    console.log(techId);

    return (
        <Box bgColor={`${isLight ? '' : '#464544'}`}>
            <Navbar />
            <TechnologyHome />
            <TechnologySoloHead techId={techId} />
            <Footer />
        </Box>
    );
}

export default TechnologyDetail;
