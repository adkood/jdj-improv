'use client'

import React from 'react';
import {
    Box,
    Flex,
    ListItem,
    Link,
    Text
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';


const Footer = () => {
    const isLight = useSelector((state) => state.colorCode.isLight);

    return (
        <Box
            as="footer"
            bg={`${isLight ? 'gray.300' : '#656261'}`}
            borderTop="1px solid"
            borderColor={`${isLight ? 'gray.300' : '#656261'}`}
            py="2.5rem"
            fontSize="0.875rem"
        >
            <Flex maxW="100%" mx="auto" alignItems="center" justifyContent={"space-evenly"} px={10}>
                <Text color={`${isLight ? 'gray.600' : 'white'}`} fontSize="0.9rem" pl="0.1rem" pr="0.5rem">
                    Copyright &copy; 2024 JDJ Private Limited. All rights reserved.
                </Text>

                <Text color={`${isLight ? 'gray.600' : 'white'}`} fontSize="0.9rem" pl="0.5rem" pr="0.1rem">
                    Designed with &hearts; by Adkood
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
