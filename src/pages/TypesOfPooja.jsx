import React, { useState, useEffect } from "react";
import { Box, Image, Heading, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";
import templeImage from "../assets/Images/poojas.png";
import CommonCard from "../components/Ui/CommonCard";

const TypesOfPooja = () => {
  const [poojaData, setPoojaData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state

  // Set the base URL for axios
  axios.defaults.baseURL = "https://ngo-backend-8yek.onrender.com";

  // Fetch pooja data from the backend API
  useEffect(() => {
    const fetchPoojas = async () => {
      try {
        const response = await axios.get("/api/poojas");
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

  // Map fetched data to card data
  const cardData = poojaData.map(pooja => ({
    title: pooja.name,
    imageUrl: pooja.image,
    link: pooja.link,
  }));

  return (
    <Box w="100%" h="100%" py={8} px={6}>
      {/* Temple Image */}
      <Image
        src={templeImage}
        alt="Temple"
        width="100%"
        height="400px"
        objectFit="cover"
        borderRadius="20px"
        mb={6}
      />

      {/* Heading */}
      <Heading textAlign="left" size="lg" mb={4}>
        Types of Pooja
      </Heading>

      {/* Description */}
      <Text fontSize="sm" textAlign="left" mb={4}>
        Our temple offers a variety of poojas to cater to the spiritual needs of
        our devotees. From daily rituals to special ceremonies, each pooja is
        performed with utmost devotion and adherence to traditional practices.
        Some of the popular poojas include Ganesh Pooja, Lakshmi Pooja, and
        Navagraha Pooja. Each pooja is designed to invoke the blessings of the
        deities and bring peace, prosperity, and happiness to the devotees.
      </Text>

      {/* Pooja Cards */}
      <CommonCard cardData={cardData} />
    </Box>
  );
};

export default TypesOfPooja;
