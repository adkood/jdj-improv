'use client';

import React from 'react';
import {
    Box,
    chakra,
    Container,
    Text,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Image, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react';
import GetAnimation from '@/utils/GetAnimation';
import animateStyle from '@/utils/Animate.module.css';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

export const appli_list = [{
    id: '1', image: 'https://i.ibb.co/Jj59pLY/management-1031985.jpg', name: "Cables", short: 'Wire & Cable manufacturing with JDJ’s copper is highly beneficial due to its high purity and high electrical conductivity.', long: 'The electrical conductivity though decreases during the initial wire drawing process but this regains subsequently during annealing process due to high recrystallisation temperature. The electrical and mechanical properties are retained due to high plastic deformation during the fine wire drawing process. The excellent ductility of JDJ’s copper facilitates high speed wire drawing in multiwire drawing machine as well as stranding, bunching, transposing, shielding and tinning.', extra: ["Power Cables",
        "Housing & building wire",
        "Flexible Cables",
        "Cables for Oil & gas industry",
        "Control & instrumentation Cables"]
}, {
    id: '2', image: 'https://i.ibb.co/xDC2Scc/mika-baumeister-Sk-Uk-Z2au-N4-E-unsplash.jpg', name: "Motors", short: 'JDJ’s oxygen free copper possesses a higher electrical and thermal conductivity which supports compact coil design in e-motors in electric vehicles.', long: "The high electrical conductivity helps to carry higher current in rectangular hairpin coils in stator that results higher RPM in the rotor against low energy. Very low oxygen content in the copper facilitate the automatic welding in hairpin stator design.", extra: ["High electrical conductivity",
        "Superior Surface finish",
        "High thermal conductivity",
        "Low surface oxide"]
}, { id: '3', image: 'https://i.ibb.co/HztxfyP/iqram-o-dowla-shawon-Wk2to7-RYKHo-unsplash.jpg', name: "Transformers", short: 'JDJ provide the maximum peace of mind to the transformer designers and operators by minimizing partial discharge & hot spots.', long: "JDJ’s non-insulated copper strips are extensively used by distribution & power transformer manufacturers. JDJ’s continuously extruded copper strip is bright, devoid of any burrs and come with precise corner radius to maintain electrical integrity of the transformer coil during harsh loads with high short circuit demands." }, {
    id: '4', image: 'https://i.ibb.co/3TtcWX4/alternative-21761.jpg', name: "Solar panels", short: 'JDJ’s upcast copper is highly suitable for PV interconnect ribbon and Bus bar ribbon application in solar panel system for its longer life.', long: "The copper conductor helps to collect current from the PV cells in solar panels conveyed to the distribution system or junction box. The upcast copper is well accepted in PV application due to its low yield strength to protect the panel from breakage and high elongation to take care of thermal expansion and contraction due to outdoor temperature variation. The low oxygen content and surface oxides in JDJ’s copper wire ensure better metallic coating for longer life cycle.", extra: ["Low yield strength",
        "High elongation",
        "High ductility",
        "Highest conductivity",
        "Easy coating of metallic tin"]
}, { id: '5', image: 'https://i.ibb.co/dfwr2PY/storm-2496251.jpg', name: "Lightning Protection", short: 'JDJ’s continuously extruded bare copper tape is the brand of choice by the electrical installers & contractors as an earthing conductor for lightning protection.', long: "High conductivity of high purity copper from JDJ provides the security & safety to ever y homeowner in case the lightning strikes." }];

const AllApplications = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const isLight = useSelector((state) => state.colorCode.isLight);

    return (
        <Container maxWidth="7xl" p={{ base: 2, sm: 10 }} overflow={"hidden"}>
            <Breadcrumb spacing='8px' mb={3} pb={5} pl={1} separator={<ChevronRightIcon fontSize={"1.5rem"} color={isLight ? "#36454F" : "whiteSmoke"} />}>
                <BreadcrumbItem>
                    <BreadcrumbLink color={isLight ? "#36454F" : "whiteSmoke"} fontWeight={"bold"} href='/'>HOME</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink fontWeight={"bold"} color={"cornflowerblue"}>APPLICATION</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            {appli_list.map((milestone) => (
                <GetAnimation key={milestone.id} beforeView={`${milestone.id % 2 === 1 ? animateStyle.hiddenLeft : animateStyle.hiddenRight}`} afterView={`${milestone.id % 2 === 1 ? animateStyle.visibleLeft : animateStyle.visibleRight}`}>
                    <Flex mb="10px">
                        {/* Desktop view(left card) */}
                        {isDesktop && milestone.id % 2 === 0 && (
                            <>
                                <EmptyCard />
                                <LineWithDot />
                                <Card {...milestone} />
                            </>
                        )}

                        {/* Mobile view */}
                        {isMobile && (
                            <>
                                <LineWithDot />
                                <Card {...milestone} />
                            </>
                        )}

                        {/* Desktop view(right card) */}
                        {isDesktop && milestone.id % 2 !== 0 && (
                            <>
                                <Card {...milestone} />
                                <LineWithDot />
                                <EmptyCard />
                            </>
                        )}
                    </Flex>
                </GetAnimation>
            ))}
        </Container>
    );
};

const Card = ({ id, name, short, image }) => {
    const isEvenId = id % 2 == 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';

    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        leftValue = '-15px';
        rightValue = 'unset';
        borderWidthValue = '15px 15px 15px 0';
    }

    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.100', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: borderWidthValue,
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
        >
            <Box>
                <Image src={image} alt={name} w="80%" mb={3} rounded="md" />
                <VStack spacing={2} mb={3} textAlign="left">
                    <chakra.h1 color={"#36454F"} fontSize="3xl" lineHeight={1.2} fontWeight="bold" w="100%">
                        {name}
                    </chakra.h1>
                    <Text fontSize="2xl" fontWeight="500" color="gray.500">{short}</Text>
                </VStack>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex
            pos="relative"
            alignItems="center"
            mr={{ base: '40px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    right="0"
                    width="100%"
                    height="100%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    bgColor={"cornflowerblue"}
                    // bg={useColorModeValue('gray.600', 'gray.200')}
                    borderRadius="100px"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default AllApplications;
