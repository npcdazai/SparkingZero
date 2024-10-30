import { useBreakpointValue } from "@chakra-ui/react";
import Carousel from "./Carousel"; // Adjust the path if necessary
import Donation from "./Donation";
import Explore from "./Explore";
import Membership from "./Membership";
import Payment from "./Payment";
import AboutUs from "./AboutUs";
import AboutUsMobile from "./mobile/AboutUsMobile";
import Categories from "./Categories";
import CategoriesMobile from "./mobile/CategoriesMobile";
import DonationMobile from "./mobile/DonationMobile";
import OurServices from "./OurServices";
import OurServicesMobile from "./mobile/OurServicesMobile";
import ServiceRow from "./ServicesRow";
import ServicesRowMobile from "./mobile/ServiceRowMobile";
import UpcomingEvents from "./UpcomingEvents";
import UpcomingEventsMobile from "./mobile/UpComingEventsMobile";

const Home = () => {
  const AboutUsComponent = useBreakpointValue({
    base: <AboutUsMobile />,
    lg: <AboutUs />,
  });

  const OurServicesComponent = useBreakpointValue({
    base: <OurServicesMobile />,
    lg: <OurServices />,
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
    <div>
      <Carousel />

      {AboutUsComponent}
      {OurServicesComponent}

      {UpcomingEventsComponent}

      {DonationComponent}

      {ServicesRowComponent}

      {CategoriesComponent}

      <Explore />
      <Membership />
      <Payment />
    </div>
  );
};

export default Home;
