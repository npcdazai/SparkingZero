import { Box, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

const Membership = ({ setLanguage, language }) => {
  return (
    <Box marginTop="10" padding={{ base: 1, lg: 6 }} bg="gray.50" textAlign="center">
      {/* Header */}
      <Text fontSize="3xl" fontWeight="bold" mb="4">
        {language === "english" ? "Become a Member" : "सदस्य बनें"}
      </Text>

      {/* Description */}
      <Text fontSize="lg" mb="6">
        {language === "english"
          ? "Join our community and stay connected with all our events and offerings. Become a part of something meaningful and contribute to our spiritual journey."
          : "हमारे समुदाय से जुड़ें और हमारे सभी इवेंट्स और सेवाओं के साथ संपर्क में रहें। कुछ सार्थक का हिस्सा बनें और हमारे आध्यात्मिक यात्रा में योगदान दें।"}
      </Text>

      {/* Button with gradient background */}
      <SimpleGrid columns={1} spacing={6} justifyItems="center">
        <Button
          bgGradient="linear(to-r, #F6B253, #FF9500)"
          color="white"
          size="lg"
          padding="8"
          width="60%"
          borderRadius="full"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          {language === "english" ? "Become a Member" : "सदस्य बनें"}
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default Membership;
