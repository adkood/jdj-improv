'use client'

import GetAnimation from '@/utils/GetAnimation';
import animateStyle from '@/utils/Animate.module.css';
import { chakra, Container, Stack, Text, useColorModeValue, Image, Skeleton, Box, Link } from '@chakra-ui/react';

const tech_list = [{
  id: '1', image: 'https://i.ibb.co/89ym8sG/casting.jpg', name: "CASTING", short: 'Casting is a manufacturing process in which molten material, like metal, is poured into a mold and allowed to harden.', advantage: ["Continuous production of soft annealed copper.",
    "Defect free production in continuous length",
    "High electrical conductivity",
    "Production of complex cross sectional geometry"], prod_avail: ["Bare copper strip", "Rectangular wire", "Copper profile"], application: ["Earthing Conductor",
      "Lightening protection",
      "Transformer winding wire",
      "Profiles for connectors"]
},
{
  id: '2', image: 'https://i.ibb.co/fDGtqnb/extrusion.png', name: "EXTRUSION", short: 'Extrusion is a compressive forming manufacturing process that creates lengths of shaped cross-sections from metal billets.', advantage: ["Continuous production of soft annealed copper.",
    "Defect free production in continuous length",
    "High electrical conductivity",
    "Production of complex cross sectional geometry"], prod_avail: ["Bare copper strip", "Rectangular wire", "Copper profile"], application: ["Earthing Conductor",
      "Lightening protection",
      "Transformer winding wire",
      "Profiles for connectors"]
}, {
  id: '3', image: 'https://i.ibb.co/8xqq4Ld/drawing2.png', name: "DRAWING", short: 'This process allows artists to create intricate and detailed prints with fine lines and textures.', advantage: ["Suitable for fine wire drawing",
    "High conductivity helps less metal usage",
    "Longer packing length suitable for welding",
    "Easy to stringing up in wire drawing machine"], prod_avail: ["Rod breakdown wire 1.8 mm to 3.5 mm",
      "Intermediate wire 1 mm to 1.6 mm",
      "Fine wire 0.3 mm to 0.8 mm"], application: ["Flexible conductor for building wire and welding cable",
        "HV, MV, LV Energy transmission with low heat development",
        "High frequency communication cable application"]
}];

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
  return (
    <GetAnimation beforeView={animateStyle.hiddenLeft} afterView={animateStyle.VisibleLeft}>
      <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
        <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
          <Box mr={{ base: 0, md: 5 }} pos="relative">
            <DottedBox />
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
              <Content fontSize="2xl">
                {e.short}
              </Content>
            </Box>
            <Link href="#" fontSize="sm" color="blue.400">
              More →
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

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-60px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.5)', 'rgba(55,65,81, 0.9)')}
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
