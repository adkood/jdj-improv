'use client'

import { chakra, Container, Stack, Icon, Image, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ContactHome = () => {

  const isLight = useSelector((state) => state.colorCode.isLight);

  return (
    <Container maxW="8xl" p={{ base: 5, md: 8 }}>
      <Stack
        mt={"125px"}
        direction={{ base: 'column', sm: 'row' }}
        bgGradient="linear(to-br, cornflowerBlue, lightGreen)"
        spacing={{ base: 0, sm: 10 }}
        p={{ base: 4, sm: 10 }}
        rounded="lg"
        justifyContent="center"
      >
        <Box width="20rem" pos="relative" d={{ base: 'none', sm: 'block' }}>
          <Image
            pos="absolute"
            rounded="lg"
            src={'location.svg'}
            top="-7.3rem"
          />
        </Box>

        <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
          <chakra.h1 color={`#36454F`} fontSize="3xl" lineHeight={1.2} fontWeight="bold" textAlign="left">
            CONNECT WITH US <br />
            <chakra.span color={"cornflowerBlue"}>@ JDJ</chakra.span>
          </chakra.h1>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ContactHome;
