import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import eventbanner from "../assets/Images/eventbanner.png";
const Events = () => {
  return (
    <Box p={4}>
      <VStack
        position="relative"
        borderRadius="20px"
        overflow="hidden"
        bg="gray.100"
        w="full"
        h="400px"
        alignItems="flex-start"
        justifyContent="flex-end"
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
            fontSize="54px"
            fontWeight={"bold"}
            fontFamily={"Roca Two"}
            position={"relative"}
            color="#fff"
            bgColor="transparent"
            className="tiro-devanagari-hindi-regular"
          >
            शिवशक्ति{" "}
            <Text
              className="tiro-devanagari-hindi-regular"
              bgColor="transparent"
              as={"span"}
              color={"#ffff"}
            >
              कालका सनातन{" "}
            </Text>
            सेवा संस्था{" "}
          </Text>

          <Text
            bgColor="transparent"
            as={"span"}
            fontSize="medium"
            fontWeight={500}
            className="tiro-devanagari-hindi-regular"
          >
            बिकईया धाम ज्ञानपुर-भदोही, उत्तर प्रदेश
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
    </Box>
  );
};

export default Events;
