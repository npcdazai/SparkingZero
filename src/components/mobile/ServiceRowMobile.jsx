import { Box, SimpleGrid, Text, Image, VStack } from "@chakra-ui/react";
import pooja from "../../assets/Images/poojas.png";
import cow from "../../assets/Images/cow.png";
import events from "../../assets/Images/event.png";
import edu from "../../assets/Images/saraswati-pooja.jpg";

const ServicesRowMobile = ({ des, title, language }) => {
  const serviceData = [
    {
      title: "Pooja",
      description: "Various Pooja services offered.",
      imageUrl: pooja,
    },
    {
      title: "Cow Offering",
      description: "Community programs for all.",
      imageUrl: cow,
    },
    {
      title: "Events",
      description: "Special events throughout the year.",
      imageUrl: events,
    },
    {
      title: "Education",
      description: "Educational sessions and workshops.",
      imageUrl: edu,
    },
  ];

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <VStack mb={6} alignItems="flex-start">
        <Text fontSize="2xl" fontWeight="bold" mb="4" textAlign="left">
          {language === "english" ? title : "हमारी सेवाएँ"}
        </Text>
        <Text fontSize="medium" color="261501">
          {language === "english"
            ? des
            : "हम आपको विभिन्न सेवाएँ प्रदान करते हैं जो आपकी आवश्यकताओं को पूरा करती हैं।"}
        </Text>
      </VStack>
      <SimpleGrid columns={[1, 2, 4]} spacing={10}>
        {serviceData.map((service, index) => (
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
                src={service.imageUrl}
                alt={service.title}
                h="full"
                w="full"
                objectFit="cover"
              />
            </Box>
            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">
                {language === "english" ? service.title : "पुजा"} {/* Modify this for Hindi title if necessary */}
              </Text>
              <Text fontSize="sm" textAlign="left">
                {language === "english" ? service.description : "विवरण"} {/* Modify this for Hindi description */}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServicesRowMobile;
