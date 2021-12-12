import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack
} from "@chakra-ui/react";
import styles from '../styles/components/cardGradient.module.css'
function CardGradient(props) {
  const { product, summary, longLine, bgradient, image } = props;

  return (
    <Box
      p={4}
      display={{ base: "flex" }}
      flexDirection={{base:"column",md:"row"}}
      align={{ base: "center", md: "stretch" }}
      //maxWidth="8xl"
      //borderWidth={1}
      margin={4}
      bgGradient={bgradient}
      w="90%"
      //h={72}
    >
        <img
          className={styles.imageCover}
          //maxWidth="1000px"
          //margin="auto"
          //src="https://picsum.photos/id/237/250/250"
          src={image}
          alt={product}
          //objetFit="contain"
        />
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize={{ base: "2xl", md: "4xl" }}
          letterSpacing="wide"
          //color="teal.600"
          className={styles.cardText}
        >
          {product}
        </Text>
        <Link
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          {summary}
        </Link>
        <Text my={2} color="gray.700">
          {longLine}
        </Text>
        {/*<Button maxWidth="100px" my={2}>
          Click me!
        </Button>*/}
      </Stack>
    </Box>
  );
}

export default CardGradient;
