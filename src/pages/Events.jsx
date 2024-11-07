import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import eventbanner from "../assets/Images/eventbanner.png";
import EventInfo from "../components/Events/EventInfo";
import EventVital from "../components/Events/EventVital"
const Events = () => {
  return (
    <Box p={4}>
      <VStack
        position="relative"
        borderRadius="20px"
        overflow="hidden"
        bg="gray.100"
        w="full"
        h="300px"
        alignItems="center"
      >
        <Image src={eventbanner} position="absolute" w="100%" top={0} />

        <Box
          bgColor="transparent"
          w="50%"
          display={"flex"}
          flexDirection={"column"}
          gap={6}
          // justifyContent={"center"}
          p={4}
          h={"100%"}
        >
          <Text
            as={"h1"}
            fontSize="x-large"
            fontWeight={"bold"}
            fontFamily={"Roca Two"}
            position={"relative"}
            color="#fff"
            bgColor="transparent"
            className="tiro-devanagari-hindi-regular"
          >
            Event
          </Text>

          <Text
            bgColor="transparent"
            as={"span"}
            fontSize={"1rem"}
            color={"#fff"}
            className="m-plus-rounded-1c-regular"
          >
            Jai kalka maa
          </Text>
        </Box>
      </VStack>

      <HStack w="100%"alignItems="flex-start">
        <VStack w="70%" h="800px" overflowY="scroll" ><EventInfo/></VStack>
        <VStack w="30%"  ><EventVital/></VStack>
      </HStack>
    </Box>
  );
};

export default Events;
