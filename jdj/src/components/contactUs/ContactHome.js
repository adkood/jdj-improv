
import {
  chakra, Link, Stack, Box, Button, useColorModeValue, HStack, Image,
} from '@chakra-ui/react';

const ContactHome = () => {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box pb={8}>
      <Stack pos="relative" bgColor={`cornflowerBlue`} height="250px" w="100%"></Stack>
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
              <Image
                rounded="lg"
                src={'location.svg'}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactHome;