import { Box, Button, Flex, Heading, HStack, StackProps, Text, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import {CheckIcon} from '../components/Icon'
export const ListItem = (props: StackProps) => {
  const {children, ...rest} = props;
  return(
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px"  />
      <Text>{children}</Text>
    </HStack>
  )
}

export default function Pricing() {
  return (
    <Box maxW="994px" mx={{base:'20px', lg:'auto'}} mt="-150px" bg='white' boxShadow="box-shadow: 0px 10px 10px -5px #0000000A; box-shadow: 0px 20px 25px -5px #0000001A;" borderRadius="12px" overflow="hidden" >
        <Flex direction={{base:'column', lg:'row'}}>
            <Box textAlign="center" bg="#F0EAFB" p="64px">
                <Text fontSize="24px" fontWeight="800">Premium PRO</Text>
                <Heading as="h3" fontSize="60px" fontWeight="800" mt="16px">$329</Heading>
                <Text fontSize="18px" fontWeight="500" mt="8px">billed just once</Text>
                <Button colorScheme="purple" size="lg" w='282px' mt="24px" fontSize="16px">Get Started</Button>
            </Box>

            <Box p="60px" fontSize="18px">
              <Text>Access these features when you get this pricing package for your business.</Text>
              <Stack as={'ul'} pt="20px" >
                <ListItem>International calling and messaging API</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated messages via Zapier</ListItem>
                <ListItem>24/7 support and consulting</ListItem>
              </Stack>
            </Box>
        </Flex>

    </Box>
  )
}
