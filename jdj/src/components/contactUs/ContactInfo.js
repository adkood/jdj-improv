// 'use client'

import React from 'react';
import {
    Box,
    chakra,
    Container,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    Text,
    Avatar,
    Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import GetAnimation from '@/utils/GetAnimation';
import animateStyles from '@/utils/Animate.module.css';
import { useSelector } from 'react-redux';

import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";

const articles = [
    {
        id: 1,
        title: 'Phone',
        value: "+91 9205186548",
        icon: FaPhoneSquareAlt,
    },
    {
        id: 2,
        title: 'Email',
        value: "Info.jdjain@gmail.com",
        icon: MdAttachEmail,
    },
    {
        id: 3,
        title: 'Address',
        value: "JDJ ALLOYS PVT LTD, Kundali village, Kundli, Haryana",
        icon: FaAddressBook,
    }
];

const ContactInfo = () => {
    return (
        <Container maxWidth="4xl" p={{ base: 2, sm: 10 }} overflow={"hidden"}>
            {articles.map((article, index) => (
                <GetAnimation key={index} beforeView={animateStyles.hiddenRight} afterView={animateStyles.visibleRight}>
                    <Flex mb="10px">
                        <LineWithDot />
                        <Card {...article} />
                    </Flex>
                </GetAnimation>
            ))}
        </Container>
    );
};

const Card = ({ value, icon }) => {
    return (
        <HStack
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.100', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: '15px 15px 15px 0',
                position: 'absolute',
                left: '-15px',
                display: 'block'
            }}
        >
            <Icon as={icon} w={10} h={10} color="cornflowerBlue" />
            <Box>
                <chakra.h1
                    _hover={{ color: 'cornflowerBlue' }}
                    fontSize="1xl"
                    lineHeight={1.2}
                    fontWeight="bold"
                    w="100%"
                >
                    {value}
                </chakra.h1>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    const isLight = useSelector((state) => state.colorCode.isLight);

    return (
        <Flex pos="relative" alignItems="center" mr="40px">
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    width="100%"
                    height="100%"
                    bottom="0"
                    right="0"
                    top="0"
                    left="0"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    backgroundColor={`${isLight ? "rgb(255, 255, 255)" : "#464544"}`}
                    borderRadius="100px"
                    border={`3px solid ${isLight ? "cornflowerBlue" : "white"}`}
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

export default ContactInfo;
