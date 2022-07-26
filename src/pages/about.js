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
                <Text px={32} py={0}style={{fontFamily: 'Space Grotesk',fontSize:"1.15rem",marginTop:"5rem"}}>
                <Markdown  source={aboutText[0].about} escapeHtml={false} />
            </Text>
            <Text mt={[6,4,8]} pt={[0,0,6]} align='center' style={{fontFamily: 'BioRhyme'}} 
                fontSize="2xl"
                //fontSize={['24px','34px','34px','48px']} 
            >Somos La Mirada Vegetal</Text>

            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Florencia Stalldecker'
                linkHref='https://www.instagram.com/florencia_stalldecker'
                linkContent='@instagram'
                description='Es bailarina, docente, coreógrafa  y gestora independiente. Su trabajo en artes del movimiento atiende a procesos y dispositivos de improvisación escénica que tienen como disparador las tensiones entre prácticas de movimiento y prácticas de escritura. Investiga actualmente cuadernos de coreógrafxs: repertorio y archivo en danzas contemporáneas de Córdoba (FFyh- UNC). Activa y diseña prácticas ensambladas entre corporalidad, plantaciones y escrituras en el proyecto LA MIRADA VEGETAL junto a María Paula del Prato y diferentes artistas  en Sierras Chicas, Córdoba. Coordina el Programa de Danza y Performance 2022 en el Centro Cultural España Córdoba; fue coordinadora de la Residencia artística Suspender el Suelo junto a Prácticas Compartidas (Festival Danzafuera, La Plata); y de la Residencia Bandera de Agua II junto a Lucas Cánepa (Thigra, Rosario). A lo largo de su trayectoria obtuvo premios del Fondo Nacional de las Artes (FNA) y Agencia Córdoba Cultura, apoyos para la creación y una Beca de Formación y Perfeccionamiento del Instituto Nacional de Teatro (INT). Fue admitida en el Máster de Práctica escénica y Cultura Visual en el Reina Sofía (Madrid) edición 2021. Participó como bailarina y coreógrafa en diferentes Festivales en Córdoba (Festival Internacional del Mercosur, Pulso Urbano, La Menage), Buenos Aires (FIBA), Bruselas (Festival Puentes) y Viena (TanzTag.13)'
            />
            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Celia Argüello'
                linkHref='https://chakra-ui.com'
                linkContent='@instagram'
                description='Es Licenciada en Composición Coreográfica (UNA). Cursa seminarios de posgrado dentro de la Maestría en Prácticas Artísticas Contemporáneas del Instituto de Artes Mauricio Kagel de la UNSAM. Trabaja como bailarina, coreógrafa en sus propios proyectos y en colaboración con diferentes artistas. Como docente desarrolla el Laboratorio de movimiento, espacio de formación e investigación de herramientas corporales y conceptuales sobre el movimiento. Ha recibido premios y subsidios de F.N.A, el INT, Prodanza y Bienal de Arte Joven por distintos proyectos. Dentro de sus trabajos se encuentra Azúcar, Villa Argüello, De como estar con otros, Proyecto Diógenes, Cucha. Trabaja como coreógrafa en obras teatrales como Parias de Guillermo Cacace, Tiestes y Atreo de E.G Webhi, Tadeys de Analía Couceyro y Albertina Carri, Turba de Alejandra Fletchner, La Comedia es Peligrosa de Ciro Zorzoli. Actualmente trabaja en colaboración con Pedro Pablo (artista venezolane con base en Minneapolis, EE.UU) y como bailarina en Invocación XI: Pina Bausch dirigida por Diana Szeinblum a estrenarse en el Teatro Nacional Cervantes.'
            />
            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Cecilia Priotto'
                linkHref='https://chakra-ui.com'
                linkContent='@instagram'
                description='Es bailarina, directora/ coreógrafa y docente. Egresada del Profesorado de Teatro Roberto Arlt y de la Lic. En Arte y Gestión Cultural (UPC). Maestranda en Dirección Teatral (UNICEN). En combinación con su experiencia y formación se ha desempeñado en roles como intérprete y directora en ámbitos independientes locales, nacionales e internacionales en Artes escénicas. Gestiona el espacio La casa de las Bestias. Es docente en las carreras de Lic. en Composición Coreográfica (UPC-Cba) en Técnicas de la Danza Contemporánea II y III de la Lic. En Arte Escénico (UNLaR), en las cátedras de Dirección Escénica y Práctica Escénica y en el Prof. De Teatro Roberto Arlt en la cátedra Cuerpo y Movimiento III. Desarrolló y gestionó espacios y proyectos de formación artística en escena para bailarines como Espacio Da Capo (Cba). '
            />
            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Juliana Di Blasio'
                linkHref='https://chakra-ui.com'
                linkContent='@instagram'
                description='Vive y trabaja en Córdoba desde hace poco más de 20 años. Es Comunicadora Social, egresada de la Facultad de Ciencias de la Información de la Universidad Nacional de Córdoba. Actualmente trabaja en el Área de Comunicación de la Facultad de Ciencias Económicas de la UNC, donde también coordina el proyecto Galerías, un espacio de exposición de artistas que busca ampliar lenguajes y temáticas para la comunidad universitaria. Es fotógrafa apasionada por el registro del cuerpo, los detalles y las texturas. A través de este lenguaje intenta responder las preguntas más íntimas sobre quién es  y cómo siente el mundo.'
            />
            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Belén Ghioldi'
                linkHref='https://chakra-ui.com'
                linkContent='@instagram'
                description='Es bailarina, docente, coreógrafa y cantante. Técnica Superior en Métodos Dancísticos, egresada de la Universidad Provincial de Córdoba. Integrante del Elenco Municipal de Danza Teatro de la Municipalidad de Córdoba. Es parte de la Compañía Altibajos Constante Movimiento, el proyecto musical “Cosa de Todxs” junto a Paola Bernal, el equipo interdisciplinario #Protocol.map y del proyecto de investigación “Archivo e imaginarios vivos. El cuerpo habitado que danza.”'
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
                name='Karen Palacio'
                linkHref='https://instagram.com/kardaver'
                linkContent='@instagram'
                description='Es live coder, programadora y artista digital de Córdoba Capital. Es diplomada en Ciencias de Datos del FaMAFyC, estudia la Lic. en Ciencias de la Computación en el FaMAFyC y trabaja como A.I. Software Architect en una empresa de software de Córdoba Capital. Como live coder de visuales ha hecho performances de improvisación de código en encuentros de noise, conferencias de tecnología, museos, y fiestas electrónicas -entre otros lugares- llegando a programar hasta 5 horas seguidas en vivo. Su trabajo está centrado en una visión feminista de la tecnología, pensando el lugar de las mujeres como pioneras en la experiencia encarnada de lo digital, lo algorítmico y lo computacional. En sus procesos artísticos usa y desarrolla Software Libre, y resemantiza tecnologías que conoce de su trayectoria laboral como programadora en la industria del Software'
            />
            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Jimena Aldana'
                linkHref='https://portfolio-natali-pp.vercel.app/'
                linkContent='Portafolio'
                description='Lic. en Comunicación Social, diseñadora y artista visual. Desarrolla su actividad artística en múltiples campos, a partir de diálogos entre lo digital y lo analógico y las huellas que van quedando en esos tránsitos. Trabaja bajo la idea de mushup visuales, en un intento de gestionar la enorme cantidad existente de información disponible. Sus intereses giran en torno al diálogo entre arte y ciencia, la visualización de datos  y el uso de tecnologías protéticas en la creación de imágenes. Aborda diálogos entre memorias artificiales y memorias humanas y sus producciones se componen de videos, collages, objetos e instalaciones. Desde 2015 realiza muestras individuales y colectivas en la ciudad de Córdoba y en otras ciudades argentinas.'
            />
            <CardLight
                imgSrc='https://images.pexels.com/photos/2530808/pexels-photo-2530808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                name='Natalí Palacio'
                linkHref='https://www.instagram.com/jime_aldana_/'
                linkContent='@instagram'
                description='Es programadora creativa y diseñadora cordobesa. Se especializó en el desarrollo frontend, con 2 años de experiencia laboral diseñando e implementando interfaces y soluciones web en la industria del software. Tiene interés por la programación creativa, el uso de 3d en la web y shaders. Es diplomada en Ciencias de Datos en FaMAFyC- UNC y c ursó Ingeniería Industrial en la FCEFyN - UNC.'
            />
            </Box>

        </Layout>
    )
}

export default About
