import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import ScannerModal from "./ScannerModal";

const Donation = ({ language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const textContent = {
    english: {
      title: "Support the Temple",
      description: "Your generosity helps us continue our services and community activities.",
      buttonText: "Donate Now",
    },
    hindi: {
      title: "मंदिर का समर्थन करें",
      description: "आपकी उदारता हमें अपनी सेवाओं और सामुदायिक गतिविधियों को जारी रखने में मदद करती है।",
      buttonText: "अब दान करें",
    },
  };

  return (
    <Box textAlign="center" padding="4" bg="gray.50" marginTop="10">
      <Text fontSize="3xl" fontWeight="bold" mb="4">
        {textContent[language]?.title || textContent.english.title}
      </Text>
      <Text fontSize="lg" mb="6">
        {textContent[language]?.description || textContent.english.description}
      </Text>
      <Button 
        onClick={() => setIsModalOpen(true)}
        bgGradient="linear(to-r, #F6B253, #FF9500)"
        color="white"
        size="lg" 
        padding="8"
        paddingLeft="60"
        paddingRight="60" 
        borderRadius="full"
        _hover={{
          bgGradient: "linear(to-r, #FF9500, #F6B253)",
        }}
      >
        {textContent[language]?.buttonText || textContent.english.buttonText}
      </Button>
      <ScannerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default Donation;
