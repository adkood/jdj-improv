import {
  chakra, Link, Stack, Box, Button, useColorModeValue, Divider,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const ProductHome = () => {
  const isLight = useSelector((state) => state.colorCode.isLight);
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = isLight ? '#36454F' : 'white';
  const secondaryColor = isLight ? 'gray.600' : 'white';
  const boxShadow = isLight
    ? '0 4px 6px rgba(160, 174, 192, 0.6)'
    : '2px 4px 6px rgba(9, 17, 28, 0.9)';

  return (
    <Box pb={8}>
      <Stack pos="relative" bgColor={`cornflowerBlue`} height="250px" w="100%"></Stack>
      <Box maxW="5xl" p={4} isolation="isolate" zIndex={3} mt="-10rem" marginInline="auto">
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
              <chakra.span fontSize="3xl" lineHeight={1} color={"cornflowerBlue"} fontWeight="bold">
                OUR PRODUCTS
              </chakra.span>
            </Stack>
            <Divider borderColor={secondaryColor} />
            <chakra.h1 color={secondaryColor} fontSize="1.3rem" maxW="5xl" lineHeight={1.2}>
              Unleashing Unprecedented Excellence: Pioneering the Future of Copper Manufacturing with Innovative Solutions, Superior Quality, and Sustainable Practices. Explore Our Diverse Range of Products: Copper Wire, Copper Rod, and Copper Strip.
            </chakra.h1>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductHome;
