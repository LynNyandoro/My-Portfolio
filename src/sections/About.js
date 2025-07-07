'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  UnorderedList,
ListItem,
Container,
} from '@chakra-ui/react'

export default function About() {
  return (
    <Container maxW={'80%'} textAlign="center">
    <Stack minH={'10vh'} align={'center'} direction={{ base: 'column', md: 'row' }} bg={{ opacity: 0.1, color: 'blue.600' }}>
      <Flex p={5} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'full'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                opacity: 0.3,
                bg: 'blue.600',
                zIndex: -1,
              }}>
              About 
            </Text>{' '}
            <Text color={'blue.600'} as={'span'}>
               Me
            </Text>{' '}
          </Heading>
          <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
            <Flex flex={2}>
              <Text
                as="p"
                marginTop="2"
                fontSize={{ base: 'xl', lg: '2xl' }}
                color={'gray.500'}
                align={'center'}>
                I am a software engineer with a strong focus on frontend development and a deep appreciation for the full software project lifecycle. I specialize in designing and developing user-friendly, accessible web interfaces, but my approach goes beyond just writing code — I care about how software is planned, built, tested, and delivered. As a developer, I value clarity, consistency, and thoughtful user experiences.
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
    </Container>
  )
}