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
    Stack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiOutlineEye } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import GetAnimation from '@/utils/GetAnimation';
import animateStyles from '@/utils/Animate.module.css';

const ProductMiddle = () => {
    const isLight = useSelector((state) => state.colorCode.isLight);

    return (
        <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={2} justifyContent="center">
                <Stack
                    direction="column"
                    spacing={6}
                    justifyContent="center"
                    maxW="500px"
                    mb={{ base: 3, md: 0 }}
                    mr={3}
                >
                    <Box>
                        <chakra.h1 color={`${isLight ? '#36454F' : 'white'}`} fontSize="4xl" lineHeight={1.2} fontWeight="bold" textAlign="left">
                            Discover the essence of our products through a dual lens <br />
                            <chakra.span color="cornflowerBlue">Technology</chakra.span> <br />
                            and <br />
                            <chakra.span color="cornflowerBlue">Applications</chakra.span>
                        </chakra.h1>
                    </Box>
                </Stack>
                <Stack
                    spacing={{ base: 5, sm: 2 }}
                    direction={{ base: 'column', sm: 'row' }}
                    alignItems="center"
                >
                    <GetAnimation beforeView={animateStyles.hiddenRight} afterView={animateStyles.visibleRight}>
                        <Card detail="Technology Involved." href="/technology" isLight={isLight} />
                    </GetAnimation>

                    <GetAnimation beforeView={animateStyles.hiddenRight} afterView={animateStyles.visibleRight}>
                        <Card detail="Product Applications." href="/applications" isLight={isLight} />
                    </GetAnimation>
                </Stack>
            </Stack>
        </Container>
    );
};

const Card = ({ detail, href, isLight }) => {
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
                        <Icon as={AiOutlineEye} w={6} h={6} color="white" />
                    </Flex>
                    <VStack spacing={0} align="start" maxW="lg" h="100%">
                        <HStack spacing={2}>
                            <Text as="h2" fontSize="lg" fontWeight="extrabold">
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
                    <Link href={href} fontSize="md" color={"cornflowerblue"}>visit</Link>
                </Flex>
            </Stack>
        </motion.div>
    );
};

export default ProductMiddle;
