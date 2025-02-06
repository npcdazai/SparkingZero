import { Box, Heading, SimpleGrid, Text, VStack, Icon } from "@chakra-ui/react";
import { FaBook, FaCalendarAlt, FaPray } from "react-icons/fa";
import pooja from "../assets/Images/poojas.png";
import cow from "../assets/Images/cow.png";
import events from "../assets/Images/event.png"
import edu from "../assets/Images/saraswati-pooja.jpg"
import { FaCow } from "react-icons/fa6";

const OurServices = ({ title, des, language }) => {
  const serviceData = [
    {
      title: "Pooja",
      hindiTitle: "पूजा",
      description: "Various Pooja services offered.",
      hindiDescription: "विभिन्न पूजा सेवाएं प्रदान की जाती हैं।",
      imageUrl: pooja,
      icon: FaPray,
    },
    {
      title: "Cow Offering",
      hindiTitle: "गाय दान",
      description: "Community programs for all.",
      hindiDescription: "सभी के लिए सामुदायिक कार्यक्रम।",
      imageUrl: cow,
      icon: FaCow,
    },
    {
      title: "Events",
      hindiTitle: "कार्यक्रम",
      description: "Special events throughout the year.",
      hindiDescription: "साल भर विशेष कार्यक्रम।",
      imageUrl: events,
      icon: FaCalendarAlt,
    },
    {
      title: "Education",
      hindiTitle: "शिक्षा",
      description: "Educational sessions and workshops.",
      hindiDescription: "शैक्षिक सत्र और कार्यशालाएँ।",
      imageUrl: edu,
      icon: FaBook,
    },
  ];

  return (
    <Box textAlign="left" p={8} w="100%">
      <Heading mb={6}>{language === "english" ? title : "हमारी सेवाएँ"}</Heading>
      <Text as={"p"} fontSize="small">
        {language === "english" ? des : "हम आपको विभिन्न सेवाएँ प्रदान करते हैं जो आपकी आवश्यकताओं को पूरा करती हैं।"}
      </Text>
      <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={8} w="100%">
        {serviceData.map((service, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="20px"
            p={8}
            bg="white"
            boxShadow="md"
            w="100%"
            h="100%"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
              animation: "scaleUp 0.3s ease-in-out",
            }}
          >
            <VStack alignItems="flex-start" w="100%">
              <Icon as={service.icon} boxSize={10} color="orange.500" />
              <Text fontWeight="bold" fontSize="lg">
                {language === "english" ? service.title : service.hindiTitle}
              </Text>
              <Text color="gray.600">{language === "english" ? service.description : service.hindiDescription}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OurServices;
