import { Container, VStack, Heading, Text, Box, Image, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaPlus } from "react-icons/fa";
import ReactStars from "react-rating-stars-component"; // Import ReactStars

const Index = () => {
  // Sample data for recipes
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      image: "/images/recipe-hero.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Chicken Curry",
      description: "A flavorful and spicy chicken curry made with a blend of aromatic spices.",
      image: "/images/recipe-hero.jpg",
      rating: 4.0,
    },
  ];

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to RecipeShare
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover and share amazing recipes from around the world.
        </Text>
        {recipes.map((recipe) => (
          <Box key={recipe.id} boxSize="sm" mx="auto" borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src={recipe.image} alt={recipe.title} />
            <Box p={4}>
              <Heading as="h2" size="md">{recipe.title}</Heading>
              <Text mt={2}>{recipe.description}</Text>
              <HStack mt={2}>
                <Text>Rating:</Text>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={recipe.rating}
                  edit={false}
                />
              </HStack>
            </Box>
          </Box>
        ))}
        <Button as={Link} to="/submit-recipe" leftIcon={<FaPlus />} colorScheme="teal" size="lg" alignSelf="center">
          Add Your Recipe
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;