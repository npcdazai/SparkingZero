import { Box, Flex, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from "../../assets/Images/members/images/mainbab.jpg";
import slider2 from "../../assets/Images/members/images/person1.jpg";
import slider3 from "../../assets/Images/members/images/pp3.jpg";
import slider4 from "../../assets/Images/members/images/pp4.jpg";
import slider5 from "../../assets/Images/members/images/pp5.jpg";
import slider6 from "../../assets/Images/members/images/pp6.jpg";
import slider7 from "../../assets/Images/members/images/pp2.jpg";
import freepik from "../../assets/logos/fix.png";

const EstemedMembers = ({ language }) => {
  const membersData = {
    english: [
      { name: "Acharya Atul Tiwari", role: "Head Administrator", image: slider2 },
      { name: "Anand Tiwari", role: "Treasurer", image: slider3 },
      { name: "Shivam Tiwari", role: "Media Head", image: slider4 },
      { name: "Deepak Shukla", role: "Organisation Minister", image: slider5 },
      { name: "Dhanesh Chandra Dubey", role: "Organisation Minister", image: slider6 },
      { name: "Pradeep Tiwari", role: "Treasurer", image: slider7 },
    ],
    hindi: [
      { name: "आचार्य अतुल तिवारी", role: "प्रबंधक अध्यक्ष", image: slider2 },
      { name: "आनंद तिवारी", role: "कोषाध्यक्ष", image: slider3 },
      { name: "शिवम तिवारी", role: "मीडिया प्रमुख", image: slider4 },
      { name: "दीपक शुक्ला", role: "संगठन मंत्री", image: slider5 },
      { name: "धनेश चंद्र दुबे", role: "संगठन मंत्री", image: slider6 },
      { name: "प्रदीप तिवारी", role: "कोषाध्यक्ष", image: slider7 },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % membersData[language].length);
    }, 5000);
    return () => clearInterval(interval);
  }, [language, membersData]);

  const visibleMembers = [
    membersData[language][currentIndex],
    membersData[language][(currentIndex + 1) % membersData[language].length],
    membersData[language][(currentIndex + 2) % membersData[language].length],
  ];

  const visibleMembersMobile = [
    membersData[language][currentIndex],
    membersData[language][(currentIndex + 1) % membersData[language].length],
  ];

  return (
    <Box
      id="mainmembers"
      bgRepeat="no-repeat"
      flexDirection="column"
      alignItems="center"
      py={6}
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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, transform: "translateX(50px)" }}
            animate={{ opacity: 1, transform: "translateX(0)" }}
            exit={{ opacity: 0, transform: "translateX(-50px)" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.1,
            }}
          >
            <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={{ base: 4, lg: 8 }}>
              {(window.innerWidth <= 768 ? visibleMembersMobile : visibleMembers).map(
                (event, index) => (
                  <VStack gap={4} key={event.name}>
                    <Box
                      h={{ base: "120px", lg: "180px" }}
                      w={{ base: "120px", lg: "180px" }}
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
                      w={{ base: "160px", md: "180px" }}
                    >
                      <Box padding="3">
                        <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="bold" textAlign="left">
                          {event.name}
                        </Text>
                        <Text fontSize={{ base: "xx-small", md: "x-small" }} textAlign="left">
                          {event.role}
                        </Text>
                      </Box>
                    </VStack>
                  </VStack>
                )
              )}
            </SimpleGrid>
          </motion.div>
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default EstemedMembers;
