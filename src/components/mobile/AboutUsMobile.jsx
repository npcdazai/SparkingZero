import { Box, Text, Image, Flex } from "@chakra-ui/react";

const AboutUsMobile = () => {
  const cardData = [
    {
      title: "Pooja",
      description: "Description for Pooja",
      imageUrl: "https://via.placeholder.com/300x200?text=Pooja",
    },
    {
      title: "Festival",
      description: "Description for Festival",
      imageUrl: "https://via.placeholder.com/300x200?text=Festival",
    },
    {
      title: "Ceremony",
      description: "Description for Ceremony",
      imageUrl: "https://via.placeholder.com/300x200?text=Ceremony",
    },
    {
      title: "Event",
      description: "Description for Event",
      imageUrl: "https://via.placeholder.com/300x200?text=Event",
    },
  ];

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="2xl" fontWeight="bold" mb="4" textAlign="left">
        About Us
      </Text>
      <Text fontSize="lg" mb="8" textAlign="left">
        We are dedicated to providing spiritual guidance and services through our various rituals and ceremonies. Join us in celebrating and understanding our traditions.
      </Text>
      
      <Flex overflowX="scroll" paddingBottom="4">
        {cardData.map((card, index) => (
          <Box
            key={index}
            minWidth="250px"
            borderWidth="1px"
            borderRadius="10px"
            overflow="hidden"
            bg="white"
            mr="4"  // Add margin between cards
          >
            <Image src={card.imageUrl} alt={card.title} />
            <Box padding="4">
              <Text fontWeight="bold" textAlign="left" fontSize="md">
                {card.title}
              </Text>
              <Text fontSize="sm" textAlign="left">
                {card.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default AboutUsMobile;
