import AboutUs from "../components/AboutUs";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Donation from "../components/Donation";
import Explore from "../components/Explore";
import Membership from "../components/Membership";
import OurServices from "../components/OurServices";
import Payment from "../components/Payment";
import ServiceRow from "../components/ServicesRow";
import UpcomingEvents from "../components/UpcomingEvents";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import CardCaro from "../components/Ui/CardCaro";
import Members from "../components/Ui/EstemedMembers";
import VedasSection from "../components/VedasSection";

const Home = () => {
  // const test = useBreakpointValue ({
  //   base : <h1 style={{color:"black"}}>Noggas</h1>, //mobile
  //   lg : <h1 style={{color:"red"}}>Noggers</h1> ,//desk
  //   md : <h1 style={{color:"yellow"}}>Niggers</h1> //tablet
  // })
  return (
    <Box p={4}>
      <Carousel />
      <AboutUs />
      <VedasSection/>
      <OurServices />
      <Members />
      <UpcomingEvents />
      <Donation />
      <ServiceRow />
      <Categories />
      <Explore />
      <Membership />
      <Payment />
    </Box>
  );
};

export default Home;
