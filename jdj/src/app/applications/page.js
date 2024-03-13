import AllApplications from "@/components/application/AllApplication";
import ApplicationHome from "@/components/application/ApplicationHome";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";

const Applications = () => {
    return (
        <Box>
            <Navbar />
            <ApplicationHome />
            <AllApplications />
            <Footer />
        </Box>
    );
}

export default Applications;