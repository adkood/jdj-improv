'use client';

import { Fragment } from 'react';
import { Container, Text, Stack, Avatar, Icon, Image, Box } from '@chakra-ui/react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { tech_list } from '@/utils/Constant';

const TechnologySolo = ({ techId }) => {
  console.log(techId);
  return (
    <Container maxW="8xl" p={{ base: 5, md: 8 }}>
        <Stack
          mt={"100px"}
          direction={{ base: 'column', sm: 'row' }}
          bgGradient="linear(to-br, cornflowerBlue , lightGreen)"
          spacing={{ base: 0, sm: 10 }}
          p={{ base: 4, sm: 10 }}
          rounded="lg"
          justifyContent="center"
        >
          <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
            <Icon as={ImQuotesLeft} w={10} h={10} color="gray.700" />
            <Text fontWeight="bold" fontSize="3xl">
              {tech_list[techId].name}
            </Text>
            <Text fontSize="2xl" fontWeight="medium">
              {tech_list[techId].short}
            </Text>
            <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
              <Icon as={ImQuotesRight} w={10} h={10} color="gray.700" />
            </Stack>
          </Stack>
        </Stack>
    </Container>
  );
};

export default TechnologySolo;
