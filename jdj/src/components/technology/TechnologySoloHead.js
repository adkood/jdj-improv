'use client'

import {
  Stack,
  Text,
  Image,
  Button,
  VStack,
  Heading,
  Box,
  Container,
  Circle,
  Flex,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { tech_list } from '@/utils/Constant';
import { FiPackage, FiCheckCircle } from 'react-icons/fi';
import GetAnimation from '@/utils/GetAnimation';
import animateStyle from '@/utils/Animate.module.css';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

const TechnologySoloHead = ({ techId }) => {

  const isLight = useSelector((state) => state.colorCode.isLight);

  return (
    <>
      <Container maxWidth={"1400px"} p={{ base: 5, md: 10 }}>
        <Breadcrumb spacing='8px' pl={1} separator={<ChevronRightIcon fontSize={"1.5rem"} color={isLight ? '#36454F' : "white"} />}>
          <BreadcrumbItem>
            <BreadcrumbLink color={isLight ? '#36454F' : "white"} fontWeight={"bold"} href='/'>HOME</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink color={isLight ? '#36454F' : "white"} fontWeight={"bold"} href='/technology'>TECHNOLOGY</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontWeight={"bold"} color={"cornflowerblue"}>{tech_list[techId].name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
      <Container maxWidth={"1400px"} p={{ base: 3, md: 10 }}>
        <Text pb={3} fontWeight={"bold"} fontSize={'3xl'} noOfLines={2} color={isLight ? "gray.600" : "white"}>
          {tech_list[techId].name}
        </Text>
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
              <Text fontSize={"1.25rem"} color="gray.600">
                {tech_list[techId].long}
              </Text>
            </Box>
          </Box>
          <VStack align="start" spacing={6} flex={{ base: '1', md: '0.4' }}>
            <Heading fontSize="2xl" color={"cornflowerblue"} fontWeight="600">
              ADVANTAGES...
            </Heading>
            <Box overflow={"hidden"}>
              {tech_list[techId].advantage.map((ele, idx) => {
                return <GetAnimation key={ele.id} beforeView={animateStyle.hiddenRight} afterView={animateStyle.visibleRight}>
                  {idx === tech_list[techId].advantage.length - 1 ? <MilestoneItem fontSize="xl" skipTrail icon={FiPackage} isLight={isLight}>
                    {ele}
                  </MilestoneItem> : <MilestoneItem fontSize="xl" icon={FiPackage} isLight={isLight}>
                    {ele}
                  </MilestoneItem>}
                </GetAnimation>
              })}
            </Box>
            <Heading fontSize="2xl" color={"cornflowerblue"} fontWeight="600">
              APPLICATIONS...
            </Heading>
            <Box overflow={"hidden"}>
              {tech_list[techId].application.map((ele, idx) => {
                return <GetAnimation key={ele.id} beforeView={animateStyle.hiddenRight} afterView={animateStyle.visibleRight}>
                  {idx === tech_list[techId].application.length - 1 ? <MilestoneItem fontSize="xl" skipTrail icon={FiPackage} isLight={isLight}>
                    {ele}
                  </MilestoneItem> : <MilestoneItem fontSize="xl" icon={FiPackage} isLight={isLight}>
                    {ele}
                  </MilestoneItem>}
                </GetAnimation>
              })}
            </Box>
          </VStack>
        </Stack>
      </Container>
    </>
  );
};

const MilestoneItem = ({
  icon: IconComponent = FiCheckCircle,
  boxProps = {},
  skipTrail = false,
  isLight,
  children,
  ...props
}) => {
  const color = useColorModeValue('gray.700', 'gray.500');
  return (
    <Flex minH={20} {...props}>
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle
          size={12}
          bg={isLight ? '#36454F' : "white"}
          opacity={useColorModeValue(0.07, 0.15)}
        />
        <Box
          as={IconComponent}
          size="1.25rem"
          color={isLight ? '#36454F' : "white"}
          pos="absolute"
          left="0.875rem"
          top="0.875rem"
        />
        {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
      </Flex>
      <Box color={isLight ? '#36454F' : "white"} pt={{ base: 1, sm: 3 }} {...boxProps}>
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
