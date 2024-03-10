'use client'

import Menu from './Menu';
import { Flex, Image, Spacer, Link, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { WiDaySunny } from "react-icons/wi";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      width="100%"
      align="center"
      justifyContent="center"
      as="nav"
      wrap="wrap"
      position="fixed"
      height="10vh"
      zIndex={5}
    >
      <Flex
        align="center"
        width="100%"
        paddingLeft={isMobile ? '1rem' : '2.5rem'}
        paddingRight={isMobile ? '1rem' : '2.5rem'}
        borderRadius={isMobile ? '' : '0px 0px 10px 10px'}
        height="100%"
        bgColor="gray.200"
        border={"1px solid gray.200"}
      >
        <Flex align="center" mr={5} cursor={"pointer"}>
          <Link href={"/"}>
            <Image
              src="https://i.ibb.co/FV4d8SY/logo.png"
              alt="Your Logo"
              boxSize="5rem"
            />
          </Link>
        </Flex>
        <Spacer />

        {!isMobile && (
          <Flex>
            <Link
              href="/products"
              fontSize="xl"
              color="#36454F"
              mr={5}
              _hover={{ color: 'cornflowerblue' }}
            >
              Products
            </Link>
            <Link
              href="/applications"
              fontSize="xl"
              color="#36454F"
              mr={5}
              _hover={{ color: 'cornflowerblue' }}
            >
              Applications
            </Link>
            <Link
              href="/technology"
              fontSize="xl"
              color="#36454F"
              mr={5}
              _hover={{ color: 'cornflowerblue' }}
            >
              Technology
            </Link>
            <Link
              href="/contact"
              fontSize="xl"
              color="#36454F"
              _hover={{ color: 'cornflowerblue' }}
            >
              Contact Us
            </Link>
          </Flex>
        )}

        <Spacer />

        {isMobile && <Menu />}
        <Flex
          as={IconButton}
          marginLeft={"1.5rem"}
          icon={<WiDaySunny size={"1.7rem"} />}
          variant='outline'
          boxSize="3rem"
        />

      </Flex>
    </Flex>
  );
};

export default Navbar;
