'use client'

import {
  chakra,
  Stack,
  Text,
  Image,
  Button,
  HStack,
  VStack,
  Heading,
  Box,
  Link,
  Container,
  Circle,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { FaTools } from 'react-icons/fa';
import { tech_list } from '@/utils/Constant';
import { FiPackage, FiHome, FiBarChart2, FiCheckCircle } from 'react-icons/fi';
import GetAnimation from '@/utils/GetAnimation';
import animateStyle from '@/utils/Animate.module.css';

const TechnologySoloHead = ({ techId }) => {
  const linkColor = 'blue.400';
  const linkHoverColor = 'blue.600';

  return (
    <Container maxWidth={"1400px"} p={{ base: 5, md: 10 }}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 6, md: 10 }}>
        <Box
          borderWidth="1px"
          _hover={{ shadow: 'lg' }}
          rounded="md"
          overflow="hidden"
          bg={useColorModeValue('white', 'gray.800')}
          flex={{ base: '1', md: '0.6' }}
        >
          <Image
            src={tech_list[techId].image}
            objectFit="cover"
            w="100%"
            h="auto"
          />
          <Box p={{ base: 3, sm: 5 }}>
            <Text fontSize={{ base: 'md', sm: 'lg' }} noOfLines={2} color="gray.600">
              {tech_list[techId].name}
            </Text>
          </Box>
        </Box>
        <VStack align="start" spacing={6} flex={{ base: '1', md: '0.4' }}>
          <Heading fontSize="4xl" color={"cornflowerblue"} fontWeight="600">
            ADVANTAGES...
          </Heading>
          <Box>
            {tech_list[techId].advantage.map((ele, idx) => {
              return <GetAnimation key={ele.id} beforeView={animateStyle.hiddenRight} afterView={animateStyle.visibleRight}>
                {idx === tech_list[techId].advantage.length - 1 ? <MilestoneItem fontSize="xl" skipTrail icon={FiPackage}>
                  {ele}
                </MilestoneItem> : <MilestoneItem fontSize="xl" icon={FiPackage}>
                  {ele}
                </MilestoneItem>}
              </GetAnimation>
            })}
          </Box>
          <Heading fontSize="4xl" color={"cornflowerblue"} fontWeight="600">
            APPLICATIONS...
          </Heading>
          <Box>
            {tech_list[techId].application.map((ele, idx) => {
              return <GetAnimation key={ele.id} beforeView={animateStyle.hiddenRight} afterView={animateStyle.visibleRight}>
                {idx === tech_list[techId].application.length - 1 ? <MilestoneItem fontSize="xl" skipTrail icon={FiPackage}>
                  {ele}
                </MilestoneItem> : <MilestoneItem fontSize="xl" icon={FiPackage}>
                  {ele}
                </MilestoneItem>}
              </GetAnimation>
            })}
          </Box>
        </VStack>
      </Stack>
    </Container>
  );
};

const MilestoneItem = ({
  icon: IconComponent = FiCheckCircle,
  boxProps = {},
  skipTrail = false,
  children,
  ...props
}) => {
  const color = useColorModeValue('gray.700', 'gray.500');
  return (
    <Flex minH={20} {...props}>
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle

          size={12}
          bg={useColorModeValue('gray.600', 'gray.500')}
          opacity={useColorModeValue(0.07, 0.15)}
        />
        <Box
          as={IconComponent}
          size="1.25rem"
          color={color}
          pos="absolute"
          left="0.875rem"
          top="0.875rem"
        />
        {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
      </Flex>
      <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
        {children}
      </Box>
    </Flex>
  );
};

const CustomButton = ({ children, ...props }) => {
  return (
    <Button textTransform="uppercase" lineHeight="inherit" rounded="md" {...props}>
      {children}
    </Button>
  );
};

export default TechnologySoloHead;
