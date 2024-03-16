import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import TechnologyHome from "@/components/technology/TechnologyHome";
import TechnologySoloHead from "@/components/technology/TechnologySoloHead";

const TechnologyDetail = ({ params }) => {
    const { techId } = params;

    console.log(techId);

    return (
        <div>
            <Navbar />
            <TechnologyHome />
            <TechnologySoloHead techId={techId} />
            <Footer />
        </div>
    );
}

export default TechnologyDetail;
