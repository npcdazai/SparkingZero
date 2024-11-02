import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Donation from "./Donation";
import Explore from "./Explore";
import Membership from "./Membership";
import OurServices from "./OurServices";
import Payment from "./Payment";
import ServiceRow from "./ServicesRow";
import UpcomingEvents from "./UpcomingEvents";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import CardCaro from "../components/Ui/CardCaro"

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
      <OurServices />
      <CardCaro/>
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
