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
import MobileVedSakti from "../components/mobile/MobileVedSakti"

const Home = () => {

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
  
  const Vedsak = useBreakpointValue({
    base: <MobileVedSakti />,
    lg: <VedasSection />,
  });
  
  

  return (
    <Box p={4}>
      <Carousel />
      {AboutUsComponent}
      {Vedsak}
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


	
