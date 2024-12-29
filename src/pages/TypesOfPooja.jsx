import React, { useState, useEffect } from "react";
import { Box, Image, Heading, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";
import templeImage from "../assets/Images/poojas.png";
import CommonCard from "../components/Ui/CommonCard";

const TypesOfPooja = () => {
  const [poojaData, setPoojaData] = useState([]);
  const [loading, setLoading] = useState(true);

  // axios.defaults.baseURL = "https://ngo-backend-8yek.onrender.com";

  useEffect(() => {
    const fetchPoojas = async () => {
      try {
        const response = await axios.get("https://ngo-backend-8yek.onrender.com/api/poojas");
        setPoojaData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching poojas:", error);
        setLoading(false);
      }
    };

    fetchPoojas();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Box>
    );
  }

  const cardData = poojaData.map(pooja => ({
    title: pooja.name,
    imageUrl: pooja.image,
    link: pooja.link,
    description:pooja.description
  }));

  return (
    <Box w="100%" h="100%" py={8} px={6}>
      <Image
        src={templeImage}
        alt="Temple"
        width="100%"
        height="400px"
        objectFit="cover"
        borderRadius="20px"
        mb={6}
      />

      <Heading textAlign="left" size="lg" mb={4}>
        Types of Pooja
      </Heading>

      <Text fontSize="sm" textAlign="left" mb={4}>
        यह पूजा विशेष रूप से महत्वपूर्ण अवसरों पर की जाती है, जैसे कि <span style={{fontWeight:"600"}} >विवाह, जन्मदिन,</span> और अन्य प्रमुख जीवन घटनाओं पर।
      </Text>

      <CommonCard cardData={cardData} />
    </Box>
  );
};

export default TypesOfPooja;
