import {
  Box,
  Avatar,
  Heading,
  Text,
  Stack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import slider1 from "../../assets/Images/members/images/person1.jpg";

function AboutMeCard() {
  return (
    <Box
      border="1px solid #E2E8F0"
      borderRadius="md"
      p={8}
      textAlign="center"
      boxShadow="lg"
      maxW="sm"
      mt="2rem"
    >
      <Heading as="h3" size="md" mb={2} color="red.500">
        About Me
      </Heading>
      <Avatar size="xl" name="Rosalina D. Wiliamson" src={slider1} mb={4} />
      <Heading as="h4" size="lg" mb={2}>
        Acharya Atul Tiwari
      </Heading>
      <Text mb={4}>
        Acharya Atul Tiwari is the visionary founder and dedicated leader of Shiv-Shakti, an organization committed to promoting education, environmental conservation, women’s empowerment, healthcare access With a strong passion for social change and a deep-rooted commitment to community development,  Acharya Atul Tiwari  has been instrumental in driving impactful initiatives that have transformed countless lives.
      
      </Text>
      <Stack direction="row" justify="center" spacing={4}>
        <Link href="https://chat.whatsapp.com/K8vkxXI7Wr9ESO9qmTV01U" isExternal>
          <Icon as={FaWhatsapp} boxSize={5} />
        </Link>
        {/* <Link href="https://twitter.com" isExternal>
          <Icon as={FaTwitter} boxSize={5} />
        </Link> */}
        <Link href="https://www.facebook.com/share/1EHetgff2o/" isExternal>
          <Icon as={FaFacebook} boxSize={5} />
        </Link>
        {/* <Link href="https://github.com" isExternal>
          <Icon as={FaGithub} boxSize={5} />
        </Link> */}
      </Stack>
    </Box>
  );
}

export default AboutMeCard;
