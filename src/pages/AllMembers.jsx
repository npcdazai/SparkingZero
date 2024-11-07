import React from "react";
import MembersCard from "../components/Ui/MemberCard";
import member1 from "../assets/images/members/images/Aashutos.jpg";
import member2 from "../assets/images/members/images/ajay.jpg";
import member3 from "../assets/images/members/images/ambuj.jpg";
import member4 from "../assets/images/members/images/Amit.jpg";
import member5 from "../assets/images/members/images/Anjani.jpg";
import member6 from "../assets/images/members/images/Ankus.jpg";
import member7 from "../assets/images/members/images/awadhes.jpg";
import member8 from "../assets/images/members/images/banarsi.jpg";
import member9 from "../assets/images/members/images/Prsant.jpg";
import member10 from "../assets/images/members/images/Dhanesh.jpg";
import member11 from "../assets/images/members/images/Munna.jpg";
import member12 from "../assets/images/members/images/Pankaj.jpg";
import member13 from "../assets/images/members/images/Rupesh.jpg";
import member14 from "../assets/images/members/images/sandeep.jpg";
import member15 from "../assets/images/members/images/Santosh.jpg";
import member16 from "../assets/images/members/images/Shubhas.jpg";
import member17 from "../assets/images/members/images/Suraj.jpg";
import member18 from "../assets/images/members/images/Syam.jpg";
import member19 from "../assets/images/members/images/Sanjay.jpg";
import member20 from "../assets/images/members/images/dinesh.jpg";
import eventbanner from "../assets/Images/eventbanner.png";
import Explore from "../components/Explore";
import { Box, Text, VStack } from "@chakra-ui/react";

const membersData = [
  {
    name: "Aashutos upadyyay ",
    role: "Member",
    image: member1,
  },
  {
    name: "Ajay Tiwari",
    role: "Member",
    image: member2,
  },
  {
    name: "Ambuj Dubey",
    role: "Member",
    image: member3,
  },
  {
    name: "Amit Tiwari",
    role: "Member",
    image: member4,
  },
  {
    name: "Anjani shukla ",
    role: "Member",
    image: member5,
  },
  {
    name: "Ankus Tiwari",
    role: "Member",
    image: member6,
  },
  {
    name: "Awadhes Tiwari",
    role: "Member",
    image: member7,
  },
  {
    name: "Banarsi lal",
    role: "Member",
    image: member8,
  },
  {
    name: "Prashant Tiwari",
    role: "Member",
    image: member9,
  },
  {
    name: "Dhanesh Dubey",
    role: "Member",
    image: member10,
  },
  {
    name: "Munna Singh",
    role: "Member",
    image: member11,
  },
  {
    name: "Pankaj gupta",
    role: "Member",
    image: member12,
  },
  {
    name: "Rupesh tiwari",
    role: "Member",
    image: member13,
  },
  {
    name: "Sandeep Singh",
    role: "Member",
    image: member14,
  },
  {
    name: "Santosh Tiwari",
    role: "Member",
    image: member15,
  },
  {
    name: "Shubhas Tiwari",
    role: "Member",
    image: member16,
  },
  {
    name: "Suraj Tiwari",
    role: "Member",
    image: member17,
  },
  {
    name: "Syam Mohan Tiwari",
    role: "Member",
    image: member18,
  },
  {
    name: "Sanjay Tiwari",
    role: "Member",
    image: member19,
  },
  {
    name: "Dinesh Tiwari",
    role: "Member",
    image: member20,
  },
];

const AllMembers = () => {
  return (
    <Box p={4} display="flex" flexWrap="wrap" bgColor="#fffaf0">
      <VStack
        position="relative"
        borderRadius="20px"
        overflow="hidden"
        bg="gray.100"
        w="full"
        h="300px"
        alignItems="center"
        bgImage={eventbanner}
        bgSize={"cover"}
        p={8}
        mb={8}
      >
        <Box
          bgColor="transparent"
          w="100%"
          display={"flex"}
          flexDirection={"column"}
          gap={6}
          // justifyContent={"center"}
          p={4}
          h={"100%"}
        >
          <Text
            as={"h1"}
            fontSize="x-large"
            fontWeight={"bold"}
            fontFamily={"Roca Two"}
            position={"relative"}
            color="#fff"
            bgColor="transparent"
            className="tiro-devanagari-hindi-regular"
          >
            Volunters
          </Text>

          <Text
            bgColor="transparent"
            as={"span"}
            fontSize={"1rem"}
            color={"#fff"}
            className="m-plus-rounded-1c-regular"
          >
            Jai kalka maa
          </Text>
        </Box>
      </VStack>
      {membersData.map((val, index) => {
        return (
          <Box key={index}>
            <MembersCard name={val.name} img={val.image} role={val.role} />
          </Box>
        );
      })}
      <Explore/>
    </Box>
  );
};

export default AllMembers;
