import React, { Suspense } from "react";
import Layout from "../components/layout";
//import PostList from "../components/postlist"
import { SimpleGrid, Container, Box } from "@chakra-ui/react";
//import "./pages.css"
import CardGradient from "../components/cardGradient.js";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Sky, OrbitControls, Html } from "@react-three/drei";
import SphereThing from "../components/shader/SphereThing.js";
import Effects from "../components/shader/Effects.js";
import Hojas from "../styles/largas.png";
import { motion } from "framer-motion";

const dataList = [
  {
    id: "1",
    product: "•Cuerpo Temblor•",
    summary: "10 de septiembre ",
    longLine: "Registro de MANADA SIERRAS CHICAS III edición por @le_grabua. Nuevo encuentro con @anita_linder @valentinbailentin @eva_gou @francosapere. Consultas e inscripciones la.mirada.vegetal@gmail.com",
    bgradient:
      "linear-gradient(90deg, rgba(66,85,255,1) 0%, rgba(255,109,77,1) 26%, rgba(132,255,159,1) 31%, rgba(228,210,144,1) 35%, rgba(255,90,54,1) 100%)",
      image: "./images/card1.jpg",
  },
  {
    id: "2",
    product: "Archivo e imaginarios vivos. El cuerpo habitado que danza",
    summary:
      "Sonoridades del movimiento en la práctica danzada |||Ensanchar e imaginar la lengua. Devenires del Proyecto CepiaAbierto",
    longLine: "",
    bgradient:
      "linear-gradient(90deg, rgba(228,210,144,1) 0%, rgba(132,255,159,1) 26%, rgba(230,93,252,1) 53%)",   
      image: "./images/card2.jpg",
  },
  {
    id: "3",
    product: "Manada sierras chicas iii Edición",
    summary: "Sábado 14 de agosto",
    longLine: "El encuentro consta de dos partes: una practica guiada de movimiento y un momento de improvisación colectiva. Todxs les presentes podrán participar de ambos segmentos.",
    bgradient:
      "radial-gradient(circle, rgba(132,255,159,1) 0%, rgba(228,210,144,1) 24%, rgba(132,233,255,1) 47%, rgba(255,135,68,1) 76%)",      
      image: "./images/card3.jpg",
  },
];

const Home = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <Canvas camera={{ position: [15, 15, 20] }}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Suspense fallback={null}>
                            <SphereThing position={[10, 10, 10]} />

                            <Html>
                                <p
                                    style={{
                                        margin: 0,
                                        align: "center",
                                        transform: "translate(-48%, -50%)",
                                        color: "black",
                                        letterSpacing: "10px",
                                        fontFamily: 'Kumar One',
                                                    //fontFamily: "Space Grotesk",
                                        fontSize: "150px",
                                        pointerEvents: "none",
                                    }}
                                >
                                    Mirada Vegetal
                                </p>
                            </Html>
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
              <image style={{ filter: "blur(5px)" }} href={Hojas}></image>
            </svg>
            <Container centerContent>
              <SimpleGrid className={styles.containerCardsGrad} columns={[1]}>
                {dataList.map(function (data, index) {
                  const { id, product, summary, longLine, bgradient, image} = data;
                  return (
                    <CardGradient
                      key={id}
                      product={product}
                      summary={summary}
                      longLine={longLine}
                      bgradient={bgradient}
                       image={image} 
                    />
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
