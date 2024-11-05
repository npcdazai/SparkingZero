import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Input,
  Container,
  Icon,
  HStack,
  VStack,
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
      maxW="contianer.2xl"
      bgColor="#F6B253"
      p="3rem"
      display="flex"
      justifyContent="space-between"
      w="100%"
      // alignItems="center"
    >
      <Box w="80%" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={8}>
        <VStack w="100%" gap={2} alignItems="flex-start">
          <Heading
            gridColumn="span 3"
            color="#FFFFFF"
            fontSize="medium"
            fontWeight="700"
          >
            About US
          </Heading>
          <Text
            color="#E6E6E6"
            fontSize="small"
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
                  fontSize="small"
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
                  fontSize="small"
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
                  fontSize="small"
                  fontWeight="400"
                  _hover={{ color: "#E5195E", cursor: "pointer" }}
                >
                  14/A, Poor Street City Tower, New York USA
                </Text>
              </HStack>
            </ListItem>
          </UnorderedList>
        </VStack>
        {footerData.map((val) => (
          <Box w="100%" key={val.id} gap="1rem">
            <Heading
              gridColumn="span 3"
              color="#FFFFFF"
              fontSize="medium"
              fontWeight="700"
              mb="1rem"
            >
              {val.title}
            </Heading>
            {val.items.map((item, index) => (
              <UnorderedList key={index} styleType="none" m="0" p="0">
                <ListItem mb="0.5rem">
                  <Text
                    color="#E6E6E6"
                    fontSize="small"
                    fontWeight="400"
                    _hover={{ color: "#E5195E", cursor: "pointer" }}
                  >
                    {item}
                  </Text>
                </ListItem>
              </UnorderedList>
            ))}
          </Box>
        ))}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={6}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={6}>
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

          {/* <Image src={star} w="216px" h="48px" /> */}
        </Box>
      </Box>
    </Container>
  );
};

export default FooterCom;
