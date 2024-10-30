import { Box, Text, Image, Flex } from "@chakra-ui/react";

const UpcomingEventsMobile = () => {
  const eventData = [
    {
      title: "Diwali Celebration",
      description: "Join us for a grand Diwali celebration with fireworks and festivities.",
      imageUrl: "https://via.placeholder.com/300x200?text=Diwali",
    },
    {
      title: "Navratri Festival",
      description: "Nine nights of worship and dance to celebrate Navratri.",
      imageUrl: "https://via.placeholder.com/300x200?text=Navratri",
    },
    {
      title: "Community Yoga",
      description: "Weekly yoga sessions for wellness and mindfulness.",
      imageUrl: "https://via.placeholder.com/300x200?text=Yoga",
    },
    {
      title: "Cultural Evening",
      description: "An evening of music and dance performances by local artists.",
      imageUrl: "https://via.placeholder.com/300x200?text=Cultural+Evening",
    },
  ];

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        Upcoming Events
      </Text>
      <Flex overflowX="scroll" paddingBottom="4">
        {eventData.map((event, index) => (
          <Box
            key={index}
            minWidth="250px"
            borderWidth="1px"
            borderRadius="10px"
            overflow="hidden"
            bg="white"
            mr="4" // Add margin between cards
          >
            <Image src={event.imageUrl} alt={event.title} />
            <Box padding="4">
              <Text fontWeight="bold" textAlign="left" fontSize="md">
                {event.title}
              </Text>
              <Text fontSize="sm" textAlign="left">
                {event.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default UpcomingEventsMobile;
