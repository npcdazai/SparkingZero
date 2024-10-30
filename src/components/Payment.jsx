import { Box, Text, Icon, Button, SimpleGrid } from "@chakra-ui/react";
import { FaCreditCard, FaUniversity, FaMobileAlt, FaWallet } from "react-icons/fa";

const Payment = () => {
  // Payment methods data
  const paymentMethods = [
    { title: "Credit/Debit Card", icon: FaCreditCard },
    { title: "Bank Transfer", icon: FaUniversity },
    { title: "UPI", icon: FaMobileAlt },
    { title: "Wallet", icon: FaWallet },
  ];

  return (
    <Box marginTop="10" padding="6" bg="gray.50">
      {/* Header */}
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb="6" textAlign="left">
        Choose Your Payment Method
      </Text>

      {/* Payment method cards in a grid */}
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
        {paymentMethods.map((method, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="20px"
            padding="4"
            bg="white"
            textAlign="center"
            boxShadow="sm"
            _hover={{ boxShadow: "md", transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            {/* Icon */}
            <Icon as={method.icon} w={8} h={8} mb="2" color="orange.400" />

            {/* Title */}
            <Text fontSize="lg" fontWeight="bold">
              {method.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Secure Information Section */}
      <Box marginTop="10" textAlign="center">
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb="4">
          Secure Information
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mb="6" px={{ base: "4", md: "10" }}>
          We prioritize the security of your transactions. Our payment systems are encrypted and comply with the highest standards of security. Your personal and financial information is protected, ensuring a safe and secure donation process. We are committed to maintaining your trust and ensuring that your contributions are used effectively for the betterment of the community.
        </Text>

        {/* Donation Button */}
        <Button 
          bgGradient="linear(to-r, #F6B253, #FF9500)"
          color="white"
          size="lg" 
          width={{ base: "100%", md: "60%" }}   // Make button full width
          paddingY="8"  // Vertical padding
          borderRadius="full"
        >
          Donate Now
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
