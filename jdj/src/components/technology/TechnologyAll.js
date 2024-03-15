'use client'

import GetAnimation from '@/utils/GetAnimation';
import animateStyle from '@/utils/Animate.module.css';
import { chakra, Container, Stack, Text, useColorModeValue, Image, Skeleton, Box, Link } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { tech_list } from '@/utils/Constant';

const TechnologyAll = () => {
  return (
    <Box overflow={"hidden"}>
      {tech_list.map((ele) => {
        return (
          <TechnologySolo key={ele.id} e={ele} />
        )
      })}
    </Box>
  )
}

export const TechnologySolo = ({ e }) => {

  const isLight = useSelector((state) => state.colorCode.isLight);

  return (
    <GetAnimation beforeView={animateStyle.hiddenLeft} afterView={animateStyle.VisibleLeft}>
      <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
        <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
          <Box mr={{ base: 0, md: 5 }} pos="relative">
            <DottedBox isLight={isLight} />
            <Image
              boxShadow="lg"
              w="100%"
              h="100%"
              minW={{ base: 'auto', md: '30rem' }}
              maxH="20rem"
              objectFit="cover"
              src={e.image}
              rounded="md"
              fallback={<Skeleton />}
            />
          </Box>
          <Stack direction="column" spacing={6} justifyContent="center">
            <chakra.h1 fontSize="4xl" color={"cornflowerBlue"} lineHeight={1} fontWeight="bold" textAlign="left">
              {e.name}
            </chakra.h1>
            <Box>
              <Content fontSize="2xl" color={`${isLight ? '' : 'white'}`}>
                {e.short}
              </Content>
            </Box>
            <Link href="#" fontSize="sm" color="blue.400">
              MORE →
            </Link>
          </Stack>
        </Stack>
      </Container>
    </GetAnimation>

  );
};

const Content = ({ children, ...props }) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  );
};

function DottedBox(isLight) {
  return (
    <Box position="absolute" left="-45px" top="-60px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.3)', 'rgba(55,65,81, 0.9)')}
        width="350"
        height="320"
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

export default TechnologyAll;
