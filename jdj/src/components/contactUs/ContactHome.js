
import {
  chakra, Link, Stack, Box, Button, useColorModeValue, HStack, Image,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ContactHome = () => {

  const isLight = useSelector((state) => state.colorCode.isLight);
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box pb={8}>
      <Stack pos="relative" bgColor={`cornflowerBlue`} height="200px" w="100%"></Stack>
      <Box maxW="5xl" p={4} isolation="isolate" zIndex={3} mt="-10rem" marginInline="auto">
        <Box
          bg={bgColor}
          p={{ base: 4, sm: 8 }}
          overflow="hidden"
          rounded="2xl"
          bgColor='transparent'
        >
          <Stack pos="relative" zIndex={1} direction="column" spacing={5} alignItems="center">
            <Box width="20rem" pos="relative" d={{ base: 'none', sm: 'block' }}>
              {isLight ? <Image
                rounded="lg"
                src={'location.svg'}
              /> : <Image
                rounded="lg"
                src={'location.svg'}
                filter="invert(100%)"
              />}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactHome;