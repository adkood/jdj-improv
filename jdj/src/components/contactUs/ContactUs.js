'use client';

import React from 'react';
import {
  chakra,
  Container,
  Stack,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const DynamicLeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false
});

import { useSelector } from 'react-redux';
import ContactInfo from './ContactInfo';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const ContactUs = () => {

  const isLight = useSelector((state) => state.colorCode.isLight);

  return (
    <Container maxW="100%" px={{ base: 6, md: 3 }} py={13}>

      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <VStack>
          <Breadcrumb position={"relative"} top={-19} w="100%" spacing='8px' mb={3} pb={5} pl={1} separator={<ChevronRightIcon fontSize={"1.5rem"} color={isLight ? "#36454F" : "whiteSmoke"} />}>
            <BreadcrumbItem>
              <Link style={{ color: `${isLight ? "#36454F" : "whiteSmoke"}`, fontWeight: "bold" }} href='/'>HOME</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink fontWeight={"bold"} color={"cornflowerblue"}>CONTACTS</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Stack direction="column" spacing={6} justifyContent="center" maxW="600px" overflow={"hidden"} >
            <chakra.h1 color={isLight ? `#36454F` : "white"} fontSize="3xl" lineHeight={1.2} fontWeight="bold" textAlign="left">
              CONNECT WITH US <br />
              <chakra.span color={"cornflowerBlue"}>@ JDJ</chakra.span>
            </chakra.h1>
            <Text
              fontSize="1.5rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="400"
              color={`${isLight ? 'gray.600' : 'white'}`}
            >
              We&apos;d love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to say hello, don&apos;t hesitate to reach out. Our team is here to help.
            </Text>
            <ContactInfo />
          </Stack>
        </VStack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <Box
            w="100%"
            h={{ base: '300px', md: '100%' }}
            minW={{ base: 'auto', md: '30rem' }}
            rounded="md"
            overflow="hidden"
          >
            <DynamicLeafletMap center={[28.6633580, 77.2020640]} zoom={15} />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ContactUs;
