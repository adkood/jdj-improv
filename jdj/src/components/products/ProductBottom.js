import { chakra, Container, Box, Text, SimpleGrid, Flex, Link, useColorModeValue, HStack, Icon } from '@chakra-ui/react';
import { MdOutlineSettingsApplications } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

const features = [
    {
        heading: 'TECHNOLOGIES USED',
        content: 'Choose from Stripe, Paddle, Braintree, or PayPal to launch your product quickly.',
        icon: GrTechnology,
        href: '/technology'
    },
    {
        heading: 'PRODUCT APPLICATIONS',
        content: 'Webhooks are wired up to automatically email customers PDF receipts and invoices.',
        icon: MdOutlineSettingsApplications,
        href: '/applications'
    }
];

const ProductBottom = () => {
    return (
        <Container maxW="6xl" p={{ base: 5, md: 10 }}>
            <chakra.h3 fontSize="3xl" color={"#36454F"} fontWeight="bold" mb={20} textAlign="center">
                DISCOVER THE ESSENCE OF OUR PRODUCTS THROUGH A DUAL LENS.
            </chakra.h3>
            <HStack justifyContent={"center"}>
                {features.map((feature, index) => (
                    <Box key={index} bg="useColorModeValue('gray.100', 'gray.700')" p={6} m={5} rounded="lg" textAlign="center" pos="relative">
                        <Flex w="max-content" color="white" bgGradient="linear(to-br, cornflowerBlue, lightGreen)" rounded="md" marginInline="auto" pos="absolute" left={0} right={0} top="-1.5rem" boxShadow="lg">
                            <Icon as={feature.icon} fontSize={"4.5rem"} />
                        </Flex>
                        <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={10} color={"#36454F"}>
                            {feature.heading}
                        </chakra.h3>
                        <Link href={feature.href} mt={6} fontSize="lg" color="blue.400">
                            VISIT
                        </Link>
                    </Box>
                ))}
            </HStack>
        </Container>
    );
};

export default ProductBottom;
