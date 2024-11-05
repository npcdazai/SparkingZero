import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import slider1 from "../../assets/Images/members/images/mainbab.jpg";
import slider2 from "../../assets/Images/members/images/person1.jpg";
import slider3 from "../../assets/Images/members/images/pp3.jpg";
import slider4 from "../../assets/Images/members/images/pp4.jpg";
import slider5 from "../../assets/Images/members/images/pp5.jpg";
import slider6 from "../../assets/Images/members/images/pp6.jpg";
import slider7 from "../../assets/Images/members/images/pp2.jpg";
import freepik from "../../assets/logos/fix.png";

const EstemedMembers = () => {
  const membersData = [
    { name: "Royal Rudra JI Maharaj", role: "Renowned Scholar and Guide", image: slider1 },
    { name: "Acharya Atul Tiwari", role: "प्रबंधक अध्यक्ष (Head Administrator)", image: slider2 },
    { name: "Anand Tiwari", role: "कोषादायाछ (Treasurer)", image: slider3 },
    { name: "Shivam Tiwari", role: "धर्माचार्य (Media Head)", image: slider4 },
    { name: "Deepak Shukla", role: "Organisation minister", image: slider5 },
    { name: "Dhanesh Chandra Dubey", role: "Organisation minister", image: slider6 },
    { name: "Pradeep Tiwari", role: "Treasurer", image: slider7 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % membersData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [membersData.length]);

  const visibleMembers = [
    membersData[currentIndex],
    membersData[(currentIndex + 1) % membersData.length],
    membersData[(currentIndex + 2) % membersData.length],
  ];

  return (
    <Box
      id="mainmembers"
      bgRepeat="no-repeat"
      flexDirection="column"
      alignItems="center"
      py={8}
      bgColor="#ffb75247"
      borderRadius="20px"
      w="100%"
      h="100%"
      overflow="hidden"
      position="relative"
      zIndex={1}
    >
      <Image
        opacity="0.5"
        bottom={0}
        src={freepik}
        zIndex={"-1"}
        w="100%"
        position="absolute"
      />
      <Flex justify="center" w="100%">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {visibleMembers.map((event, index) => (
            <VStack gap={4} key={index}>
              <Box
                h="180px"
                w="180px"
                borderRadius="50%"
                boxShadow="md"
                overflow="hidden"
              >
                <Image h="100%" w="100%" src={event.image} alt={event.name} />
              </Box>
              <VStack
                alignItems="center"
                justifyContent="center"
                borderWidth="1px"
                borderRadius="20px"
                overflow="hidden"
                bg="white"
                w="200px"
              >
                <Box padding="4">
                  <Text fontSize="small" fontWeight="bold" textAlign="left">
                    {event.name}
                  </Text>
                  <Text fontSize="x-small" textAlign="left">
                    {event.role}
                  </Text>
                </Box>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default EstemedMembers;
