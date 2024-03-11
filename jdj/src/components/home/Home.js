'use client'

import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
} from '@chakra-ui/react';
import { IoBulb } from "react-icons/io5";
import { useInView } from 'react-intersection-observer';
import styles from './HomeAnimate.module.css';

const Home = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const scrollTo = (to) => {
    const doc = document.getElementById(to);
    if (doc) {
      doc.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (
    <Container ref={ref} maxW="100%" px={{ base: 6, md: 3 }} py={40} >
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px" className={inView ? styles.visibleLeft : styles.hiddenLeft}>
          <chakra.h1 color={"#36454F"} fontSize="5xl" lineHeight={1.2} fontWeight="bold" textAlign="left">
            PRECISION INNOVATION QUALITY <br />
            <chakra.span color="cornflowerblue">@ JDJ</chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.5rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            JD JAIN AND COMPANY PROUDLY PRESENTS ITS MANUFACTURING UNIT JDJ ALLOYS AS IT EMBARKS ON A GROUNDBREAKING VENTURE.
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              px={6}
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={4}
              lineHeight={1}
              bgColor={"cornflowerblue"}
              _hover={{ opacity: 0.9 }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={() => { scrollTo("aboutUs") }}
            >
              <chakra.span color={"white"} fontSize={"1.2rem"} padding={"10px"}> Learn more About Us. </chakra.span>
              <IoBulb color="yellow" fontSize={"2rem"} />
            </chakra.button>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative" className={inView ? styles.visibleRight : styles.hiddenRight}>
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            minW={{ base: 'auto', md: '30rem' }}
            objectFit="cover"
            src={`./home.jpg`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
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

export default Home;