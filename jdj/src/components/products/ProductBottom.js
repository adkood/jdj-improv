import React from 'react';
import {
    chakra,
    Box,
    Flex,
    HStack,
    VStack,
    Text,
    useColorModeValue,
    Link,
    Icon,
    Container,
    Stack,
    Avatar
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiOutlineEye } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import GetAnimation from '@/utils/GetAnimation';
import animateStyles from '@/utils/Animate.module.css';
import { FaQuoteRight } from 'react-icons/fa';
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSettingsApplications } from "react-icons/md";

const ProductBottom = () => {

    const isLight = useSelector((state) => state.colorCode.isLight);

    return (
        <Container maxW="8xl" p={{ base: 10, md: 14 }} borderRadius={10}>
            <VStack
                spacing={3}
                p={10}
                bgColor={"#e9eef5"}
                border="3px solid"
                borderColor="cornflowerBlue"
                maxW="6xl"
                margin="0 auto"
                boxShadow="lg"
                pos="relative"
                rounded={'md'}
            >
                <Icon
                    as={FaQuoteRight}
                    w={10}
                    h={10}
                    color="cornflowerBlue"
                    left="-1.3rem"
                    position="absolute"
                    top="-1.5rem"
                />
                <Stack direction="column" spacing={5}>
                    <Text color="gray.600" fontSize="2xl" lineHeight={1.2}>
                        Discover the essence of our products through a dual lens, exploring both the intricate workings of the technology behind them and the diverse range of applications they serve.
                    </Text>
                </Stack>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <GetAnimation beforeView={animateStyles.hiddenRight} afterView={animateStyles.visibleRight}>
                        <Card detail="Technology Used" href="/technology" isLight={isLight} icon={GrTechnology} />
                    </GetAnimation>
                    <GetAnimation m={10} beforeView={animateStyles.hiddenRight} afterView={animateStyles.visibleRight}>
                        <Card detail="Product Applications" href="/applications" isLight={isLight} icon={MdOutlineSettingsApplications} />
                    </GetAnimation>
                </Stack>
            </VStack>
        </Container>
    );
};

const Card = ({ detail, href, isLight, icon }) => {
    return (
        <motion.div whileHover={{ translateY: -5 }}>
            <Stack
                direction="column"
                rounded="md"
                boxShadow={`${isLight ? '0 4px 6px rgba(160, 174, 192, 0.6)' : '2px 4px 6px rgba(9, 17, 28, 0.9)'}`}
                w="100%"
                textAlign="left"
                align="start"
                spacing={0}
                role="group"
                overflow="hidden"
            >
                <HStack py={6} px={5} spacing={4} bg={useColorModeValue('gray.100', 'gray.800')} w="100%">
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        rounded="lg"
                        p={2}
                        bg="cornflowerBlue"
                        position="relative"
                        w={12}
                        h={12}
                        overflow="hidden"
                        lineHeight={0}
                        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)}"
                    >
                        <Icon as={icon} w={8} h={8} color="white" />
                    </Flex>
                    <VStack spacing={0} align="start" maxW="lg" h="100%">
                        <HStack spacing={2}>
                            <Text as="h2" fontSize="lg" color={"#36454F"} fontWeight="extrabold">
                                {detail}
                            </Text>
                        </HStack>
                    </VStack>
                </HStack>
                <Flex
                    visibility="hidden"
                    opacity={0}
                    height={0}
                    alignItems="center"
                    px={5}
                    _groupHover={{ visibility: 'visible', opacity: 1, height: '40px' }}
                    transition="opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, height 0.3s ease-in-out"
                >
                    <Link href={href} fontSize="md" color={"cornflowerblue"}>VISIT...</Link>
                </Flex>
            </Stack>
        </motion.div>
    );
};

export default ProductBottom;
