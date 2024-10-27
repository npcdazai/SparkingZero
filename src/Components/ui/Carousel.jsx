// import React, { useState, useEffect } from "react";
// import home from "../../assets/icons/members.png";
// import {
//   Box,
//   Text,
//   Button,
//   IconButton,
//   Image,
//   Stack,
//   Flex,
// } from "@chakra-ui/react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const slides = [
//   {
//     title: "KBCC PROJECT",
//     subtitle: "AN OPPORTUNITY TO SERVE SRILA PRABHUPADA",
//     description:
//       "This is a historical development that promises to provide better facilities for devotees worldwide and it will enhance the preaching of Sanatan Dharma.",
//     imgSrc: home,
//     accommodations: [
//       <Flex key="1" alignItems="center" justifyContent="flex-end">
//         <Text fontSize="xl" mr={3}>🏨</Text>
//         <Text>World Class Accomodation</Text>
//       </Flex>,
//       <Flex key="2" alignItems="center" justifyContent="flex-end">
//         <Text fontSize="xl" mr={3}>🙏</Text>
//         <Text>Kirtan & Darshan</Text>
//       </Flex>,
//       <Flex key="3" alignItems="center" justifyContent="flex-end">
//         <Text fontSize="xl" mr={3}>🛏️</Text>
//         <Text>Comfortable Room</Text>
//       </Flex>,
//     ],
//     buttonLabel: "Book Your Room",
//   },
//   {
//     title: "KBCC PROJECT",
//     subtitle: "AN OPPORTUNITY TO SERVE SRILA PRABHUPADA",
//     description:
//       "This is a historical development that promises to provide better facilities for devotees worldwide and it will enhance the preaching of Sanatan Dharma.",
//     imgSrc: home,
//     accommodations: [
//       <Flex key="1" alignItems="center" justifyContent="flex-end">
//         <Text fontSize="xl" mr={3}>🏨</Text>
//         <Text>World Class Accomodation</Text>
//       </Flex>,
//       <Flex key="2" alignItems="center" justifyContent="flex-end">
//         <Text fontSize="xl" mr={3}>🙏</Text>
//         <Text>Kirtan & Darshan</Text>
//       </Flex>,
//       <Flex key="3" alignItems="center" justifyContent="flex-end">
//         <Text fontSize="xl" mr={3}>🛏️</Text>
//         <Text>Comfortable Room</Text>
//       </Flex>,
//     ],
//     buttonLabel: "Book Your Room",
//   },
//   // Add more slides here...
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // To go to the next slide
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // To go to the previous slide
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   // Autoplay (optional): Change slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000); // 5 seconds for each slide
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <Box
//       maxWidth="800px"
//       margin="auto"
//       mt={5}
//       p={5}
//       bg="purple.50"
//       borderRadius="lg"
//       overflow="hidden"
//     >
//       <Box position="relative">
//         {/* Slide Content */}
//         {slides.map((slide, index) => (
//           <Flex
//             key={index}
//             display={index === currentIndex ? "flex" : "none"}
//             alignItems="center"
//             justifyContent="space-between"
//             transition="ease-in-out"
//             transitionDuration="0.5s"
//           >
//             {/* Left Text Area */}
//             <Box>
//               <Text fontSize="2xl" fontWeight="bold">
//                 {slide.title}
//               </Text>
//               <Text fontSize="lg" mt={2}>
//                 {slide.subtitle}
//               </Text>
//               <Text fontSize="md" mt={2} color="gray.600">
//                 {slide.description}
//               </Text>
//               <Button mt={5} colorScheme="purple">
//                 {slide.buttonLabel}
//               </Button>
//             </Box>

//             {/* Right Image and Accommodations */}
//             <Box textAlign="right">
//               <Image
//                 src={slide.imgSrc}
//                 alt={slide.title}
//                 width="200px"
//                 height="200px"
//                 borderRadius="full"
//                 objectFit="cover"
//                 mb={5}
//               />
//               <Stack spacing={3}>
//                 {slide.accommodations.map((accom) => accom)}
//               </Stack>
//             </Box>
//           </Flex>
//         ))}

//         {/* Navigation Buttons */}
//         <IconButton
//           icon={<FaArrowLeft />}
//           position="absolute"
//           top="50%"
//           left="0"
//           transform="translate(0, -50%)"
//           aria-label="Previous Slide"
//           onClick={prevSlide}
//           colorScheme="purple"
//         />
//         <IconButton
//           icon={<FaArrowRight />}
//           position="absolute"
//           top="50%"
//           right="0"
//           transform="translate(0, -50%)"
//           aria-label="Next Slide"
//           onClick={nextSlide}
//           colorScheme="purple"
//         />
//       </Box>

//       {/* Dots for navigation */}
//       <Flex justifyContent="center" mt={4}>
//         {slides.map((_, idx) => (
//           <Box
//             key={idx}
//             w={3}
//             h={3}
//             bg={idx === currentIndex ? "purple.600" : "gray.300"}
//             borderRadius="full"
//             mx={2}
//             cursor="pointer"
//             onClick={() => setCurrentIndex(idx)}
//           />
//         ))}
//       </Flex>
//     </Box>
//   );
// };

// export default Carousel;
import React, { useState, useEffect } from "react";
import { Box, Text, IconButton, Flex } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FirstCard from "../common/Cards/FirstCard";

const slides = [
  {
    id: 1,
    component: <FirstCard />,
  },
  {
    id: 2,
    component: (
      <Text fontSize="2xl" fontWeight="bold">
        Hello
      </Text>
    ),
  },
  // Add more slides as needed...
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency on currentIndex to trigger re-render on slide change

  return (
    <Box
      w="100%"
      margin="auto"
      mt={5}
      p={5}
      bg="purple.50"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box position="relative" borderRadius="medium">
        {slides.map((slide, index) => (
          <Flex
            key={index}
            w="100%"
            display={index === currentIndex ? "flex" : "none"}
            alignItems="center"
            justifyContent="center"
            transition="ease-in-out"
            transitionDuration="0.5s"
            height="500px"
            borderRadius="20px"
          >
            {slide.component}
          </Flex>
        ))}

        <IconButton
          icon={<FaArrowLeft />}
          position="absolute"
          top="50%"
          left="0"
          transform="translate(0, -50%)"
          aria-label="Previous Slide"
          onClick={prevSlide}
          colorScheme="purple"
        />
        <IconButton
          icon={<FaArrowRight />}
          position="absolute"
          top="50%"
          right="0"
          transform="translate(0, -50%)"
          aria-label="Next Slide"
          onClick={nextSlide}
          colorScheme="purple"
        />
      </Box>

      <Flex justifyContent="center" mt={4}>
        {slides.map((_, idx) => (
          <Box
            key={idx}
            w={3}
            h={3}
            bg={idx === currentIndex ? "purple.600" : "gray.300"}
            borderRadius="full"
            mx={2}
            cursor="pointer"
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;
