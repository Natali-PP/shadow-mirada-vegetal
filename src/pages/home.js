import React, { Suspense } from "react";
import Layout from "../components/layout";
//import PostList from "../components/postlist"
import { SimpleGrid, Container, Box, Text } from "@chakra-ui/react";
//import "./pages.css"
import CardGradient from "../components/cardGradient.js";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Sky, OrbitControls, Html } from "@react-three/drei";
import SphereThing from "../components/shader/SphereThing.js";
import Effects from "../components/shader/Effects.js";
import Hojas from "../styles/largas.png";
import { motion } from "framer-motion";
import useWindowDimensions from '../utils/useWindowDimensions.js'
import CardLight from '../components/cardLight.js';

const dataList = [
  {
    id: "1",
    title: "•Cuerpo Temblor•",
    summary: "Registro de MANADA SIERRAS CHICAS III edición por @le_grabua. Nuevo encuentro con @anita_linder @valentinbailentin @eva_gou @francosapere. Consultas e inscripciones la.mirada.vegetal@gmail.com",
    bgradient:
      "linear-gradient(90deg, rgba(66,85,255,1) 0%, rgba(255,109,77,1) 26%, rgba(132,255,159,1) 31%, rgba(228,210,144,1) 35%, rgba(255,90,54,1) 100%)",
      image: "./images/card1.jpg",
  },
  {
    id: "2",
    title: "Archivo e imaginarios vivos. El cuerpo habitado que danza",
    summary:
      "Sonoridades del movimiento en la práctica danzada |||Ensanchar e imaginar la lengua. Devenires del Proyecto CepiaAbierto",
    bgradient:
      "linear-gradient(90deg, rgba(228,210,144,1) 0%, rgba(132,255,159,1) 26%, rgba(230,93,252,1) 53%)",   
      image: "./images/card2.jpg",
  },
  {
    id: "3",
    title: "Manada sierras chicas iii Edición",
    summary: "El encuentro consta de dos partes: una practica guiada de movimiento y un momento de improvisación colectiva. Todxs les presentes podrán participar de ambos segmentos.",
    bgradient:
      "radial-gradient(circle, rgba(132,255,159,1) 0%, rgba(228,210,144,1) 24%, rgba(132,233,255,1) 47%, rgba(255,135,68,1) 76%)",      
      image: "./images/card3.jpg",
  },
];

const setFontWidth = (width) =>{
    if (width<520) return "100px"
    else if (width>521 && width<1000) return "110px" 
    else return "150px"
}

const calcTop = (width) =>{
    if (width<520) return "-37vh"
    else if (width>521 && width<1000) return "-35vh" 
    else return "150px"
}
const calcLeft = (width) =>{
    if (width<520) return "-60vh"
    else if (width>521 && width<1000) return "-35vh" 
    else return "150px"
}

