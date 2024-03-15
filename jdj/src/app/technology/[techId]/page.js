import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import TechnologySolo from "@/components/technology/TechnologySolo";
import TechnologySoloHead from "@/components/technology/TechnologySoloHead";
import { tech_list } from "@/utils/Constant";

const TechnologyDetail = ({ params }) => {
    const { techId } = params;

    console.log(techId);
    
    return (
        <div>
            <Navbar />
            <TechnologySolo techId={techId}/>
            <TechnologySoloHead techId={techId}/>
            <Footer />
        </div>
    );
}

export default TechnologyDetail;
