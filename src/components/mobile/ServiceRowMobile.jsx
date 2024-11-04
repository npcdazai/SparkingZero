import { Box, Flex, Text, Image } from "@chakra-ui/react";

const ServicesRowMobile = () => {
  const serviceData = [
    {
      title: "Pooja",
      description: "Various Pooja services offered.",
      imageUrl: "https://via.placeholder.com/300x200?text=Diwali",
    },
    {
      title: "Programs",
      description: "Community programs for all.",
      imageUrl: "https://via.placeholder.com/300x200?text=Navratri",
    },
    {
      title: "Events",
      description: "Special events throughout the year.",
      imageUrl: "https://via.placeholder.com/300x200?text=Yoga",
    },
    {
      title: "Education",
      description: "Educational sessions and workshops.",
      imageUrl: "https://via.placeholder.com/300x200?text=Cultural+Evening",
    },
  ];

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        Our Services
      </Text>
      <Flex overflowX="scroll" paddingBottom="4">
        {serviceData.map((service, index) => (
          <Box
            key={index}
            minWidth="250px" // Minimum width for each card
            borderWidth="1px"
            borderRadius="20px"
            overflow="hidden"
            bg="white"
            mr="4" // Margin between cards
          >
            <Image src={service.imageUrl} alt={service.title} />
            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">{service.title}</Text>
              <Text fontSize="sm" textAlign="left">{service.description}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ServicesRowMobile;