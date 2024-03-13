'use client'

import AllApplications from "@/components/application/AllApplication";
import ApplicationHome from "@/components/application/ApplicationHome";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Applications = () => {
    const isLight = useSelector((state) => state.colorCode.isLight);

    return (
        <Box bgColor={`${isLight ? '' : '#464544'}`}>
            <Navbar />
            <ApplicationHome />
            <AllApplications />
            <Footer />
        </Box>
    );
}

export default Applications;