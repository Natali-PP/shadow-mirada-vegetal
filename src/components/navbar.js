import React , { useState }from "react"
import { Link } from "react-router-dom"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import styles from '../styles/NavBar.module.css' 
import { motion } from "framer-motion";
import image1 from '../assets/nav-group1.svg';
import image2 from '../assets/nav-group2.svg';
import videoSrc from '../assets/Secuencia 01_3.mp4';
import ojito from '../assets/ojo-negro.png';

const MenuItem = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 12}}
      mr={{ base: 0 }}
      display="block"
      className={styles.spaceGrot1}
      fontSize={["4xl","5xl","6xl"]}
      color="white"
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
      bgGradient={show ? 'linear(to-r, #0b110d, pink.500)' : 'transparent'}
      //color={show ? "green.300" : "black"}
      color='black'
      className={styles.fixedNav}
    >
      <Flex w="300px" px={4} align="center">
        <Image  boxSize="50px" src={ojito} alt="la mirada vegetal image" ></Image>
        <Text fontSize="lg" fontWeight="bold" style={{fontFamily: 'BioRhyme'}}>
          <Link to="/" >La Mirada Vegetal </Link>
        </Text>
      </Flex>

      <Box display={{ base: 'block'}} onClick={toggleMenu} px={4}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none'}}
        flexBasis={{ base: '100%'}}
        //bgGradient='linear(to-r, #0B110D, pink.500)'
        color="black"
        bg
        fontWeight="bold"
        fontSize="3xl"
        //h="99vh"
      >
      <video className={styles.videoFlash} autoPlay loop muted>
          <source src={videoSrc} type='video/mp4' />
      </video>
        {/*<motion.img 
          src={image1} 
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 9 }}
        />*/}
        <Flex
          align="center"
          justify={['center']}
          //direction={['column', 'row', 'row', 'row']}
          direction={'column'}
          py={[2, 2, 0, 0]}
          h="100vh"
          //className={styles.bgFlash}
          //backgroundImage={image1, image2}
          //backgroundPosition={"center","center"}
          //backgroundRepeat="no-repeat"
          //bgSize="cover"
        >
          {/*<MenuItem to="/">Home</MenuItem>*/}
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
