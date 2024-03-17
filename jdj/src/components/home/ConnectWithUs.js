'use client';

import GetAnimation from '@/utils/GetAnimation';
import animateStyle from '@/utils/Animate.module.css';
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  TextProps
} from '@chakra-ui/react';

import Link from 'next/link';
import { useSelector } from 'react-redux';

const ConnectWithUs = () => {
  const isLight = useSelector((state) => state.colorCode.isLight);

  return (
    <Container maxW="8xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Box mr={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            boxShadow="lg"
            w="100%"
            h="100%"
            minW={{ base: 'auto', md: '30rem' }}
            maxH="25rem"
            objectFit="cover"
            src={'./Connect.png'}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center">
          <GetAnimation beforeView={animateStyle.hiddenRight} afterView={animateStyle.visibleRight}>
            <chakra.h1 fontSize="4xl" color={"cornflowerblue"} lineHeight={1} fontWeight="bold" textAlign="left">
              JOIN US FOR QUALITY PRODUCTS AND EXPERTISE!
            </chakra.h1>
          </GetAnimation>
          <GetAnimation beforeView={animateStyle.hiddenRight} afterView={animateStyle.visibleRight}>
            <Box>
              <Content isLight={isLight}>
                We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to say hello, don't hesitate to reach out. Our team is here to help.
              </Content>
            </Box>
          </GetAnimation>
          <GetAnimation beforeView={animateStyle.hiddenRight} afterView={animateStyle.visibleRight}>
            <Link href="/contact-us" fontSize="md" style={{ color: 'cornflowerBlue' }}>
              BUILD CONNECTION →
            </Link>
          </GetAnimation>
        </Stack>
      </Stack>
    </Container>
  );
};

const Content = ({ children, isLight, ...props }) => {
  return (
    <Text
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      fontSize="1.4rem"
      mb={2}
      color={`${isLight ? 'gray.600' : 'white'}`}
      {...props}
    >
      {children}
    </Text>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-65px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="450"
        height="220"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default ConnectWithUs;