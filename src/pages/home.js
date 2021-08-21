import React from "react"
import Layout from "../components/layout"
import PostList from "../components/postlist"
import { SimpleGrid, Container, Box } from "@chakra-ui/react"
//import "./pages.css"
import CardGradient from '../components/cardGradient.js'
import styles from '../styles/Home.module.css'
const dataList = [
    {
        id: "1",
        product: "Product 1",
        summary: "This is a summary, can be any length",
        longLine: "Very short, can be any description",
        bgradient:"linear-gradient(90deg, rgba(66,85,255,1) 0%, rgba(255,109,77,1) 26%, rgba(132,255,159,1) 31%, rgba(228,210,144,1) 35%, rgba(255,90,54,1) 100%)"
    },
    {
        id: "2",
        product: "Product Two",
        summary:
        "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
        longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos",
        bgradient:"linear-gradient(90deg, rgba(228,210,144,1) 0%, rgba(132,255,159,1) 26%, rgba(230,93,252,1) 53%)"
    },
    {
        id: "3",
        product: "Long Product",
        summary: "Finalize them summary, hurry, we are close to deadline",
        longLine: "Wow, this is very descriptive! I wonder how long it is",
        bgradient:"radial-gradient(circle, rgba(132,255,159,1) 0%, rgba(228,210,144,1) 24%, rgba(132,233,255,1) 47%, rgba(255,135,68,1) 76%)"
    }
];

const Home = () => {
    return (
        <div>
            <Layout>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <h1 className={styles.kumarOne}>Mirada Vegetal</h1>
                        <h1 className={styles.spaceGrot}>Mirada Vegetal</h1>

                        <Container   centerContent>
                            <SimpleGrid className={styles.containerCardsGrad} columns={[1]}>
                                {dataList.map(function (data) {
                                    const { id, product, summary, longLine, bgradient } = data;
                                    return (
                                        <CardGradient
                                            key={id}
                                            product={product}
                                            summary={summary}
                                            longLine={longLine}
                                            bgradient={bgradient}
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
    )}
export default Home
