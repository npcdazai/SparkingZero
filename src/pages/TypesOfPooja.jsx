import {
  Box,
  Image,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import templeImage from "../assets/Images/poojas.png";

import ganeshpuja from "../assets/Images/Poojas/ganeshpuja.png";
import laximpuja from "../assets/Images/Poojas/laximpuja.png";
import puja from "../assets/Images/Poojas/puja.png";
import saraswatipuja from "../assets/Images/Poojas/Saraswatipuja.png";
import humanpuja from "../assets/Images/Poojas/humanpuja.png";
import shivpuja from "../assets/Images/Poojas/shivpuja.png";
import CommonCard from "../components/Ui/CommonCard";

const cardData = [
  {
    title: "Ganesh Pooja",
    imageUrl: ganeshpuja,
    link: "/pooja-offering",
  },
  {
    title: "Laxim Pooja",
    imageUrl: laximpuja,
    link: "/pooja-offering",
  },
  {
    title: "Saraswati Pooja",
    imageUrl: saraswatipuja,
    link: "/pooja-offering",
  },
  {
    title: "Hanuman Pooja",
    imageUrl: humanpuja,
    link: "/pooja-offering",
  },
  {
    title: "Navagraha Pooja ",
    imageUrl: puja,
    link: "/pooja-offering",
  },
  { title: "Shiva Pooja", imageUrl: shivpuja, link: "pooja-offering" },
];

const TypesOfPooja = () => {
  return (
    <Box w="100%" h="100%" py={8} px={6}>
      {/* Temple Image */}
      <Image
        src={templeImage}
        alt="Temple"
        width="100%"
        height="400px"
        objectFit="cover"
        borderRadius="20px"
        mb={6}
      />

      {/* Heading */}
      <Heading textAlign="left" size="lg" mb={4}>
        Types of Pooja
      </Heading>

      {/* Description */}
      <Text fontSize="sm" textAlign="left" mb={4}>
        Our temple offers a variety of poojas to cater to the spiritual needs of
        our devotees. From daily rituals to special ceremonies, each pooja is
        performed with utmost devotion and adherence to traditional practices.
        Some of the popular poojas include Ganesh Pooja, Lakshmi Pooja, and
        Navagraha Pooja. Each pooja is designed to invoke the blessings of the
        deities and bring peace, prosperity, and happiness to the devotees.
      </Text>

      {/* Pooja Cards */}

      <CommonCard cardData={cardData} />
    </Box>
  );
};

export default TypesOfPooja;
