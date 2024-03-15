'use client'

import { chakra, Link, Stack, Box, Button, useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { MdOutlineSettingsApplications } from "react-icons/md";

const ApplicationHome = () => {
    const isLight = useSelector((state) => state.colorCode.isLight);
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = isLight ? '#36454F' : 'white';
    const secondaryColor = isLight ? 'gray.500' : 'white';
    const boxShadow = isLight
        ? '0 4px 6px rgba(160, 174, 192, 0.6)'
        : '2px 4px 6px rgba(9, 17, 28, 0.9)';

    return (
        <Box pb={8}>
            <Stack pos="relative" bgColor={`cornflowerBlue`} height="250px" w="100%"></Stack>
            <Box maxW="3xl" p={4} isolation="isolate" zIndex={3} mt="-10rem" marginInline="auto">
                <Box
                    boxShadow={boxShadow}
                    bg={bgColor}
                    p={{ base: 4, sm: 8 }}
                    overflow="hidden"
                    rounded="2xl"
                    bgColor={isLight ? '' : '#656261'}
                >
                    <Stack pos="relative" zIndex={1} direction="column" spacing={5} textAlign="left">
                        <Stack direction="row" alignItems="center">
                            <MdOutlineSettingsApplications fontSize={"3rem"} color={"cornflowerBlue"} />
                            <chakra.span fontSize="4xl" lineHeight={1.2} color={textColor} fontWeight="bold">
                                PRODUCT APPLICATIONS
                            </chakra.span>
                        </Stack>
                        <chakra.h1 color={secondaryColor} fontSize="xl" maxW="600px" lineHeight={1.2}>
                            Unleashing Unprecedented Excellence: Pioneering the Future of Copper Manufacturing with Innovative Solutions, Superior Quality, and Sustainable Practices.
                        </chakra.h1>
                        <chakra.h1 color={secondaryColor} fontSize="xl" maxW="600px" lineHeight={1.2}>
                            Discover the Versatile Applications of Our Products            </chakra.h1>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default ApplicationHome;
