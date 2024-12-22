import { Box, HStack, Icon, Text, VStack, AspectRatio } from "@chakra-ui/react";
import { CiClock1 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

const EventInfo = ({ img, title, description, dateTime, location, vidurl, id }) => {
  return (
    <Box p={8} key={id}>
      <VStack
        boxShadow="md"
        borderRadius="md"
        overflow="hidden"
        mb={6}
        align="stretch"
      >
        <Box
          h="300px"
          overflow="hidden"
          transform="scale(1)"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
          }}
        >
          <AspectRatio ratio={16 / 9} bg="gray.100">
            <iframe 
              title="event-video" 
              src={vidurl} 
              allowFullScreen 
              muted 
            />
          </AspectRatio>
        </Box>
        <Box p={4}>
          <Text
            color="#db4242"
            textAlign="start"
            fontSize="xl"
            fontWeight="bold"
            mb={2}
          >
            {title}
          </Text>
          <Text textAlign="start" fontSize="sm" mb={4}>
            {description}
          </Text>
          <HStack spacing={2} mb={2}>
            <Icon as={CiClock1} color="gray.600" />
            <Text color="#db4242" fontSize="sm">
              {dateTime}
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={IoLocationSharp} color="gray.600" />
            <Text fontSize="sm" color="#db4242">
              {location}
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default EventInfo;
