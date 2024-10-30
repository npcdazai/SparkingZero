import { Box, Text, SimpleGrid, Image} from "@chakra-ui/react";

const AboutUs = () => {
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
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        About Us
      </Text>
      <Text fontSize="2xl" mb="8" textAlign="left">
        We are dedicated to providing spiritual guidance and services through our various rituals and ceremonies. Join us in celebrating and understanding our traditions.
      </Text>
      <SimpleGrid columns={[1, 2, 4]} spacing={10}>
        {cardData.map((card, index) => (
          <Box key={index} borderWidth="1px" borderRadius="20px" overflow="hidden" bg="white">
            <Image src={card.imageUrl} alt={card.title} />
            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">{card.title}</Text>
              <Text fontSize="sm" textAlign="left">{card.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AboutUs;

