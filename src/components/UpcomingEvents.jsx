import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";
import diwali from "../assets/Images/diwali.png"
import navratri from "../assets/Images/navratri.png"
import community from "../assets/Images/community.png"
import evening from "../assets/Images/evening.png"

const UpcomingEvents = () => {
  const eventData = [
    {
      title: "Diwali Celebration",
      description: "Join us for a grand Diwali celebration with fireworks and festivities.",
      imageUrl: diwali,
    },
    {
      title: "Navratri Festival",
      description: "Nine nights of worship and dance to celebrate Navratri.",
      imageUrl: navratri,
    },
    {
      title: "Community Service",
      description: "Weekly yoga sessions for wellness and mindfulness.",
      imageUrl: community,
    },
    {
      title: "Cultural Evening",
      description: "An evening of music and dance performances by local artists.",
      imageUrl: evening,
    },
  ];

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        Upcoming Events
      </Text>
      <SimpleGrid columns={[1, 2, 4]} spacing={10}>
        {eventData.map((event, index) => (
          <Box key={index} borderWidth="1px" borderRadius="20px" overflow="hidden" bg="white">
            <Image src={event.imageUrl} alt={event.title} />
            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">{event.title}</Text>
              <Text fontSize="sm" textAlign="left">{event.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UpcomingEvents;
