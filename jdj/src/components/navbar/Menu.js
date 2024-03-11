'use client'

import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Flex,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import { FaProductHunt } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { useSelector } from 'react-redux';


const CustomMenu = () => {

    const isLight = useSelector((state) => state.colorCode.isLight);
    
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon  fontSize={"1.6rem"} />}
                variant='outline'
                boxSize="3rem"
                borderStyle={"none"}
                color={`${isLight ? "#36454F" : "white"}`}
                _hover={{ bgColor: `${isLight ? "whiteSmoke" : "#656261"}` }}
            />
            <MenuList color={"black"}>
                <MenuItem icon={<FaProductHunt size={"1.1rem"} />}>
                    Products
                </MenuItem>
                <MenuItem icon={<GrTechnology size={"1.1rem"} />} >
                    Technology
                </MenuItem>
                <MenuItem icon={<MdOutlineSettingsApplications size={"1.1rem"} />}>
                    Application
                </MenuItem>
                <MenuItem icon={<IoIosContact size={"1.1rem"} />} >
                    Contact-Us
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default CustomMenu;
