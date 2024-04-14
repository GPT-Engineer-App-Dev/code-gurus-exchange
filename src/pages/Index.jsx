import { Box, Button, Container, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={6}>
              <Heading as="h1" size="2xl">
                Hire Top Software Talent on Particles
              </Heading>
              <Text fontSize="xl" color="gray.500">
                Particles is the leading marketplace for companies to find and hire specialized software developers in web technologies like React, Node.js, .NET, Go, and JavaScript.
              </Text>
              <Button colorScheme="blue" size="lg" rightIcon={<FaSearch />}>
                View Developer Listings
              </Button>
            </VStack>
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMzA0ODY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Developers working" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Benefits */}
      <Box py={20}>
        <Container maxW="container.lg">
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl">
              Why Hire on Particles?
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box>
                <Image src="https://images.unsplash.com/photo-1427097829427-56a905bf7004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXJhdGVkJTIwcG9vbCUyMGljb258ZW58MHx8fHwxNzEzMDU2MzUxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Curated pool icon" boxSize={20} objectFit="cover" mx="auto" mb={4} />
                <Heading as="h3" size="lg">
                  Curated Developer Pool
                </Heading>
                <Text>Access a curated pool of top software developers.</Text>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1707759642885-42994e023046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZXR0ZWQlMjBkZXZlbG9wZXJzJTIwaWNvbnxlbnwwfHx8fDE3MTMwNTYzNTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vetted developers icon" boxSize={20} objectFit="cover" mx="auto" mb={4} />
                <Heading as="h3" size="lg">
                  Pre-Vetted Developers
                </Heading>
                <Text>Our developers are pre-vetted for their skills and experience.</Text>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1543319885-95d49b7a54d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmbGV4aWJsZSUyMGhpcmluZyUyMGljb258ZW58MHx8fHwxNzEzMDU2MzUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Flexible hiring icon" boxSize={20} objectFit="cover" mx="auto" mb={4} />
                <Heading as="h3" size="lg">
                  Flexible Hiring
                </Heading>
                <Text>Hire developers on a freelance or full-time basis.</Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* How It Works */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl">
              How It Works
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <VStack>
                <Image src="https://images.unsplash.com/photo-1707759642885-42994e023046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicm93c2UlMjBsaXN0aW5ncyUyMGljb258ZW58MHx8fHwxNzEzMDU2MzUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Browse listings icon" boxSize={20} objectFit="cover" mb={4} />
                <Heading as="h3" size="lg">
                  1. Browse Listings
                </Heading>
                <Text>Browse our listings of top software developers.</Text>
              </VStack>
              <VStack>
                <Image src="https://images.unsplash.com/photo-1596526131090-bcbe09e432d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWx0ZXIlMjBkZXZlbG9wZXJzJTIwaWNvbnxlbnwwfHx8fDE3MTMwNTYzNTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Filter developers icon" boxSize={20} objectFit="cover" mb={4} />
                <Heading as="h3" size="lg">
                  2. Filter Developers
                </Heading>
                <Text>Filter developers by skills, location, and more.</Text>
              </VStack>
              <VStack>
                <Image src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaXJlJTIwZGV2ZWxvcGVycyUyMGljb258ZW58MHx8fHwxNzEzMDU2MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hire developers icon" boxSize={20} objectFit="cover" mb={4} />
                <Heading as="h3" size="lg">
                  3. Hire Developers
                </Heading>
                <Text>Contact developers and hire them through Particles.</Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
