'use client'

import React from 'react';
import { Box, Badge, SimpleGrid, Container, Image, Link, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

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
      <SimpleGrid columns={[1, 2, 3]} spacing="20px">
        {dataList.map((blog) => {
          return (
            <Box position="relative" key={blog.id}>
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
                <Image src={blog.image} alt="Blog image" />
                <Box p={{ base: 4, lg: 6 }} bgColor={"whiteSmoke"}>
                  <Box d="flex" alignItems="baseline">
                    <Box
                      fontWeight="semibold"
                      as="h2"
                      letterSpacing="wide"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {blog.title}
                    </Box>
                  </Box>
                  <Box>
                    <Box color="gray.600" fontSize="sm">
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
                    fontSize="sm"
                  >
                    {blog.content}
                  </Text>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default AllComponents;