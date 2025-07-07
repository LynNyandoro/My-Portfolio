'use client'

import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import css from '../Assets/css.svg';
import figma from '../Assets/figma.svg';
import github from '../Assets/github.svg';
import html from '../Assets/html.svg';
import js from '../Assets/js.svg';
import react from '../Assets/react.svg';
import vs from '../Assets/vs.svg';

const Card = ({ icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      textAlign="center"
    >
      <Stack align={'center'} spacing={2}>
        <Flex
          w={24}
          h={24}
          align={'center'}
          justify={'center'}
        >
          {icon}
        </Flex>
      </Stack>
    </Box>
  );
}

export default function Skills() {
  return (
    <Box p={4}>
      <Container maxW={'80%'} mt={5} textAlign={"center"}>
        <Text
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} fontWeight={'bold'} color={'blue.600'} as={'span'} textAlign="left"
        >
          Tools & Frameworks
        </Text>
        <Flex flexWrap="wrap" gridGap={6} justify="center" mt={4}>
          <Card
            icon={<img src={react} alt="react" width={100} height={100} />}
          />
          <Card
            icon={<img src={html} alt="html" width={100} height={100} />}
          />
          <Card
            icon={<img src={js} alt="js" width={100} height={100} />}
          />
          <Card
            icon={<img src={css} alt="css" width={100} height={100} />}
          />
          <Card
            icon={<img src={figma} alt="figma" width={100} height={100} />}
          />
          <Card
            icon={<img src={github} alt="github" width={100} height={100} />}
          />
          <Card
            icon={<img src={vs} alt="vs" width={100} height={100} />}
          />
        </Flex>
    
      </Container>
    </Box>
  );
}
