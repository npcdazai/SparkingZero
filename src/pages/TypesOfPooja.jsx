import { Box, Image, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import templeImage from "../assets/Images/poojas.png";
import ganeshPoojaImage from "../assets/Images/ganesh-pooja.jpg";
import lakshmiPoojaImage from "../assets/Images/lakshmi-pooja.jpg";
import navagrahaPoojaImage from "../assets/Images/navagraha-pooja.jpg";
import specialPoojaImage from "../assets/Images/saraswati-pooja.jpg"; // Example images for poojas

const TypesOfPooja = () => {
  const poojas = [
    { name: "Ganesh Pooja", image: ganeshPoojaImage },
    { name: "Lakshmi Pooja", image: lakshmiPoojaImage },
    { name: "Navagraha Pooja", image: navagrahaPoojaImage },
    { name: "Saraswati Pooja", image: specialPoojaImage },
    // Additional poojas
    { name: "Durga Pooja", image: ganeshPoojaImage },
    { name: "Shiva Pooja", image: lakshmiPoojaImage },
    { name: "Hanuman Pooja", image: navagrahaPoojaImage },
    { name: "Vishnu Pooja", image: specialPoojaImage },
  ];

  return (
    <Box w="100%" h="100%" py={8} px={6}>
      {/* Temple Image */}
      <Image
        src={templeImage}
        alt="Temple"
        width="100%"
        height={{ base: "300px", md: "500px" }}
        objectFit="cover"
        borderRadius="20px"
        mb={6}
      />

      {/* Heading */}
      <Heading textAlign="left" size="xl" mb={4}>
        Types of Pooja
      </Heading>

      {/* Description */}
      <Text fontSize="md" textAlign="left" mb={6}>
        Our temple offers a variety of poojas to cater to the spiritual needs of our devotees. From daily rituals to special ceremonies, each pooja is performed with utmost devotion and adherence to traditional practices. Some of the popular poojas include Ganesh Pooja, Lakshmi Pooja, and Navagraha Pooja. Each pooja is designed to invoke the blessings of the deities and bring peace, prosperity, and happiness to the devotees.
      </Text>

      {/* Pooja Cards */}
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }} // 2 columns on phone, 3 on tablet, 4 on desktop
        spacing={6}
        mt={8}
      >
        {poojas.map((pooja, index) => (
          <VStack
            key={index}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
            spacing={4}
            h={{ base: "200px", md: "240px", lg: "280px" }} // Proportional height based on the screen size
          >
            <Box w="100%" h={{ base: "160px", md: "190px", lg: "220px" }} overflow="hidden">
              <Image
                src={pooja.image}
                alt={pooja.name}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
            <Text textAlign="left" fontSize={{ base: "sm", md: "md", lg: "lg" }} fontWeight="bold" px={4} w="100%">
              {pooja.name}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TypesOfPooja;
