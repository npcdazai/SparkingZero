import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { FaPray, FaCalendarAlt } from "react-icons/fa"; // Icons for each category

const Categories = () => {
  const categories = [
    {
      title: "Pooja",
      description: "Description for Pooja",
      imageUrl: "https://via.placeholder.com/100?text=Pooja",
      icon: FaPray,
    },
    {
      title: "Festival",
      description: "Description for Festival",
      imageUrl: "https://via.placeholder.com/100?text=Festival",
      icon: FaCalendarAlt,
    },
  ];

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        Categories
      </Text>
      {categories.map((category, index) => (
        <Flex
          key={index}
          borderWidth="1px"
          borderRadius="20px"
          overflow="hidden"
          bg="white"
          padding="4"
          alignItems="center"
          mb="6"
          boxShadow="md"
        >
          {/* Image on the left side */}
          <Image
            src={category.imageUrl}
            alt={category.title}
            boxSize="100px"
            borderRadius="full"
            marginRight="6"
          />

          {/* Text in the middle, left-aligned */}
          <Box flex="1" textAlign="left">
            <Text fontSize="2xl" fontWeight="bold">
              {category.title}
            </Text>
            <Text fontSize="md">{category.description}</Text>
          </Box>

          {/* Icon on the right side */}
          <Box>
            <category.icon size="30px" />
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Categories;