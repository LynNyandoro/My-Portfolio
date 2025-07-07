'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  Box,
  useBreakpointValue,
  UnorderedList,
  ListItem,
  Container,
} from '@chakra-ui/react'
import Lyn from '../Assets/Lyn Nyandoro.png'
import { useState, useEffect } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";


export default function Home() {
  // Typewriter effect for the name

  const name = 'Lyn Nyandoro'
  const [displayedName, setDisplayedName] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedName(name.slice(0, currentIndex + 1))
      currentIndex++
      if (currentIndex === name.length) {
        clearInterval(interval)
      }
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const title = 'Software Engineer'
  const [displayedTitle, setDisplayedTitle] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedTitle(title.slice(0, currentIndex + 1))
      currentIndex++
      if (currentIndex === title.length) {
        clearInterval(interval)
      }
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const greeting = 'Hi, I am '
  const [displayedGreeting, setDisplayedGreeting] = useState('')
  const [showHand, setShowHand] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedGreeting(greeting.slice(0, currentIndex + 1))
      currentIndex++
      if (currentIndex === greeting.length) {
        clearInterval(interval)
        setShowHand(true)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Container maxW={'80%'} textAlign="center">
        <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} position="relative" spacing={0}>
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="50%"
            zIndex={0}
            opacity={0.2}
            pointerEvents="none"
          >
            <Blob />
          </Box>
          <Flex p={7} flex={1} zIndex={1} align="flex-start" justify="flex-start">
            <Stack spacing={1} w={'100'} maxW={'lg'} align="flex-start" textAlign="left">
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} textAlign="left">
                <Text color={'gray.800'} fontSize={{ base: '1xl', md: '3xl', lg: '4xl' }} display="flex" alignItems="center" textAlign="left">
                  {displayedGreeting}
                  {showHand && (
                    <span
                      style={{
                        display: 'inline-block',
                        marginLeft: '6px',
                        animation: 'wave 1.5s infinite',
                        transformOrigin: '70% 70%',
                      }}
                      role="img"
                      aria-label="waving hand"
                    >
                      👋
                    </span>
                  )}
                </Text>
                <Text
                  color={'gray.800'}
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '10%', md: '20%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    opacity: 0.3,
                    backgroundColor: 'blue.600',
                    zIndex: -1,
                  }}
                  textAlign="left"
                >
                  {displayedName}
                </Text>
                <br />{' '}
                <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} color={'blue.600'} as={'span'} textAlign="left">
                  {displayedTitle}
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'xl', lg: '2xl' }} color={'gray.500'}>
                Focused on building clean, responsive, and user-friendly web experiences.
                I build with creativity, discipline, and purpose.  
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} pt={5} spacing={1} mt={0}>
                <Button
                  rounded={'full'}
                  bg={'blue.600'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Download Resume
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} zIndex={1} align="center" justify="center" direction="column" m={0} p={0}>
            <Image
              alt={'Login Image'}
              src={Lyn}
              objectFit="contain"
              width={{ base: '300px', sm: '340px', md: '420px', lg: '520px' }}
              height="auto"
              maxW="100%"
              maxH="100%"
              mx="auto"
            />
            <Box
              width={{ base: '200px', sm: '280px', md: '320px', lg: '420px' }}
              height="6px"
              bg="blue.600"
              borderRadius="full"
              boxShadow="sm"
              zIndex={1}
            />
          </Flex>
          <Flex flex={1} direction="column" align="flex-start" justify="center" zIndex={1} p={7} pt={100} m={0}>
            <Text align="left" fontSize={{ base: 'xl', lg: '2xl' }} color={'gray.500'}>
              Here’s what I bring to every project:
            </Text>
            <UnorderedList align={'left'} fontSize={{ base: 'xl', lg: '2xl' }} color={'gray.500'} spacing={1} mt={4} styleType="none" pl={5}>
              <ListItem>
                <Flex align="center">
                  <Box as={GiCheckMark} mr={4} /> Frontend Development
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Box as={GiCheckMark} mr={4} /> Problem Solving
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Box as={GiCheckMark} mr={4} /> Team Collaboration
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Box as={GiCheckMark} mr={4} /> Attention to Detail
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Box as={GiCheckMark} mr={4} /> Software Project Management
                </Flex>
              </ListItem>
            </UnorderedList>
          </Flex>
          <style>
            {`
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
              @keyframes wave {
                0% { transform: rotate(0deg); }
                10% { transform: rotate(14deg); }
                20% { transform: rotate(-8deg); }
                30% { transform: rotate(14deg); }
                40% { transform: rotate(-4deg); }
                50% { transform: rotate(10deg); }
                60% { transform: rotate(0deg); }
                100% { transform: rotate(0deg); }
              }
            `}
          </style>
        </Stack>
      </Container>
    </>
  )
}

const Blob = () => {
  return (
    <Icon
      position="relative"
      top={0}
      left={0}
      // Responsive width and height using Chakra's array syntax
      width={['40vw']}
      height={['10vh']}
      zIndex={-1}
      opacity={0.3}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      pointerEvents="none"
      color="blue.600"
      // Responsive style for mobile overflow
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}