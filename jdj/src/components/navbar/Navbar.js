'use client'

import { colorCodeToggle } from '@/store';
import Menu from './Menu';
import { Flex, Image, Spacer, Link, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { WiDaySunny } from "react-icons/wi";
import { IoMoonOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {

  const isLight = useSelector((state) => state.colorCode.isLight);
  const dispatch = useDispatch();

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
        height="100%"
        bgColor={`${isLight ? 'gray.200' : '#656261'}`}
        border={"1px solid gray.200"}
      >
        <Flex align="center" mr={5} cursor={"pointer"}>
          <Link href={"/"} p={2}>
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
              color={`${isLight ? '#36454F' : 'white'}`}
              mr={5}
              _hover={{ color: 'cornflowerblue' }}
            >
              Products
            </Link>
            <Link
              href="/applications"
              fontSize="xl"
              color={`${isLight ? '#36454F' : 'white'}`}
              mr={5}
              _hover={{ color: 'cornflowerblue' }}
            >
              Applications
            </Link>
            <Link
              href="/technology"
              fontSize="xl"
              color={`${isLight ? '#36454F' : 'white'}`}
              mr={5}
              _hover={{ color: 'cornflowerblue' }}
            >
              Technology
            </Link>
            <Link
              href="/contact"
              fontSize="xl"
              color={`${isLight ? '#36454F' : 'white'}`}
              _hover={{ color: 'cornflowerblue' }}
            >
              Contact Us
            </Link>
          </Flex>
        )}

        <Spacer />

        {isMobile && <Menu />}

        {isLight && <Flex
          as={IconButton}
          marginLeft={"1.5rem"}
          icon={<WiDaySunny size={"1.8rem"} />}
          variant='outline'
          borderStyle={"none"}
          boxSize="3rem"
          onClick={() => { dispatch(colorCodeToggle()) }}
        />}

        {!isLight && <Flex
          as={IconButton}
          marginLeft={"1.5rem"}
          icon={<IoMoonOutline color={"white"} size={"1.8rem"} />}
          variant='outline'
          borderStyle={"none"}
          boxSize="3rem"
          _hover={{ bgColor: "#656261" }}
          onClick={() => { dispatch(colorCodeToggle()) }}
        />}

      </Flex>
    </Flex>
  );
};

export default Navbar;
