import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import eventbanner from "../assets/Images/eventbanner.png";
import puja from "../assets/Images/new_Images/pujaEvent.jpg";
import parsad from "../assets/Images/new_Images/parsadevent.jpg";
import marriage from "../assets/Images/new_Images/marriage.jpg";
import kalash from "../assets/Images/new_Images/kalsh.png";

const Events = ({ language }) => {
  const cardData = {
    english: [
      {
        title: "Puja",
        description: "Discover indispensable facts about motivation in these paragraphs.",
        imageUrl: puja,
        link: "/puja"
      },
      {
        title: "Prasad Distribution",
        description: "Learn about the distribution of prasad during events.",
        imageUrl: parsad,
        link: "/prasad"
      },
      {
        title: "Marriage Ceremony",
        description: "Join us in celebrating this beautiful ceremony.",
        imageUrl: marriage,
        link: "/marriage"
      },
    ],
    hindi: [
      {
        title: "पूजा",
        description: "पूजा के बारे में जानकारी",
        imageUrl: puja,
        link: "/puja"
      },
      {
        title: "प्रसाद वितरण",
        description: "समारोहों के दौरान प्रसाद वितरण के बारे में जानें",
        imageUrl: parsad,
        link: "/prasad"
      },
      {
        title: "विवाह समारोह",
        description: "हमारे साथ इस सुंदर समारोह का हिस्सा बनें",
        imageUrl: marriage,
        link: "/marriage"
      },
    ],
  };

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        {language === "english" ? "Upcoming Events" : "आगामी इवेंट्स"}
      </Text>
      <Text fontSize="medium" mb="8" textAlign="left">
        {language === "english"
          ? "Join us for these special events and be part of the spiritual celebrations."
          : "इन विशेष आयोजनों में हमारे साथ जुड़ें और आध्यात्मिक उत्सवों का हिस्सा बनें।"}
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {cardData[language].map((event, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="20px"
            overflow="hidden"
            bg="white"
            _hover={{ cursor: "pointer", transform: "scale(1.05)", boxShadow: "lg", animation: "scaleUp 0.3s ease-in-out" }}
            transition="transform 0.3s, box-shadow 0.3s"
          >
            <NavLink to={event.link}>
              <Box h="180px" w="full" position="relative" overflow="hidden">
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
              </Box>
            </NavLink>
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

export default Events;
