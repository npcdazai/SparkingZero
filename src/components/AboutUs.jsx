import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import pooja from "../assets/Images/pooja.png";
import diwali from "../assets/Images/diwali.png";
import program from "../assets/Images/program.png";
import event from "../assets/Images/event.png";
const AboutUs = () => {
  const cardData = [
    {
      title: "Pooja",
      description: "Description for Pooja",
      imageUrl: pooja,
    },
    {
      title: "Festival",
      description: "Description for Festival",
      imageUrl: diwali,
    },
    {
      title: "Program",
      description: "Description for Ceremony",
      imageUrl: program,
    },
    {
      title: "Event",
      description: "Description for Event",
      imageUrl: event,
    },
  ];

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        About Us
      </Text>
      <Text fontSize="medium" mb="8" textAlign="left">
        We are dedicated to providing spiritual guidance and services through
        our various rituals and ceremonies. Join us in celebrating and
        understanding our traditions.
      </Text>
      <SimpleGrid columns={[1, 2, 4]} spacing={10}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="20px"
            overflow="hidden"
            bg="white"
          >
            <Box
              h="180.34"
              w="240"
              position="relative"
              overflow="hidden"
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                boxShadow: "lg",
                animation: "scaleUp 0.3s ease-in-out",
              }}
              transition="transform 0.3s, box-shadow 0.3s"
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                h="full"
                w="full"
                objectFit="cover"
              />

              <Box
                position="absolute"
                top="0"
                left="0"
                h="full"
                w="full"
                bg="rgba(0, 0, 0, 0.5)"
                opacity="0"
                transition="opacity 0.3s ease-in-out"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ opacity: 1 }}
              >
                <Text color="white" fontSize="lg" fontWeight="bold">
                  Learn More
                </Text>
              </Box>
            </Box>

            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">
                {card.title}
              </Text>
              <Text fontSize="sm" textAlign="left">
                {card.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AboutUs;
