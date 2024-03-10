import React from 'react';
import {
    Box,
    Flex,
    ListItem,
    Link,
    Text
} from '@chakra-ui/react';

import { CiHeart } from "react-icons/ci";

const Footer = () => {
    return (
        <Box
            as="footer"
            bg="gray.300"
            borderTop="1px solid"
            borderColor="gray.300"
            py="2.5rem"
            fontSize="0.875rem"
        >
            <Flex maxW="100%" mx="auto" alignItems="center" justifyContent={"space-evenly"} px={10}>
                <Text color="gray.600" fontSize="1rem" pl="0.5rem">
                    Copyright &copy; 2024 JDJ Private Limited. All rights reserved.
                </Text>

                <Text color="gray.600" fontSize="1rem" pl="0.5rem">
                    Designed with &hearts; by Adkood
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
