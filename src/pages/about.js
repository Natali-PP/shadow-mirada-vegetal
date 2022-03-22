import React from "react"
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import Layout from "../components/layout"
import { Text, Box, Flex, Image } from '@chakra-ui/react'
import flashiada from '../Group.png';
import CardLight from '../components/cardLight.js';
import plant from '../1.png';
import flashiada1 from '../about-group.svg'
import { motion } from "framer-motion";
import styles from '../styles/About.module.css';
import flashiadaCircular from '../assets/nosotres-group-circular.svg'

const About = () => {
    return (
        <Layout>
            <Box 
                className={styles.main}
                //backgroundImage={plant}
                //backgroundPosition="center"
                //backgroundRepeat="no-repeat"
                //bgSize={["auto","auto","contain"]}
            >
            <Box
                backgroundImage={flashiadaCircular}
                backgroundPosition={["center","right"]}
                backgroundRepeat="no-repeat"
                bgSize="cover"
                py={[6,6,0,0]}
            >
            <Flex justify="center" align="center" direction="column">
            <Text mb={6} ml={[-4,-56,-56,'19rem']} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','48px']}>¿Que es La Mirada Vegetal? </Text>
            <Text mb={6} ml={[10,0,0,-6]} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','48px']}>¿Que es La Mirada Vegetal?</Text>
            <Text mb={6} ml={[-8,56,56,0]} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','74px']}>¿Que es La Mirada Vegetal?</Text>
            <Text mb={6} ml={[-8,-56,56,0]} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','74px']}>¿Que es La Mirada Vegetal? </Text>
            <Text mb={6} ml={[10,0,0,-6]} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','48px']}>¿Que es La Mirada Vegetal?</Text>
                <Text mb={6} ml={[-4,56,-56,'19rem']} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','48px']} >¿Que es La Mirada Vegetal?</Text>

                </Flex>
            <Text px={8}>
                <Markdown style={{fontFamily: 'Space Grotesk'}} source={aboutText[0].content} escapeHtml={false} />
            </Text>
            </Box>


            <svg
              viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <defs>
                <linearGradient
                  id="goldenGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop offset="5%" stopColor="gold" />
                  <stop offset="95%" stopColor="red" />
                </linearGradient>
                <linearGradient id="redBlue" gradientTransform="rotate(45)">
                  <stop offset="5%" stopColor="blue" />
                  <stop offset="95%" stopColor="red" />
                </linearGradient>
                <linearGradient id="cyanYellow" gradientTransform="rotate(45)">
                  <stop offset="5%" stopColor="#FFBB0D" />
                  <stop offset="95%" stopColor="#3BC5CE" />
                </linearGradient>
              </defs>
              <filter id="blurMe">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
              </filter>
              <motion.circle
                style={{ filter: "blur(65px)" }}
                r="12%"
                cx="50%"
                cy="20%"
                fill="#7CCE7F"//verde
                filter="url(#blurMe)"
                animate={{ cx: "95%", cy: "75%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 23,
                }}
              />
              <motion.circle
                style={{ filter: "blur(75px)" }}
                r="12%"
                cx="80%"
                cy="50%"
                fill="#E65DFC"
                filter="url(#blurMe)"
                animate={{ cx: "15%", cy: "25%"}}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 13,
                }}
              />
                <motion.circle
                style={{ filter: "blur(85px)" }}
                r="12%"
                cx="20%"
                cy="50%"
                fill="url('#cyanYellow')"
                filter="url(#blurMe)"
                animate={{ cx: "55%", cy: "75%"}}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 13,
                }}
              />
                <motion.circle
                style={{ filter: "blur(85px)" }}
                r="12%"
                cx="80%"
                cy="20%"
                fill="#949EFF"
                filter="url(#blurMe)"
                animate={{ cx: "90%", cy: "85%"}}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 13,
                }}
              />
              <image style={{ filter: "blur(5px)" }} href={plant}></image>
            </svg>
            <Text mt={[6,4,8]} pt={[0,0,6]} align='center' style={{fontFamily: 'BioRhyme'}} 
                fontSize="2xl"
                //fontSize={['24px','34px','34px','48px']} 
            >Somos La Mirada Vegetal</Text>

            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Nombre Apellido'
                linkHref='https://chakra-ui.com'
                linkContent='@instagram'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor sem eu interdum tincidunt. Mauris venenatis eleifend arcu sed aliquam'
            />


            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Nombre Apellido'
                linkHref='https://chakra-ui.com'
                linkContent='@instagram'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor sem eu interdum tincidunt. Mauris venenatis eleifend arcu sed aliquam'
            />
            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Nombre Apellido'
                linkHref='https://chakra-ui.com'
                linkContent='@instagram'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor sem eu interdum tincidunt. Mauris venenatis eleifend arcu sed aliquam'
            />
            </Box>

        </Layout>
    )
}

export default About
