import { Box, Container, Flex, Heading, Text, Button, VStack, HStack, SimpleGrid, Input, Textarea, useColorModeValue, Image, Icon, Link } from "@chakra-ui/react";
import { FaHandsHelping, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const backgroundColor = useColorModeValue("purple.50", "gray.800");
  const colorScheme = useColorModeValue("purple", "white");

  return (
    <Box bg={backgroundColor} color={colorScheme}>
      <Container maxW="container.xl" py={10}>
        {/* Header */}
        <Flex justifyContent="space-between" alignItems="center" mb={10}>
          <Heading as="h1" size="xl" letterSpacing={"tighter"}>
            SquawkSquad
          </Heading>
          <HStack spacing={5}>
            <Link href="#about" _hover={{ textDecor: "none" }}>
              About Us
            </Link>
            <Link href="#solutions" _hover={{ textDecor: "none" }}>
              Our Solutions
            </Link>
            <Link href="#get-involved" _hover={{ textDecor: "none" }}>
              Get Involved
            </Link>
            <Link href="#contact" _hover={{ textDecor: "none" }}>
              Contact
            </Link>
          </HStack>
        </Flex>

        {/* Hero Section */}
        <Flex alignItems="center" flexDirection="column" mb={20}>
          <Heading as="h2" size="2xl" mb={4} textAlign="center">
            Innovative Solutions for a Sustainable Future
          </Heading>
          <Text fontSize="xl" mb={8} textAlign="center">
            Join us in tackling environmental and social challenges with cutting-edge approaches.
          </Text>
          <Button colorScheme="purple" size="lg" leftIcon={<FaHandsHelping />}>
            Get Involved
          </Button>
        </Flex>

        {/* About Us Section */}
        <VStack spacing={8} id="about" mb={20}>
          <Heading as="h3" size="lg">
            About Us
          </Heading>
          <Text fontSize="lg" textAlign="center">
            SquawkSquad is dedicated to creating and implementing innovative solutions to the most pressing environmental and social challenges of our time. With a focus on collaboration and sustainability, we strive to make a significant impact.
          </Text>
        </VStack>

        {/* Our Solutions Section */}
        <VStack spacing={8} id="solutions" mb={20}>
          <Heading as="h3" size="lg">
            Our Solutions
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1705129472480-2145aecb9aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aXZlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MDkxNTA4OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            </Box>
            <VStack align="start">
              <Heading size="md">Innovative Technology</Heading>
              <Text>Our cutting-edge technology is designed to address environmental concerns effectively and sustainably.</Text>
            </VStack>
          </SimpleGrid>
        </VStack>

        {/* Get Involved Section */}
        <VStack spacing={8} id="get-involved" mb={20}>
          <Heading as="h3" size="lg">
            Get Involved
          </Heading>
          <Text fontSize="lg">There are many ways to contribute to SquawkSquad's mission. Volunteer, donate, or partner with us to make a difference.</Text>
          <Button colorScheme="purple" size="lg" leftIcon={<Icon as={FaHandsHelping} />}>
            Learn More
          </Button>
        </VStack>

        {/* Contact Section */}
        <Box as="section" id="contact" mb={10}>
          <Heading as="h3" size="lg" mb={8}>
            Contact
          </Heading>
          <VStack spacing={6}>
            <Flex alignItems="center">
              <Icon as={FaEnvelope} mr={2} />
              <Text>contact@squawksquad.org</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={FaPhone} mr={2} />
              <Text>+123 456 7890</Text>
            </Flex>
          </VStack>
          <HStack spacing={4} mt={6}>
            <Icon as={FaFacebook} w={6} h={6} />
            <Icon as={FaTwitter} w={6} h={6} />
            <Icon as={FaLinkedin} w={6} h={6} />
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
