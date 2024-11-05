import {
  Box,
  Button,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Icon,
  Container,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";

const footerData = [
  {
    id: 1,
    title: "Information",
    items: ["Puja", "Services", "Temple", "Holis", "Volunteers"],
  },
  {
    id: 2,
    title: "Others",
    items: ["Donations", "Contact Us", "Events"],
  },
];

const FooterCom = () => {
  return (
    <Container
      maxW="container.2xl"
      bgColor="#F6B253"
      p={{ base: "2rem", md: "3rem" }} // Adjust padding for mobile
      display={{ base: "block", md: "flex" }} // Change to flex on medium screens
      justifyContent="space-between"
      w="100%"
    >
      <Box
        w={{ base: "100%", md: "80%" }} // Full width on mobile, 80% on larger screens
        display={{ base: "block", md: "grid" }}
        gap={8}
      >
        <VStack w="100%" gap={2} alignItems="flex-start">
          <Heading
            gridColumn="span 3"
            color="#FFFFFF"
            fontSize={{ base: "lg", md: "medium" }} // Responsive font size
            fontWeight="700"
          >
            About US
          </Heading>
          <Text
            color="#E6E6E6"
            fontSize={{ base: "sm", md: "small" }} // Responsive font size
            fontWeight="400"
            textAlign="start"
            _hover={{ color: "#E5195E", cursor: "pointer" }}
          >
            You need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </Text>
          <UnorderedList styleType="none" m="0" p="0">
            <ListItem mb="0.5rem">
              <HStack as="span" gap={4}>
                <Icon as={MdOutlineEmail} />
                <Text
                  color="#E6E6E6"
                  fontSize={{ base: "sm", md: "small" }} // Responsive font size
                  fontWeight="400"
                  _hover={{ color: "#E5195E", cursor: "pointer" }}
                >
                  987-987-930-302
                </Text>
              </HStack>
            </ListItem>
            <ListItem mb="0.5rem">
              <HStack as="span" gap={4}>
                <Icon as={FaPhoneAlt} />
                <Text
                  color="#E6E6E6"
                  fontSize={{ base: "sm", md: "small" }} // Responsive font size
                  fontWeight="400"
                  _hover={{ color: "#E5195E", cursor: "pointer" }}
                >
                  info@example.com
                </Text>
              </HStack>
            </ListItem>
            <ListItem mb="0.5rem">
              <HStack as="span" gap={4}>
                <Icon as={CiLocationOn} />
                <Text
                  color="#E6E6E6"
                  fontSize={{ base: "sm", md: "small" }} // Responsive font size
                  fontWeight="400"
                  _hover={{ color: "#E5195E", cursor: "pointer" }}
                >
                  14/A, Poor Street City Tower, New York USA
                </Text>
              </HStack>
            </ListItem>
          </UnorderedList>
        </VStack>
        
        {/* Flex container for Information and Others sections */}
        <Flex 
          direction={{ base: "row", md: "column" }} // Row on mobile, column on larger screens
          gap={8} 
          justify={{ base: "space-between", md: "flex-start" }} // Space between on mobile
          mt={{ base: "1rem", md: "0" }} // Margin on mobile
        >
          {footerData.map((val) => (
            <Box w={{ base: "50%", md: "100%" }} key={val.id}>
              <Heading
                color="#FFFFFF"
                fontSize={{ base: "lg", md: "medium" }} // Responsive font size
                fontWeight="700"
                mb="1rem"
              >
                {val.title}
              </Heading>
              <UnorderedList styleType="none" m="0" p="0">
                {val.items.map((item, index) => (
                  <ListItem key={index} mb="0.5rem">
                    <Text
                      color="#E6E6E6"
                      fontSize={{ base: "sm", md: "small" }} // Responsive font size
                      fontWeight="400"
                      _hover={{ color: "#E5195E", cursor: "pointer" }}
                    >
                      {item}
                    </Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={6}
        mt={{ base: "2rem", md: "0" }} // Add margin on mobile
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap={3}>
          <Icon as={FaWhatsapp} />
          <Icon as={FaInstagram} />
          <Icon as={AiOutlineFacebook} />
        </Box>

        <Button
          bgColor="#FF9500"
          color="#E5195E"
          fontWeight="400"
          fontSize="14px"
          width="237px"
          height="38px"
          borderRadius="10px"
          boxShadow="md"
        >
          Share
        </Button>
      </Box>
    </Container>
  );
};

export default FooterCom;
