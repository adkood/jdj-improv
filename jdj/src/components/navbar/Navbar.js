'use client'

import { colorCodeToggle } from '@/store';
import Menu from './Menu';
import { Text } from '@chakra-ui/react';
import { Flex, Image, Spacer, useBreakpointValue, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
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
          <Link href={"/"}>
            <Text p={2}>
              {isLight ? <Image
                src="https://i.ibb.co/FV4d8SY/logo.png"
                alt="Your Logo"
                boxSize="5rem"
              /> : <Image
                src="https://i.ibb.co/FV4d8SY/logo.png"
                alt="Your Logo"
                boxSize="5rem"
                filter="invert(100%)"
              />}
            </Text>
          </Link>
        </Flex>
        <Spacer />

        {!isMobile && (
          <Flex>
            <Link href="/products">
              <Text
                fontSize="xl"
                mr={5}
                color={`${isLight ? '#36454F' : 'white'}`}
                _hover={{ color: 'cornflowerblue' }}
              >
                Products
              </Text>
            </Link>
            <Link href="/technology">
              <Text
                fontSize="xl"
                mr={5}
                color={`${isLight ? '#36454F' : 'white'}`}
                _hover={{ color: 'cornflowerblue' }}
              >
                Technology
              </Text>
            </Link>
            <Link href="/applications">
              <Text
                fontSize="xl"
                mr={5}
                color={`${isLight ? '#36454F' : 'white'}`}
                _hover={{ color: 'cornflowerblue' }}
              >
                Application
              </Text>
            </Link>
            <Link href="/contact-us">
              <Text
                fontSize="xl"
                mr={5}
                color={`${isLight ? '#36454F' : 'white'}`}
                _hover={{ color: 'cornflowerblue' }}
              >
                Contact-Us
              </Text>
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
