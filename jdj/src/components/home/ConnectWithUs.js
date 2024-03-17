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
        <Stack direction="column" spacing={6} justifyContent="center" mt={3}>
          <chakra.h1 fontSize="4xl" color={"cornflowerblue"} lineHeight={1} fontWeight="bold" textAlign="left">
            JOIN US FOR QUALITY PRODUCTS AND EXPERTISE!
          </chakra.h1>
          <Box overflow={"hidden"}>
            <GetAnimation beforeView={animateStyle.hiddenRight} afterView={animateStyle.visibleRight}>
              <Content isLight={isLight}>
                We&apos;d love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to say hello, don&apos;t hesitate to reach out. Our team is here to help.
              </Content>
            </GetAnimation>
          </Box>
          <Link href="/contact-us" fontSize="md" style={{ color: 'cornflowerBlue' }}>
            BUILD CONNECTION →
          </Link>
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

export default ConnectWithUs;
