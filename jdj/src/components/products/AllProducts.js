// 'use client'

import React from 'react';
import {
  Box, Badge, SimpleGrid, Container, Image, Link, Text, Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import GetAnimation from '@/utils/GetAnimation';
import animateStyles from '@/utils/Animate.module.css';
import { ChevronRightIcon } from '@chakra-ui/icons';


const dataList = [
  {
    id: 1,
    title: 'Copper Rod',
    authorName: 'All-Size',
    content: `Used in power transmission, power distribution, telecommunications and countless types of electrical equipment.`,
    image: 'https://i.ibb.co/tYmD8LG/copper-Rod.png'
  },
  {
    id: 2,
    title: 'Copper Wire',
    authorName: 'All-Size',
    content: `Rods are popular for general applications such as busbars, transformer components and more.`,
    image: 'https://i.ibb.co/brsSPgv/copper-Wire.png'
  },
  {
    id: 3,
    title: 'Copper Strip',
    authorName: 'All-Size',
    content: `Strips are used as heat-sinks, heat exchangers, condensers, lightning conductors and more.`,
    image: 'https://i.ibb.co/FsJ8MKS/copper-Strip.png'
  }
];

const AllComponents = () => {

  const isLight = useSelector((state) => state.colorCode.isLight);

  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }} bgColor={`${isLight ? '' : '#464544'}`}>
      <Breadcrumb spacing='8px' pb={8} pl={1} separator={<ChevronRightIcon fontSize={"1.5rem"} color={isLight ? "#36454F" : "whiteSmoke"} />}>
        <BreadcrumbItem>
          <BreadcrumbLink color={isLight ? "#36454F" : "whiteSmoke"} fontWeight={"bold"} href='/'>HOME</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontWeight={"bold"} color={"cornflowerblue"}>PRODUCTS</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <SimpleGrid columns={[1, 2, 3]} spacing="30px" overflow={"hidden"}>
        {dataList.map((blog) => {
          return (
            <GetAnimation key={blog.id} beforeView={animateStyles.hiddenRight} afterView={animateStyles.visibleRight}>
              <Box position="relative">
                <Box fontSize="sm" position="absolute" right="5px" margin="5px" zIndex="1">
                  <Badge rounded="full" p="2px 8px" colorScheme="blue">
                    Available
                  </Badge>
                </Box>
                <Box
                  borderWidth="1px"
                  shadow="md"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                >
                  <Image src={blog.image} onError={(e) => e.target.src = 'https://via.placeholder.com/300'} alt="Blog image" />
                  <Box p={{ base: 4, lg: 6 }} bgColor={"whitesmoke"}>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        fontWeight="semibold"
                        as="h2"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        p={0.5}
                      >
                        {blog.title}
                      </Box>
                    </Box>
                    <Box>
                      <Box color="gray.600" fontSize="sm" p={0.5}>
                        <Badge rounded="full" px="2" colorScheme="teal">
                          {blog.authorName}
                        </Badge>
                      </Box>
                    </Box>
                    <Text
                      mt="1"
                      fontWeight="semibold"
                      noOfLines={3}
                      lineHeight="tight"
                      color="gray.600"
                      fontSize="md"
                      p={0.5}
                    >
                      {blog.content}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </GetAnimation>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default AllComponents;