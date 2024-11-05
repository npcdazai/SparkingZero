import { Box, Button, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FirstCard from "./Ui/Cards/FirstCard";
import SecondCard from "./Ui/Cards/SecondCardo";
import ThirdCard from "./Ui/Cards/ThirdCardo";
import offering from "../assets/Images/cowoffering.png";
import coro from "../assets/Images/coro.png";

const MotionBox = motion(Box);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 10000;

  const items = [
    {
      title: "Pooja 1",
      description: "Description of Pooja 1",
      component: <FirstCard />,
    },
    {
      title: "Pooja 2",
      description: "Description of Pooja 2",
      component: <SecondCard />,
    },
    {
      title: "Pooja 3",
      description: "Description of Pooja 3",
      component: <ThirdCard />,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, intervalTime);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <Box
      position="relative"
      borderRadius="20px"
      overflow="hidden"
      bg="gray.100"
      w="full"
      h="400px" // Set a fixed height
    >
      <MotionBox
        key={currentIndex} // Ensure the box re-renders on index change
        textAlign="center"
        w="100%"
        h="100%"
        position="absolute" // Position absolutely within the parent
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        exit={{ opacity: 0, y: -20 }} // Exit with opacity 0 and translate up
        transition={{ duration: 0.5 }} // Duration for the animation
      >
        {items[currentIndex].component}
      </MotionBox>

      <Button
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={prevSlide}
        borderRadius="full"
        bg="white"
        size="lg"
        p="12px"
        _hover={{ bg: "orange.400" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M15 6l-6 6 6 6" stroke="black" strokeWidth="2" />
        </svg>
      </Button>
      <Button
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={nextSlide}
        borderRadius="full"
        bg="white"
        size="lg"
        p="12px"
        _hover={{ bg: "orange.400" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" />
        </svg>
      </Button>

      {/* Page Indicator */}
      <HStack position="absolute" bottom="20px" left="50%" transform="translateX(-50%)">
        {items.map((_, index) => (
          <Box
            key={index}
            width="10px"
            height="10px"
            borderRadius="full"
            bg={index === currentIndex ? "orange.500" : "gray.300"}
            mx="2px"
          />
        ))}
      </HStack>
    </Box>
  );
};

export default Carousel;
