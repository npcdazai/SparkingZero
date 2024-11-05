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
// import CardCaro from "../components/Ui/CardCaro";
import Members from "../components/Ui/EstemedMembers";
import VedasSection from "../components/VedasSection"
import DonationMobile from "../components/mobile/DonationMobile";
import AboutUsMobile from "../components/mobile/AboutUsMobile";
import CategoriesMobile from "../components/mobile/CategoriesMobile";
import ServicesRowMobile from "../components/mobile/ServiceRowMobile";
import UpcomingEventsMobile from "../components/mobile/UpComingEventsMobile";
import HeaderMobile from "../components/mobile/HeaderMobile";
import Header from "../components/Ui/Header";

const Home = () => {
  // const test = useBreakpointValue ({
  //   base : <h1 style={{color:"black"}}>Noggas</h1>, //mobile
  //   lg : <h1 style={{color:"red"}}>Noggers</h1> ,//desk
  //   md : <h1 style={{color:"yellow"}}>Niggers</h1> //tablet
  // })
  const AboutUsComponent = useBreakpointValue({
    base: <AboutUsMobile />,
    lg: <AboutUs />,
  });


  const DonationComponent = useBreakpointValue({
    base: <DonationMobile />,
    lg: <Donation />,
  });

  const CategoriesComponent = useBreakpointValue({
    base: <CategoriesMobile />,
    lg: <Categories />,
  });

  const ServicesRowComponent = useBreakpointValue({
    base: <ServicesRowMobile />,
    lg: <ServiceRow />,
  });

  const UpcomingEventsComponent = useBreakpointValue({
    base: <UpcomingEventsMobile />,
    lg: <UpcomingEvents />,
  });
  
  

  return (
    <Box p={4}>
      <Carousel />
      {AboutUsComponent}
      <VedasSection />
      <OurServices />
      {UpcomingEventsComponent}
      {DonationComponent}
      {ServicesRowComponent}
      {CategoriesComponent}
      <Members />
      <Explore />
      <Membership />
      <Payment />
    </Box>
  );
};

export default Home;


	
