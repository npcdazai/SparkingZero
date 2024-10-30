import { Box, Text, Button } from "@chakra-ui/react";

const Membership = () => {
  return (
    <Box marginTop="10" padding="6" bg="gray.50" textAlign="center">
      {/* Header */}
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb="4">
        Become a Member
      </Text>

      {/* Description */}
      <Text fontSize={{ base: "md", md: "lg" }} mb="6">
        Join our community and stay connected with all our events and offerings. Become a part of something meaningful and contribute to our spiritual journey.
      </Text>

      {/* Button with gradient background */}
      <Button 
        bgGradient="linear(to-r, #F6B253, #FF9500)"
        color="white"
        size="lg" 
        width={{ base: "100%", md: "60%" }}  // Make button full width on mobile, 60% on desktop
        paddingY="8"  // Vertical padding
        borderRadius="full"
      >
        Become a Member
      </Button>
    </Box>
  );
};

export default Membership;
