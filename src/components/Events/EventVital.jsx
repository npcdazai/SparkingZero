import { Box, Avatar, Heading, Text, Stack, Icon, Link } from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

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
      <Avatar
        size="xl"
        name="Rosalina D. Wiliamson"
        src="https://via.placeholder.com/150" // Replace with the actual image URL
        mb={4}
      />
      <Heading as="h4" size="lg" mb={2}>
        Rosalina D. Wiliamson
      </Heading>
      <Text mb={4}>
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin
        molestie malesuada. Mauris blandit aliquet elit
      </Text>
      <Stack direction="row" justify="center" spacing={4}>
        <Link href="https://linkedin.com" isExternal>
          <Icon as={FaLinkedin} boxSize={5} />
        </Link>
        <Link href="https://twitter.com" isExternal>
          <Icon as={FaTwitter} boxSize={5} />
        </Link>
        <Link href="https://facebook.com" isExternal>
          <Icon as={FaFacebook} boxSize={5} />
        </Link>
        <Link href="https://github.com" isExternal>
          <Icon as={FaGithub} boxSize={5} />
        </Link>
      </Stack>
    </Box>
  );
}

export default AboutMeCard;
