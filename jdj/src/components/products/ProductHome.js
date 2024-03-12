'use client'

import { chakra, Link, Stack, Box, Button, useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ProductHome = () => {

  const isLight = useSelector((state) => state.colorCode.isLight);

  return (
    <Box pb={8}>
      <Stack
        pos="relative"
        bgColor={`cornflowerBlue`}
        height="250px"
        w="100%"
      ></Stack>
      <Box maxW="3xl" p={4} isolation="isolate" zIndex={3} mt="-10rem" marginInline="auto">
        <Box
          boxShadow={`${isLight ? useColorModeValue(
            '0 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          ) : ""}`}
          bg={useColorModeValue('white', 'gray.800')}
          p={{ base: 4, sm: 8 }}
          overflow="hidden"
          rounded="2xl"
          bgColor={`${isLight ? '' : '#656261'}`}
        >
          <Stack pos="relative" zIndex={1} direction="column" spacing={5} textAlign="left">
            <chakra.h1 fontSize="4xl" lineHeight={1.2} color={`${isLight ? '#36454F' : 'white'}`} fontWeight={"bold"}>
              OUR PRODUCTS
            </chakra.h1>
            <chakra.h1 color={`${isLight ? 'gray.500' : 'white'}`} fontSize="xl" maxW="600px" lineHeight={1.2}>
              Unleashing Unprecedented Excellence: Pioneering the Future of Copper Manufacturing with Innovative Solutions, Superior Quality, and Sustainable Practices.
            </chakra.h1>
            <chakra.h1 color={'cornflowerblue'} fontSize="xl" maxW="600px" lineHeight={1.2}>
              Explore Our Diverse Range of Products: Copper Wire, Copper Rod, and Copper Strip.
            </chakra.h1>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductHome;