'use client';

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import AllProducts from "@/components/products/AllProducts";
import ProductHome from "@/components/products/ProductHome";
import ProductBottom from "@/components/products/ProductBottom";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SideMessageBox from "@/utils/SideMessageBox";

export default function Products() {

    const isLight = useSelector((state) => state.colorCode.isLight);

    return <Box bgColor={`${isLight ? '#e9eef5' : '#464544'}`}>
        <Navbar />
        <ProductHome />
        <AllProducts />
        <ProductBottom />
        {/* <SideMessageBox /> */}
        <Footer />
    </Box>
}