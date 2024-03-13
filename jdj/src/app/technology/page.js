import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import TechnologyHome from "@/components/technology/TechnologyHome";
import TechnologySolo from "@/components/technology/TechnologySolo";
import { Box } from "@chakra-ui/react";

const Technology = () => {
    return (
        <Box>
            <Navbar />
            <TechnologyHome />
            <TechnologySolo />
            <Footer />
        </Box>
    )
}

export default Technology;