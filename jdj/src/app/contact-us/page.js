import ContactHome from "@/components/contactUs/ContactHome";
import ContactUs from "@/components/contactUs/ContactUs";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";

const ContactPage = () => {
    return (
        <Box>
            <Navbar />
            <ContactHome />
            <ContactUs />
            <Footer />
        </Box>
    );
}

export default ContactPage;