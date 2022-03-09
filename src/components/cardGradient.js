import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import styles from '../styles/components/cardLight.module.css'

import React from 'react'

export default function cardLight(props) {
  return (
    <Center py={6}>
<Link href={props.linkHref} isExternal>
      <Stack
         className={styles.borderGradient}
        //borderWidth="1px"
        //borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        //bg="blue.50"
        boxShadow={'xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={props.imgSrc}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="pink.500"
          px={1}
          py={2}
          //pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'} align="center" p={2} color={'green.300'} >
            {props.name} 
          </Heading>

          <Text
            textAlign={'center'}
            color={'gray.700'}
            px={3}>
            {props.description}
          </Text>
        </Stack>
      </Stack>
      </Link>
    </Center>
  );
}
