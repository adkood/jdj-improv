import React from 'react';
import {
    Box,
    chakra,
    Container,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    Link
} from '@chakra-ui/react';
import GetAnimation from '@/utils/GetAnimation';
import animateStyles from '@/utils/Animate.module.css';

const articles = [
    {
        id: 1,
        title: 'Exemplary Copper Products: Unrivaled Quality and Performance',
        href: "/products"
    },
    {
        id: 2,
        title: 'Innovative Technologies Redefining Copper Manufacturing',
        href: "/technology"

    },
    {
        id: 3,
        title: 'Versatile Copper Applications: Powering Progress Across Industries',
        href: "/applications"

    }
];

const Features = () => {
    return (
        <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
            {articles.map((article, index) => (
                <GetAnimation beforeView={animateStyles.hiddenRight} afterView={animateStyles.visibleRight}>
                    <Flex key={index} mb="10px">
                        <LineWithDot />
                        <Card {...article} />
                    </Flex>
                </GetAnimation>
            ))}
        </Container>
    );
};

const Card = ({ title, href }) => {
    return (
        <HStack
            p={{ base: 3, sm: 5 }}
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
            <Box>
                <VStack spacing={0} mb={3} textAlign="left">
                    <Link
                        _hover={{ color: 'cornflowerBlue' }}
                        fontSize="2xl"
                        lineHeight={1.2}
                        fontWeight="bold"
                        w="100%"
                        color={"#36454F"}
                        href={href}
                    >
                        {title}
                    </Link>
                </VStack>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
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
                    backgroundColor="rgb(255, 255, 255)"
                    borderRadius="100px"
                    border="3px solid cornflowerBlue"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

export default Features;
