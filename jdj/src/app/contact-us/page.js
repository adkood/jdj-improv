'use client';

import ContactHome from "@/components/contactUs/ContactHome";
import ContactUs from "@/components/contactUs/ContactUs";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ContactPage = () => {
    const isLight = useSelector((state) => state.colorCode.isLight);
    return (
        <Box bgColor={`${isLight ? '#e9eef5' : '#464544'}`}>
            <Navbar />
            <ContactHome />
            <ContactUs />
            <Footer />
        </Box>
    );
}

export default ContactPage;