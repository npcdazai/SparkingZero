import { Box, Heading, SimpleGrid, Text, VStack, Icon } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa6";
import { MdPeopleAlt , MdEvent } from "react-icons/md";
import { GiPrayer } from "react-icons/gi";

const OurServices = () => {
  const services = [
    { icon: GiPrayer, title: "Pooja", description: "Various Pooja services offered." },
    { icon: MdPeopleAlt, title: "Programs", description: "Community programs for all." },
    { icon: MdEvent, title: "Events", description: "Special events throughout the year." },
    { icon: FaGraduationCap, title: "Education", description: "Educational sessions and workshops." },
  ];

  return (
    <Box textAlign="left" p={8}>
      <Heading mb={6}>Our Services</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {services.map((service, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="20px"
            p={8}
            bg="white"
            boxShadow="md"
          >
            <VStack>
              <Icon as={service.icon} boxSize={10} color="orange.500" />
              <Text fontWeight="bold" fontSize="lg">{service.title}</Text>
              <Text color="gray.600">{service.description}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OurServices;
