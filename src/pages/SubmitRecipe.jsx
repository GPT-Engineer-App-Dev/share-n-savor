import { useState } from "react";
import ReactStars from "react-rating-stars-component"; // Import ReactStars
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel, Image } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0); // Add state for rating

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, ingredients, instructions, image, rating });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Submit Your Recipe
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe Title" />
            </FormControl>
            <FormControl id="ingredients" isRequired>
              <FormLabel>Ingredients</FormLabel>
              <Textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="List of ingredients" />
            </FormControl>
            <FormControl id="instructions" isRequired>
              <FormLabel>Instructions</FormLabel>
              <Textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Step-by-step instructions" />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Image</FormLabel>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              {image && <Image src={image} alt="Recipe" boxSize="sm" mt={4} />}
            </FormControl>
            <FormControl id="rating">
              <FormLabel>Rating</FormLabel>
              <ReactStars
                count={5}
                onChange={setRating}
                size={24}
                activeColor="#ffd700"
                value={rating}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" alignSelf="center">
              Submit Recipe
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default SubmitRecipe;