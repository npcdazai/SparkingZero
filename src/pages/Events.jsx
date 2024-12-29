import {
  Box,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import eventbanner from "../assets/Images/eventbanner.png";
import EventInfo from "../components/Events/EventInfo";
import EventVital from "../components/Events/EventVital";
import mahaparsad from "../assets/Videos/test.mp4";
import puja from "../assets/Images/new_Images/pujaEvent.jpg";
import parsad from "../assets/Images/new_Images/parsadevent.jpg";
import marriage from "../assets/Images/new_Images/marriage.jpg";
import EventInfoMobile from "../components/mobile/EventInfoMobile";

const info = [
  {
    id: 1,
    img: puja,
    title: "Puja",
    description:
      "Discover indispensable facts about motivation in these paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make.",
    dateTime: "Sunday (8:00 am - 9:00 am)",
    location: "56 Thatcher Avenue River Forest",
    vidurl: mahaparsad
  },
  {
    id: 2,
    img: parsad,
    title: "Prasad Distribution",
    description:
      "Discover indispensable facts about motivation in these paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make.",
    dateTime: "Sunday (9:00 am - 10:00 am)",
    location: "56 Thatcher Avenue River Forest",
    vidurl: mahaparsad
  },
  {
    id: 3,
    img: marriage,
    title: "Marriage Ceremony",
    description:
      "Discover indispensable facts about motivation in these paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make.",
    dateTime: "Sunday (10:00 am - 12:00 pm)",
    location: "56 Thatcher Avenue River Forest",
    vidurl: mahaparsad
  }
];

const MobileEvents = () => (
  <Box p={4}>
    <VStack
      position="relative"
      borderRadius="20px"
      overflow="hidden"
      bg="gray.100"
      w="full"
      h="20vh"
      alignItems="center"
      bgImage={`url(${eventbanner})`}
      bgSize="cover"
      p={8}
      mb={8}
    >
      <Box
        bgColor="transparent"
        w="100%"
        display="flex"
        flexDirection="column"
        gap={6}
        p={4}
        h="100%"
      >
        <Text
          as="h1"
          fontSize="x-large"
          fontWeight="bold"
          fontFamily="Roca Two"
          color="#fff"
          className="tiro-devanagari-hindi-regular"
        >
          Event
        </Text>
        <Text
          as="span"
          fontSize="1rem"
          color="#fff"
          className="m-plus-rounded-1c-regular"
        >
          Jai Kalka Maa
        </Text>
      </Box>
    </VStack>

    <VStack w="100%" alignItems="flex-start">
      <VStack w="100%">
        <EventVital />
      </VStack>
      <VStack w="100%" h="100%" overflowY="scroll">
        {info.map((event) => (
          <EventInfoMobile key={event.id} {...event} />
        ))}
      </VStack>

    </VStack>
  </Box>
);

const LgEvents = () => (
  <Box p={4}>
    <VStack
      position="relative"
      borderRadius="20px"
      overflow="hidden"
      bg="gray.100"
      w="full"
      h="50vh"
      alignItems="center"
      bgImage={`url(${eventbanner})`}
      bgSize="cover"
      p={8}
      mb={8}
    >
      <Box
        bgColor="transparent"
        w="100%"
        display="flex"
        flexDirection="column"
        gap={6}
        p={4}
        h="100%"
      >
        <Text
          as="h1"
          fontSize="x-large"
          fontWeight="bold"
          fontFamily="Roca Two"
          color="#fff"
          className="tiro-devanagari-hindi-regular"
        >
          Event
        </Text>
        <Text
          as="span"
          fontSize="1rem"
          color="#fff"
          className="m-plus-rounded-1c-regular"
        >
          Jai Kalka Maa
        </Text>
      </Box>
    </VStack>

    <HStack w="100%" alignItems="flex-start">
      <VStack w="70%" h="800px" overflowY="scroll">
        {info.map((event) => (
          <EventInfo key={event.id} {...event} />
        ))}
      </VStack>
      <VStack w="30%">
        <EventVital />
      </VStack>
    </HStack>
  </Box>
);

const Events = () => {
  const EventComponent = useBreakpointValue({
    base: <MobileEvents />,
    lg: <LgEvents />
  });
  return <>{EventComponent}</>;
};

export default Events;