const Home = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      <Layout>
        <div className={styles.container}>
            <div style={{position:'absolute', display:'flex',alignItems:'center',justifyContent:'center',
                top:window.innerWidth > 800? '45vh': '38vh'}}><p
                                    style={{
                                        margin: 0,
                                        align: "center",
                                        textAlign: "center",
                                        //transform: "translate(-48%, -50%)",
                                        color: "black",
                                        //letterSpacing: "10px",
                                        fontFamily:'VT323',
                                        //fontFamily: 'Kumar One',
                                                    //fontFamily: "Space Grotesk",
                                        //fontSize: `${width<520} ? "70px" : ${width>521 && width<1000} ? "120px": "150px" }`,
                                        fontSize: `${setFontWidth(width)}`,
                                        //fontSize: `5rem`,
                                        pointerEvents: "none",
                                        //position:'absolute',
                                        //top:`-${setFontWidth(width)}`,
                                        //left:`-${setFontWidth(width)}`,
                                        //zIndex:2,
                                        whiteSpace: window.innerWidth > 800? 'nowrap' : ''  ,
                                    }}
                                >
                                   LA MIRADA VEGETAL 
                                </p>

            </div>
          <Canvas camera={{ position: [15, 15, 20] }}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Suspense fallback={null}>
                            <SphereThing position={[10, 10, 10]} />

                            {/*<Html
                                style={{
                                    position:'absolute', 
                                    //top:window.innerWidth < 800?`calc(-35vh + ${setFontWidth(width)})` : `calc(-25vh + ${setFontWidth(width)})`,
                                    //left:window.innerWidth < 1000?`calc(-60vw + ${setFontWidth(width)})`: '-35vw',
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'center',
                                }}
                            >
                                <div>
                                <p
                                    style={{
                                        margin: 0,
                                        align: "center",
                                        textAlign: "center",
                                        //transform: "translate(-48%, -50%)",
                                        color: "black",
                                        //letterSpacing: "10px",
                                        fontFamily:'VT323',
                                        //fontFamily: 'Kumar One',
                                                    //fontFamily: "Space Grotesk",
                                        //fontSize: `${width<520} ? "70px" : ${width>521 && width<1000} ? "120px": "150px" }`,
                                        fontSize: `${setFontWidth(width)}`,
                                        //fontSize: `5rem`,
                                        pointerEvents: "none",
                                        //position:'absolute',
                                        //top:`-${setFontWidth(width)}`,
                                        //left:`-${setFontWidth(width)}`,
                                        //zIndex:2,
                                        whiteSpace: window.innerWidth > 800? 'nowrap' : ''  ,
                                    }}
                                >
                                   LA MIRADA VEGETAL 
                                </p>
                                    </div>
                            </Html>*/}
                        </Suspense>
                        <OrbitControls
                            minPolarAngle={Math.PI / 10}
                            maxPolarAngle={Math.PI / 1.5}
                        />
                        <Effects />
            </Canvas>
          <main className={styles.main}>
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
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              </filter>
              <motion.circle
                style={{ filter: "blur(6px)" }}
                r="5%"
                cx="50%"
                cy="20%"
                fill="url('#redBlue')"//verde
                //filter="url(#blurMe)"
                animate={{ cx: "95%", cy: "75%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 23,
                }}
              />
              <motion.circle
                style={{ filter: "blur(6px)" }}
                r="1%"
                cx="10%"
                cy="10%"
                fill="#7CCE7F"//verde
                //filter="url(#blurMe)"
                animate={{ cx: "5%", cy: "75%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 23,
                }}
              />
                <motion.circle
                style={{ filter: "blur(6px)" }}
                r="10%"
                cx="50%"
                cy="72%"
                fill="url('#goldenGradient')"//verde
                //filter="url(#blurMe)"
                animate={{ cx: "90%", cy: "90%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 23,
                }}
              />
              <motion.circle
                style={{ filter: "blur(7px)" }}
                r="2%"
                cx="80%"
                cy="50%"
                fill="#E65DFC"
                //filter="url(#blurMe)"
                animate={{ cx: "15%", cy: "25%"}}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 13,
                }}
              />
                <motion.circle
                style={{ filter: "blur(8px)" }}
                r="2%"
                cx="20%"
                cy="50%"
                fill="url('#cyanYellow')"
                //filter="url(#blurMe)"
                animate={{ cx: "55%", cy: "75%"}}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 13,
                }}
              />
                <motion.circle
                style={{ filter: "blur(8px)" }}
                r="2%"
                cx="80%"
                cy="20%"
                fill="#949EFF"
                //filter="url(#blurMe)"
                animate={{ cx: "90%", cy: "85%"}}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  duration: 13,
                }}
              />
                <image ml={[0,0,80]} style={{ filter: "blur(5px)", marginLeft:"15vw" }} href={Hojas}></image>
            </svg>
            <Container centerContent>
                <Text fontSize='4xl' style={{fontFamily: 'BioRhyme'}}>Próximas Actividades</Text>
              <SimpleGrid className={styles.containerCardsGrad} columns={[1]}>
                {dataList.map(function (data, index) {
                  const { id, title, summary, bgradient, image} = data;
                  return (
                      <CardGradient
                        key={id}
                        imgSrc={image}
                        name={title}
                        linkHref='https://chakra-ui.com'
                        linkContent='@instagram'
                        description={summary}
                    />
                    /*<CardLight
                        key={id}
                        imgSrc={image}
                        name={product}
                        linkHref='https://chakra-ui.com'
                        linkContent='@instagram'
                        description={summary}
                    />*/
                  );
                })}
              </SimpleGrid>
            </Container>
          </main>
        </div>
        {/*<PostList />*/}
      </Layout>
    </div>
  );
};
export default Home;
