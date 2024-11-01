import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import bannner1 from "../../../assets/Images/banner1.jpg";

const FirstCard = () => {
  return (
    <Box
      bgGradient="linear(to-b, #F6B253, #FF9500)"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      p={8}
      gap={6}
      w="100%"
      h="100%"
      borderRadius="20px"
    >
      <Box
        bgColor="transparent"
        w="50%"
        display={"flex"}
        flexDirection={"column"}
        gap={6}
        justifyContent={"center"}
        p={4}
        h={"100%"}
      >
        <Text
          as={"h1"}
          fontSize="54px"
          fontWeight={"bold"}
          fontFamily={"Roca Two"}
          position={"relative"}
          color="#800000"
          bgColor="transparent"
        >
          शिवशक्ति{" "}
          <Text bgColor="transparent" as={"span"} color={"#333"}>
            कालका सनातन{" "}
          </Text>
          सेवा संस्था{" "}
        </Text>

        <Text
          bgColor="transparent"
          as={"span"}
          fontSize="medium"
          fontWeight={500}
        >
          बिकईया धाम ज्ञानपुर-भदोही, उत्तर प्रदेश
        </Text>

        <Box bgColor="transparent" display={"flex"} flexDirection="row" gap={4}>
          <Button
            display={"flex"}
            alignItems={"center"}
            gap={3}
            rounded={"full"}
            color={"#fff"}
            px={8}
            py={4}
            fontSize={"md"}
            size={"lg"}
            transition={"0.5s all"}
            bgColor="#800000"
            _hover={{
              bg: "#800000",
              transform: "translateY(-6px)",
            }}
          >
            Donate
          </Button>

          <Button
            display={"flex"}
            alignItems={"center"}
            gap={3}
            rounded={"full"}
            color={"#fff"}
            px={8}
            py={4}
            fontSize={"md"}
            size={"lg"}
            transition={"0.5s all"}
            bgColor="#800000"
            _hover={{
              bg: "#800000",
              transform: "translateY(-6px)",
            }}
          >
            About Us
          </Button>
        </Box>

        <Text
          bgColor="transparent"
          as={"span"}
          fontSize={"1rem"}
          color={"gray.500"}
        >
          Jai kalka maa
        </Text>
      </Box>

      <Box
        sx={{
          clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
        }}
        bg="tomato"
        width="50%"
        height="100%"
        overflow="hidden"
        borderRadius={"md"}
      >
        <Image src={bannner1} width="100%" height="100%" objectFit="cover" />
      </Box>
    </Box>
  );
};

export default FirstCard;
