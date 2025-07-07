import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  Box,
  Button,
  Center,
  List,
  ListIcon,
  ListItem,
  Avatar,
  Image,
  Flex,
  VStack,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  Container,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const CustomRightArrow = ({ onClick }) => (
  <Button
    onClick={onClick}
    style={{
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: useColorModeValue("rgba(54, 55, 149, 0.5)", "rgba(35, 33, 93, 0.5)"),
      color: 'white',
      borderRadius: '50%',
      padding: '10px',
    }}
  >
    →
  </Button>
);

const CustomLeftArrow = ({ onClick }) => (
  <Button
    onClick={onClick}
    style={{
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: useColorModeValue("rgba(54, 55, 149, 0.5)", "rgba(35, 33, 93, 0.5)"),
      color: 'white',
      borderRadius: '50%',
      padding: '10px',
    }}
  >
    ←
  </Button>
);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ServiceCard = ({ title, image, description, tag, link }) => (
  <Box p={4}>
    <Box
      maxW={'445px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
      <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Image
          src={image}
          objectFit="cover"
          w="100%"
          h="100%"
          alt={title}
        />
      </Box>
      <Stack>
        <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}>
          {tag}
        </Text>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}>
          {title}
        </Heading>
        <Text color={'gray.500'}>
          {description}
        </Text>
      </Stack>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Button
          as="a"
          href={link}
          target="_blank"
          colorScheme="blue"
          variant="outline"
          size="sm">
          View Project
        </Button>
      </Stack>
    </Box>
  </Box>
);

// Example data for each card
const projects = [
  {
    title: "Branding for Startups",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description: "A complete branding solution for new businesses, including logo, color palette, and brand guidelines.",
    tag: "Branding",
    link: "https://your-branding-project-link.com"
  },
  {
    title: "E-commerce Website",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    description: "A modern, responsive e-commerce platform with integrated payment and inventory management.",
    tag: "Web Development",
    link: "https://your-ecommerce-project-link.com"
  },
  {
    title: "Creative Packaging Design",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Unique and sustainable packaging designs that make your product stand out on the shelves.",
    tag: "Packaging",
    link: "https://your-packaging-project-link.com"
  }
];

const Projects = ({ deviceType }) => (
  <Box p={4}>
    <Stack spacing={4} as={Container} maxW={'80%'} textAlign={"center"}>
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        <Text color={'blue.600'} as={'span'}>
          My
        </Text>{' '}
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
          Projects
        </Text>{' '}
      </Heading>
      <Text as="p"
        marginTop="2"
        fontSize={{ base: 'xl', lg: '2xl' }}
        color={'gray.500'}
        align={'center'}>
        We have a wide variety of services which include: Branding, Graphic Design, Printing, Packaging, and other services such as website design, copywriting, consultations.
      </Text>
    </Stack>
    <Container maxW={"7xl"} mt={5}>
      <Carousel
        swipeable
        draggable
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== 'mobile'}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 0.5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {projects.map((project, idx) => (
          <ServiceCard key={idx} {...project} />
        ))}
      </Carousel>
    </Container>
  </Box>
);

export default Projects;
