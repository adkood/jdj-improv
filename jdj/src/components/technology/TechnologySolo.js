'use client';

import { Fragment } from 'react';
import { Container, Text, Stack, Avatar, Icon, Image, Box } from '@chakra-ui/react';
import { ImQuotesLeft } from 'react-icons/im';

const testimonials = [
  {
    name: 'Ben Parker',
    position: 'CEO',
    company: 'Foodtesla',
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    content:
      'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper'
  }
];

const TechnologySolo = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 8 }}>
      {testimonials.map((obj, index) => (
        <Fragment key={index}>
          <Stack
            mt={"150px"}
            direction={{ base: 'column', sm: 'row' }}
            bgGradient="linear(to-br, cornflowerBlue , lightGreen)"
            spacing={{ base: 0, sm: 10 }}
            p={{ base: 4, sm: 10 }}
            rounded="lg"
            justifyContent="center"
          >
            <Box width="30rem" pos="relative" d={{ base: 'none', sm: 'block' }}>
              <Image
                size="2xl"
                pos="absolute"
                rounded="lg"
                src={obj.image}
                top="-6.5rem"
                boxShadow="lg"
              />
            </Box>

            <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
              <Icon as={ImQuotesLeft} w={10} h={10} color="gray.700" />
              <Text fontSize="md" fontWeight="medium">
                {obj.content}
              </Text>
              <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
                <Avatar
                  size="xl"
                  showBorder={true}
                  borderColor="green.400"
                  name="avatar"
                  src={obj.image}
                  d={{ base: 'block', sm: 'none' }}
                />
                <Text fontWeight="bold" fontSize="lg">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  {obj.position}, {obj.company}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Fragment>
      ))}
    </Container>
  );
};

export default TechnologySolo;
