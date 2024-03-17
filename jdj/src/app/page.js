import Navbar from "@/components/navbar/Navbar";
import MyHome from "@/components/home/Home";
import Footer from "@/components/footer/Footer";
import AboutUs from "@/components/about-us/AboutUs";
import ConnectWithUs from "@/components/home/ConnectWithUs";

export default function Home() {
  return <>
    <Navbar />
    <MyHome />
    <AboutUs />
    <ConnectWithUs />
    <Footer />
  </>
}
