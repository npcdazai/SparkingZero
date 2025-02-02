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
import VedasSection from "../components/VedasSection";
import DonationMobile from "../components/mobile/DonationMobile";
import AboutUsMobile from "../components/mobile/AboutUsMobile";
import CategoriesMobile from "../components/mobile/CategoriesMobile";
import ServicesRowMobile from "../components/mobile/ServiceRowMobile";
import UpcomingEventsMobile from "../components/mobile/UpComingEventsMobile";
import HeaderMobile from "../components/mobile/HeaderMobile";
import Header from "../components/Ui/Header";
import MobileVedSakti from "../components/mobile/MobileVedSakti";
import { FaGraduationCap } from "react-icons/fa6";
import { MdPeopleAlt, MdEvent } from "react-icons/md";
import { GiPrayer } from "react-icons/gi";
import pooja from "../assets/Images/poojas.png";
import cow from "../assets/Images/cow.png";
import events from "../assets/Images/event.png"
import edu from "../assets/Images/saraswati-pooja.jpg"


const serviceData = [
  {
    title: "Pooja",
    description: "Various Pooja services offered.",
    imageUrl: pooja,
  },
  {
    title: "Cow Offering",
    description: "Community programs for all.",
    imageUrl: cow,
  },
  {
    title: "Events",
    description: "Special events throughout the year.",
    imageUrl: events,
  },
  {
    title: "Education",
    description: "Educational sessions and workshops.",
    imageUrl: edu,
  },
];

const services = [
  {
    icon: GiPrayer,
    title: "Pooja",
    description: "Various Pooja services offered.",
  },
  {
    icon: MdPeopleAlt,
    title: "Programs",
    description: "Community programs for all.",
  },
  {
    icon: MdEvent,
    title: "Events",
    description: "Special events throughout the year.",
  },
  {
    icon: FaGraduationCap,
    title: "Education",
    description: "Educational sessions and workshops.",
  },
];


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
    lg: <ServiceRow title={"Our Services"} arr={serviceData} />,
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
      <OurServices title={"Our Services"} arr={services} />
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
