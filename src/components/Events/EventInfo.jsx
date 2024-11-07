import { Box, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import puja from "../../assets/Images/new_Images/pujaEvent.jpg";
import parsad from "../../assets/Images/new_Images/parsadevent.jpg";
import marraige from "../../assets/Images/new_Images/marriage.jpg";
import { CiClock1 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

const EventInfo = () => {
  const info = [
    {
      id: 1,
      img: puja,
      title: "Puja",
      description:
        "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
      dateTime: "Sunday (8:00 am - 9:00 am)",
      location: "56 Thatcher Avenue River Forest",
    },
    {
      id: 2,
      img: parsad,
      title: "Puja",
      description:
        "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
      dateTime: "Sunday (8:00 am - 9:00 am)",
      location: "56 Thatcher Avenue River Forest",
    },
    {
      id: 3,
      img: marraige,
      title: "Puja",
      description:
        "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
      dateTime: "Sunday (8:00 am - 9:00 am)",
      location: "56 Thatcher Avenue River Forest",
    },
  ];

  return (
    <Box p={8}>
      {info.map((event) => (
        <VStack
          key={event.id}
          boxShadow="md"
          borderRadius="md"
          overflow="hidden"
          mb={6}
          align="stretch"
        >
          <Box
            h="300px"
            overflow="hidden"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
          >
            <Image src={event.img} w="100%" h="100%" objectFit="cover" />
          </Box>
          <Box p={4}>
            <Text
              color="#db4242"
              textAlign="start"
              fontSize="xl"
              fontWeight="bold"
              mb={2}
            >
              {event.title}
            </Text>
            <Text textAlign="start" fontSize="sm" mb={4}>
              {event.description}
            </Text>
            <HStack spacing={2} mb={2}>
              <Icon color="gray.600" as={CiClock1} />
              <Text color="#db4242" fontSize="sm">
                {event.dateTime}
              </Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={IoLocationSharp} color="gray.600" />
              <Text fontSize="sm" color="#db4242">
                {event.location}
              </Text>
            </HStack>
          </Box>
        </VStack>
      ))}
    </Box>
  );
};

export default EventInfo;
