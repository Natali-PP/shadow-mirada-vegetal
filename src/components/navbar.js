import React , { useState }from "react"
import { Link } from "react-router-dom"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Box, Text } from '@chakra-ui/react';
import styles from '../styles/NavBar.module.css' 
const MenuItem = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 12}}
      mr={{ base: 0 }}
      display="block"
      className={styles.spaceGrot}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const NavBar = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      py={8}
      //px={4}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h={24}
      //bg={show ? "pink.500" : "transparent"}
      bgGradient={show ? 'linear(to-r, green.200, pink.500)' : 'transparent'}
      //color={show ? "green.300" : "black"}
      color='black'
      className={styles.fixedNav}
    >
      <Box w="200px" px={4}>
        <Text fontSize="lg" fontWeight="bold">
          Mirada Vegetal
        </Text>
      </Box>

      <Box display={{ base: 'block'}} onClick={toggleMenu} px={4}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none'}}
        flexBasis={{ base: '100%'}}
        bgGradient='linear(to-r, green.200, pink.500)'
        color="black"
        fontWeight="bold"
        fontSize="lg"
        //h="99vh"
      >
        <Flex
          align="center"
          justify={['center']}
          //direction={['column', 'row', 'row', 'row']}
          direction={'column'}
          py={[2, 2, 0, 0]}
          h="100vh"
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">Nosotrxs</MenuItem>
          <MenuItem to="/Contacto">Contacto</MenuItem>
          {/*<MenuItem to="/" isLast>
            Search
          </MenuItem>*/}
        </Flex>
      </Box>
    </Flex>
  );
};
export default NavBar
