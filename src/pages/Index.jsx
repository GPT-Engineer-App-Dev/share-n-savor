import { Container, VStack, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to RecipeShare
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover and share amazing recipes from around the world.
        </Text>
        <Box boxSize="sm" mx="auto">
          <Image src="/images/recipe-hero.jpg" alt="Delicious food" borderRadius="md" />
        </Box>
        <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" alignSelf="center">
          Add Your Recipe
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;