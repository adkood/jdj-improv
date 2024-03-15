import Navbar from "@/components/navbar/Navbar";
import MyHome from "@/components/home/Home";
import Footer from "@/components/footer/Footer";
import AboutUs from "@/components/about-us/AboutUs";
import SideMessageBox from "@/utils/SideMessageBox";

export default function Home() {
  return <>
    <Navbar />
    <MyHome />
    <AboutUs />
    <SideMessageBox />
    <Footer />
  </>
}
