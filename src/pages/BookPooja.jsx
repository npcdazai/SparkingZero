import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Image, Text, HStack } from "@chakra-ui/react";
import templeImage from "../assets/Images/poojas.png"; // Example image
import { useForm } from "react-hook-form";

const BookPooja = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box w="100%" h="100%" py={8} px={6}>
      <Box w="100%" h="100%" py={8} px={6}>
        {/* Temple Image */}
        <Image
          src={templeImage}
          alt="Temple"
          width="100%"
          height={{ base: "300px", md: "500px" }}
          objectFit="cover"
          borderRadius="20px"
          mb={6}
        />

        {/* Heading */}
        <Heading textAlign="center" size="lg" mb={4}>
          About the Pooja
        </Heading>

        {/* Description */}
        <Text fontSize="md" textAlign="center" mb={6}>
          Learn more about the pooja you are about to book. Below are the
          details regarding the pooja timing, duration, and the required
          donation amount. Each pooja is designed to bring peace, prosperity,
          and divine blessings.
        </Text>

        {/* Card with Pooja Details */}
        <Box
          bg="white"
          boxShadow="md"
          borderRadius="lg"
          px={6}
          py={4}
          maxW="600px"
          mx="auto" // Center the card
          mt={8}
        >
          <VStack align="stretch" spacing={4}>
            {/* Pooja Timing */}
            <HStack justify="space-between">
              <Text fontSize="lg" fontWeight="bold">
                Pooja Timing:
              </Text>
              <Text fontSize="lg" color="gray.600">
                Morning
              </Text>
            </HStack>

            {/* Duration */}
            <HStack justify="space-between">
              <Text fontSize="lg" fontWeight="bold">
                Duration:
              </Text>
              <Text fontSize="lg" color="gray.600">
                2 hours
              </Text>
            </HStack>

            {/* Donation Amount */}
            <HStack justify="space-between">
              <Text fontSize="lg" fontWeight="bold">
                Donation Amount:
              </Text>
              <Text fontSize="lg" color="gray.600">
                ₹1500
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Box>

      {/* Booking Form */}
      <Heading textAlign="center" size="lg" mb={4}>
        Book Your Pooja
      </Heading>

      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6} alignItems="center">
          {/* Name Input */}
          <FormControl w="100%" maxW="400px">
            <FormLabel>Name</FormLabel>
            <Box
              p={4}
              borderRadius="40px" // More rounded corners
              bg="white"
              w="100%"
            >
              <Input
                type="text"
                placeholder="Enter your name" // Placeholder text
                {...register("name", { required: true })}
                border="none"
                focusBorderColor="none"
              />
            </Box>
          </FormControl>

          {/* Date of Pooja */}
          <FormControl w="100%" maxW="400px">
            <FormLabel>Date of Pooja</FormLabel>
            <Box
              p={4}
              borderRadius="40px" // More rounded corners
              bg="white"
              w="100%"
            >
              <Input
                type="date"
                placeholder="Select a date"
                {...register("date", { required: true })}
                border="none"
                focusBorderColor="none"
              />
            </Box>
          </FormControl>

          {/* Time Slot */}
          <FormControl w="100%" maxW="400px">
            <FormLabel>Time Slot</FormLabel>
            <Box
              p={4}
              borderRadius="40px" // More rounded corners
              bg="white"
              w="100%"
            >
              <Select
                placeholder="Select a time slot" // Placeholder for dropdown
                {...register("timeSlot", { required: true })}
                border="none"
                focusBorderColor="none"
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </Select>
            </Box>
          </FormControl>

          {/* Email Address */}
          <FormControl w="100%" maxW="400px">
            <FormLabel>Email Address</FormLabel>
            <Box
              p={4}
              borderRadius="40px" // More rounded corners
              bg="white"
              w="100%"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                border="none"
                focusBorderColor="none"
              />
            </Box>
          </FormControl>

          {/* Phone Number */}
          <FormControl w="100%" maxW="400px">
            <FormLabel>Phone Number</FormLabel>
            <Box
              p={4}
              borderRadius="40px" // More rounded corners
              bg="white"
              w="100%"
            >
              <Input
                type="tel"
                placeholder="Enter your phone number"
                {...register("phone", { required: true })}
                border="none"
                focusBorderColor="none"
              />
            </Box>
          </FormControl>

          {/* Confirm Booking Button */}
          <Button
            type="submit"
            bgGradient="linear(to-r, #F6B253, #FF9500)"
            color="white"
            size="lg"
            padding="8"
            width={{ base: "80%", md: "20%" }}
            borderRadius="full"
          >
            Confirm Booking
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default BookPooja;
