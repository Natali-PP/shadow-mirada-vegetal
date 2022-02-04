import React from "react"
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import Layout from "../components/layout"
import { Text, Box, Flex, Heading, Image } from '@chakra-ui/react'
import flashiada from '../Group.png';
import CardLight from '../components/cardLight.js';
import plant from '../1.png';
import flashiada1 from '../about-group.svg'

const About = () => {
    return (
        <Layout>
            <Box
                backgroundImage={flashiada1}
                backgroundPosition={["center","right"]}
                backgroundRepeat="no-repeat"
                bgSize="cover"
                py={[6,6,8,16]}
            >
            <Flex justify="center" align="center" direction="column">
            <Text mb={6} ml={[4,-56,-56,'19rem']} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','48px']}>¿Que es Mirada Vegetal? </Text>
            <Text mb={6} ml={[14,0,0,-6]} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','48px']}>¿Que es Mirada Vegetal?</Text>
            <Text mb={6} ml={[24,56,56,0]} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','74px']}>¿Que es Mirada Vegetal?</Text>
            <Text mb={6} ml={[4,-56,56,0]} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','74px']}>¿Que es Mirada Vegetal? </Text>
            <Text mb={6} ml={[14,0,0,-6]} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','48px']}>¿Que es Mirada Vegetal?</Text>
                <Text mb={6} ml={[24,56,-56,'19rem']} style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','48px']} >¿Que es Mirada Vegetal?</Text>

                </Flex>
            <Text px={8}>
                <Markdown style={{fontFamily: 'Space Grotesk'}} source={aboutText[0].content} escapeHtml={false} />
            </Text>
            </Box>

            <Box 
                backgroundImage={plant}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                bgSize={["auto","auto","contain"]}
            >
            <Heading mt={[6,4,8]} pt={[0,0,6]} align='center' style={{fontFamily: 'BioRhyme'}} fontSize={['24px','34px','34px','48px']} >Somos Mirada Vegetal</Heading>

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
