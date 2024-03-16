'use client';

import React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import LeafletMap from './LeafletMap';
import { useSelector } from 'react-redux';
import ContactInfo from './ContactInfo';

const ContactUs = () => {

  const isLight = useSelector((state) => state.colorCode.isLight);

  return (
    <Container maxW="100%" px={{ base: 6, md: 3 }} py={16} bgColor={`${isLight ? '' : '#464544'}`}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="600px" overflow={"hidden"} >
          <Text
            fontSize="1.5rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color={`${isLight ? 'gray.500' : 'white'}`}
          >
            We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to say hello, don't hesitate to reach out. Our team is here to help.
          </Text>
          <ContactInfo />
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <Box
            w="100%"
            h={{ base: '300px', md: '100%' }}
            minW={{ base: 'auto', md: '30rem' }}
            rounded="md"
            overflow="hidden"
          >
            <LeafletMap center={[28.666306, 77.206997]} zoom={15} />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ContactUs;
