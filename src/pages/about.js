import React from "react"
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import Layout from "../components/layout"
import { Text, Box, Flex, Heading, Image } from '@chakra-ui/react'
import flashiada from '../Group.png';
import CardLight from '../components/cardLight.js';
import plant from '../1.png';

const About = () => {
    return (
        <Layout>
            <Box
                backgroundImage={flashiada}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                py={6}
            >
            <Text mb={6} ml={4} style={{fontFamily: 'BioRhyme'}} fontSize='24px'>¿Que es Mirada Vegetal? </Text>
            <Text mb={6} ml={14} style={{fontFamily: 'BioRhyme'}} fontSize='24px'>¿Que es Mirada Vegetal?</Text>
            <Text mb={6} ml={24} style={{fontFamily: 'BioRhyme'}} fontSize='24px'>¿Que es Mirada Vegetal?</Text>
            <Text mb={6} ml={4} style={{fontFamily: 'BioRhyme'}} fontSize='24px'>¿Que es Mirada Vegetal? </Text>
            <Text mb={6} ml={14} style={{fontFamily: 'BioRhyme'}} fontSize='24px'>¿Que es Mirada Vegetal?</Text>
            <Text mb={6} ml={24} style={{fontFamily: 'BioRhyme'}} fontSize='24px'>¿Que es Mirada Vegetal?</Text>
            </Box>
            <Text px={8}>
                <Markdown source={aboutText[0].content} escapeHtml={false} />
            </Text>

            <Box 
                backgroundImage={plant}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
            >
            <Heading mt={6} align='center'>Somos Mirada Vegetal</Heading>

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
