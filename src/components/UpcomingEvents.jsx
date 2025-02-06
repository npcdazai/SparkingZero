import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import diwali from "../assets/Images/diwali.png";
import navratri from "../assets/Images/navratri.png";
import community from "../assets/Images/community.png";
import evening from "../assets/Images/evening.png";
import kalash from "../assets/Images/new_Images/kalsh.png";

const UpcomingEvents = ({ setLanguage, language }) => {
  const eventData = {
    english: [
      {
        title: "Diwali Celebration",
        description: "Join us for a grand Diwali celebration with fireworks and festivities.",
        imageUrl: diwali,
        link: "/festivals",
      },
      {
        title: "Navratri Festival",
        description: "Nine nights of worship and dance to celebrate Navratri.",
        imageUrl: navratri,
        link: "/festivals",
      },
      {
        title: "Community Service",
        description: "Weekly yoga sessions for wellness and mindfulness.",
        imageUrl: community,
        link: "/event",
      },
      {
        title: "Cultural Evening",
        description: "An evening of music and dance performances by local artists.",
        imageUrl: evening,
        link: "/event",
      },
    ],
    hindi: [
      {
        title: "दीवाली उत्सव",
        description: "पटाखों और उत्सवों के साथ हमारे भव्य दीवाली उत्सव में शामिल हों।",
        imageUrl: diwali,
        link: "/festivals",
      },
      {
        title: "नवरात्रि महोत्सव",
        description: "नवरात्रि को मनाने के लिए नौ रातों की पूजा और नृत्य।",
        imageUrl: navratri,
        link: "/festivals",
      },
      {
        title: "सामुदायिक सेवा",
        description: "स्वस्थ जीवन और मानसिक शांति के लिए साप्ताहिक योग सत्र।",
        imageUrl: community,
        link: "/event",
      },
      {
        title: "सांस्कृतिक संध्या",
        description: "स्थानीय कलाकारों द्वारा संगीत और नृत्य प्रदर्शन की एक शाम।",
        imageUrl: evening,
        link: "/event",
      },
    ],
  };

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        {language === "english" ? "Upcoming Events" : "आगामी कार्यक्रम"}
      </Text>
      <SimpleGrid columns={[1, 2, 4]} spacing={10}>
        {eventData[language].map((event, index) => (
          <Box key={index} borderWidth="1px" borderRadius="20px" overflow="hidden" bg="white">
            <Box
              h="180.34"
              w="240"
              position="relative"
              overflow="hidden"
              _hover={{ cursor: "pointer", transform: "scale(1.05)", boxShadow: "lg", animation: "scaleUp 0.3s ease-in-out" }}
              transition="transform 0.3s, box-shadow 0.3s"
            >
              <NavLink to={event.link}>
                <Image src={event.imageUrl} alt={event.title} h="full" w="full" objectFit="cover" />
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
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ opacity: 1 }}
                >
                  <Image h="100px" src={kalash} />
                  <Text as="span" color="white" fontSize="sm" fontWeight="bold">
                    {language === "english" ? "Learn More" : "और जानें"}
                  </Text>
                </Box>
              </NavLink>
            </Box>
            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">
                {event.title}
              </Text>
              <Text fontSize="sm" textAlign="left">
                {event.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UpcomingEvents;
