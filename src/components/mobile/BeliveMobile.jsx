import { Box, Stack, Image, Text, VStack, HStack } from "@chakra-ui/react";
import durgaArti from "../../assets/Images/new_Images/durjapuja.jpg";
import durgaPuja from "../../assets/Images/new_Images/durjaarti.jpg";
import murti from "../../assets/Images/new_Images/7.jpg";
import lordganesh from "../../assets/Images/new_Images/ganeshlord.jpg";
import om from "../../assets/Images/new_Images/om.png";
import line from "../../assets/icons/line.png";
import namaste from "../../assets/Images/new_Images/namaste.png";
import mandir from "../../assets/Images/new_Images/mandir.png";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const textSections = [
  {
    icon: om,
    title: "Temple",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    icon: mandir,
    title: "Puja",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
];

const Belive = () => {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((node) => {
      if (node) {
        VanillaTilt.init(node, {
          max: 7,
          speed: 400,
          glare: true,
          "max-glare": 0.8,
        });
      }
    });

    return () => {
      tiltRefs.current.forEach((node) => {
        if (node && node.vanillaTilt) {
          node.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <Box p={4} w="100%">
      <Stack
        direction={['column', 'row']}
        spacing={8}
        p={2}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          direction="row"
          spacing={4}
          align="center"
          justify="center"
          w="100%"
        >
          <Image
            ref={(el) => (tiltRefs.current[0] = el)}
            src={durgaArti}
            boxSize="60%"
            objectFit="cover"
            borderRadius="lg"
            mt={12}
          />
          <Image
            ref={(el) => (tiltRefs.current[1] = el)}
            src={murti}
            boxSize="60%"
            objectFit="cover"
            borderRadius="lg"

          />
        </Stack>

        <VStack w={['100%', '50%']} alignItems="start">
          <Stack direction="row" align="center" spacing={4}>
            <Image src={namaste} w="80px" h="80px" />
            <Text fontSize="small" color="#7E4555" fontWeight={600}>
              EDUCATION FOR ALL RURAL CHILDREN
            </Text>
          </Stack>
          <VStack alignItems="flex-start" spacing={4}>
            <Text fontSize="large" fontWeight={600} color="#db4242">
              We are a Hindu that believe in Ram
            </Text>
            <Stack direction="row" spacing={3} alignItems="flex-start">
              <Image src={line} h={"30px"} />
              <Text as="p" textAlign="start">
                We are a Hindu that believes in Lord Rama and Vishnu Deva, the
                followers of truth and divinity.
              </Text>
            </Stack>

            <VStack spacing={4}>
              {textSections.map((section, index) => (
                <Stack key={index} direction="row" spacing={2} align="flex-start">
                  <Image src={section.icon} w="40px" h="40px" />
                  <VStack alignItems="flex-start" spacing={0}>
                    <Text fontSize="small" color="#7E4555" fontWeight={600}>
                      {section.title}
                    </Text>
                    <Text
                      textAlign="start"
                      fontSize="x-small"
                      color="#7E4555"
                      fontWeight={600}
                    >
                      {section.description}
                    </Text>
                  </VStack>
                </Stack>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Belive;
