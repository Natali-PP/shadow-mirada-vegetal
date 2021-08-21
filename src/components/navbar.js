import React , { useState }from "react"
import { Link } from "react-router-dom"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Box, Text } from '@chakra-ui/react';
import styles from '../styles/NavBar.module.css' 
const MenuItem = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 2, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
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
      px={4}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h={24}
      bg="transparent"
      color="black"
      className={styles.fixedNav}
    >
      <Box w="200px">
        <Text fontSize="lg" fontWeight="bold">
          Mirada Vegetal
        </Text>
      </Box>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
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
