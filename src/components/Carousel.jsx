import { Box, Button, Text, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import FirstCard from "./Ui/Cards/FirstCard";
import offering from "../assets/Images/cowoffering.png"
import coro from "../assets/Images/coro.png"
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 10000; 

  const items = [
    {
      title: "Pooja 1",
      description: "Description of Pooja 1",
      imageUrl: "https://via.placeholder.com/600x300?text=Pooja+1",
      component: <FirstCard />,
    },
    {
      title: "Pooja 2",
      description: "Description of Pooja 2",
      imageUrl: offering,
    },
    {
      title: "Pooja 3",
      description: "Description of Pooja 3",
      imageUrl: coro,
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
    >
      <Box
        as="img"
        src={items[currentIndex].imageUrl}
        width="100%"
        height="400px"
        objectFit="cover"
      />
      <Box
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        textAlign="center"
        w="100%"
        height="100%"
      >
        {items[currentIndex].component}
      </Box>

      {/* Navigation Buttons */}
      <Button
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={prevSlide}
        borderRadius="full"
        bg="white"
        size="lg"
        padding="12px"
        _hover={{ bg: "orange" }}
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
        padding="12px"
        _hover={{ bg: "orange" }}
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