'use client'

import * as React from 'react';
import { Text, Image, Flex, Stack, Box } from '@chakra-ui/react';
import Features from './Features';
import { useSelector } from 'react-redux';

const AboutUs = () => {

    const isLight = useSelector((state) => state.colorCode.isLight);

    return (
        <Stack id="aboutUs" minH="100vh" direction={{ base: 'column', md: 'row' }} p={6} bgColor={`${isLight ? '' : '#464544'}`}>
            <Flex flex={1}>
                <Image rounded="md" alt="Cover image" objectFit="cover" src="./aboutUs.jpeg" onError={(e) => e.target.src = 'https://via.placeholder.com/300'} />
            </Flex>
            <Flex p={4} flex={1} align="center" justifyContent="center">
                <Flex direction="column">
                    <Text fontWeight="extrabold" fontSize="xx-large" mb={6} color={"cornflowerblue"}>
                        PASSION FOR PROGRESS, PURPOSE FOR PEOPLE.
                        <Box as="span" display="block" bg="blue.600" w="100%" h="1px" />
                    </Text>
                    <Text
                        fontSize="1.3rem"
                        fontWeight="extrabold"
                        mb={2}
                        lineHeight="1.375"
                        color={`${isLight ? 'gray.600' : 'white'}`}
                    >
                        Established in 1949, JD Jain and Company stands as a stalwart in the copper trading industry. With a rich legacy of over seven decades, we have been the epitome of reliability and excellence in wholesale copper trade. Our commitment to quality and customer satisfaction has propelled us to the forefront of the market, making JDJ & Co. a trusted name in the industry since its inception. JD Jain and Company proudly presents its manufacturing unit, JDJ Alloys, as it embarks on a groundbreaking venture.
                    </Text>
                    <Features />
                </Flex>
            </Flex>
        </Stack>
    );
};

export default AboutUs;