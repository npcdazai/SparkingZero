import { Box, Text, SimpleGrid, Image, Flex } from "@chakra-ui/react";
import { FaPray, FaCalendarAlt } from "react-icons/fa"; // Icons for each category
import pooja from "../../assets/Images/circlepooja.png";
import circle from "../../assets/Images/cicrclwfes.png";
import { NavLink } from "react-router-dom";

const CategoriesMobile = ({ setLanguage, language }) => {
  const cardData = {
    english: [
      { title: "Pooja", description: "Description for Pooja", imageUrl: pooja, link: "/pooja", icon: FaPray },
      { title: "Festival", description: "Description for Festival", imageUrl: circle, link: "/festival", icon: FaCalendarAlt },
    ],
    hindi: [
      { title: "पूजा", description: "पूजा का विवरण", imageUrl: pooja, link: "/pooja", icon: FaPray },
      { title: "त्यौहार", description: "त्यौहार का विवरण", imageUrl: circle, link: "/festival", icon: FaCalendarAlt },
    ],
  };

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        {language === "english" ? "Categories" : "श्रेणियाँ"}
      </Text>
      <SimpleGrid columns={[1, 2]} spacing={10}>
        {cardData[language].map((category, index) => (
          <Box key={index} borderWidth="1px" borderRadius="20px" overflow="hidden" bg="white">
            <NavLink to={category.link}>
              <Box
                h="180px"
                w="full"
                position="relative"
                overflow="hidden"
                _hover={{ cursor: "pointer", transform: "scale(1.05)", boxShadow: "lg", animation: "scaleUp 0.3s ease-in-out" }}
                transition="transform 0.3s, box-shadow 0.3s"
              >
                <Image src={category.imageUrl} alt={category.title} h="full" w="full" objectFit="cover" />
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
                  <category.icon size="50px" color="white" />
                  <Text as="span" color="white" fontSize="sm" fontWeight="bold">
                    {language === "english" ? "Learn More" : "और जानें"}
                  </Text>
                </Box>
              </Box>
            </NavLink>
            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">
                {category.title}
              </Text>
              <Text fontSize="sm" textAlign="left">
                {category.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CategoriesMobile;
