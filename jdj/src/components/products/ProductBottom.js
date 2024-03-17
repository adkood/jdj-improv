'use client';

import * as React from 'react';
import {
    chakra,
    Container,
    Stack,
    HStack,
    Text,
    useColorModeValue,
    Button,
    Box,
    Icon
} from '@chakra-ui/react';
import { GoChevronRight } from 'react-icons/go';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ProductBottom = () => {

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
                >
                    <Box>
                        <chakra.h1 color={isLight ? "#36454F" : "white"} fontSize="3xl" lineHeight={1.2} fontWeight="bold" textAlign="left">
                            EXPLORE PRODUCTS THROUGH DUAL LENS <br />
                            <chakra.span color="cornflowerBlue">TECHNOLOGY</chakra.span> <br /> AND <br />
                            <chakra.span color="cornflowerBlue">APPLICATION</chakra.span>
                        </chakra.h1>
                    </Box>
                </Stack>
                <Stack
                    spacing={{ base: 5, sm: 2 }}
                    direction={{ base: 'column', sm: 'row' }}
                    alignItems="center"
                >
                    <Card
                        heading="TECHNOLOGY"
                        detail="Explore the technology involved to make our products better."
                        href={"/technology"}
                    />
                    <Card heading="APPLICATION" detail="Know the wide range of applications of our project."
                        href={"/applications"} />
                </Stack>
            </Stack>
        </Container>
    );
};

const Card = ({ heading, detail, href }) => {
    return (
        <Stack
            href="#"
            direction="column"
            _hover={{
                boxShadow: useColorModeValue(
                    '0 4px 6px rgba(160, 174, 192, 0.6)',
                    '0 4px 6px rgba(9, 17, 28, 0.9)'
                )
            }}
            bg={useColorModeValue('gray.200', 'gray.700')}
            p={5}
            rounded="lg"
            spacing={1}
            maxW="450px"
            h="max-content"
        >
            <Text fontSize="md" fontWeight="semibold">
                {heading}
            </Text>
            <Text fontSize="md" textAlign="left" color="gray.600" lineHeight={1.3} noOfLines={2}>
                {detail}
            </Text>
            <Link href={href}>
                <HStack color="cornflowerBlue" alignItems="center">
                    <Text fontSize="sm" textAlign="left" fontWeight="600">
                        EXPLORE
                    </Text>
                    <Icon as={GoChevronRight} w={4} h={4} />
                </HStack>
            </Link>
        </Stack>
    );
};
export default ProductBottom;