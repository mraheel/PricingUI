import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { icon1 } from './icons/icon1'
import {icon2} from './icons/icon2'
import { icon3 } from './icons/icon3'

export default function Features() {
  return (
    <Box maxW="954px" m="auto" mt="40px">
        <Flex direction={{base:'column', lg:'row'}} px="50px">
        <HStack  spacing="20px" mb="20px">
            <Icon as={icon1} />
            <Text fontWeight="700" fontSize="18px" lineHeight="24px" pl="10px">30 days money 
            back Guarantee</Text>
        </HStack>
        <HStack spacing="20px" mb="20px">
            <Icon as={icon2} />
            <Text fontWeight="700" fontSize="18px" lineHeight="24px" pl="10px">No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack spacing="20px" mb="20px">
            <Icon as={icon3} />
            <Text fontWeight="700" fontSize="18px" lineHeight="24px" pl="10px">No monthly subscription Pay once and for all</Text>
        </HStack>
        </Flex>
    </Box>
  )
}
