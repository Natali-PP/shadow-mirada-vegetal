import React from "react"
import {Flex,Center,Text} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex align='center' justify='center' py={8}>
            <Center>
            <hr/>
            <Text> Proudly made by Karen y Natali &copy;{new Date().getFullYear()}</Text>
                </Center>
        </Flex>
    )
}

export default Footer
