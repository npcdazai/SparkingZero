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
    hindiTitle: "पूजा",
    description: "Various Pooja services offered.",
    hindiDescription: "विभिन्न पूजा सेवाएं प्रदान की जाती हैं।",
    imageUrl: pooja,
  },
  {
    title: "Cow Offering",
    hindiTitle: "गाय दान",
    description: "Community programs for all.",
    hindiDescription: "सभी के लिए सामुदायिक कार्यक्रम।",
    imageUrl: cow,
  },
  {
    title: "Events",
    hindiTitle: "कार्यक्रम",
    description: "Special events throughout the year.",
    hindiDescription: "साल भर विशेष कार्यक्रम।",
    imageUrl: events,
  },
  {
    title: "Education",
    hindiTitle: "शिक्षा",
    description: "Educational sessions and workshops.",
    hindiDescription: "शैक्षिक सत्र और कार्यशालाएँ।",
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


const Home = ({ setLanguage, language }) => {
  const AboutUsComponent = useBreakpointValue({
    base: <AboutUsMobile language={language} setLanguage={setLanguage} />,
    lg: <AboutUs language={language} setLanguage={setLanguage} />,
  });

  const DonationComponent = useBreakpointValue({
    base: <DonationMobile language={language} />,
    lg: <Donation language={language}  />,
  });

  const CategoriesComponent = useBreakpointValue({
    base: <CategoriesMobile language={language} />,
    lg: <Categories language={language}  />,
  });

  const ServicesRowComponent = useBreakpointValue({
    base: <ServicesRowMobile language={language} />,
    lg: <ServiceRow title={"Our Services"} arr={serviceData} language={language}  />,
  });

  const UpcomingEventsComponent = useBreakpointValue({
    base: <UpcomingEventsMobile language={language}  />,
    lg: <UpcomingEvents language={language}  />,
  });

  const Vedsak = useBreakpointValue({
    base: <MobileVedSakti  />,
    lg: <VedasSection />,
  });

  return (
    <Box p={4}>
      <Carousel />
      {AboutUsComponent}
      {Vedsak}
      <OurServices language={language}  title={"Our Services"} arr={services} />
      {UpcomingEventsComponent}
      {DonationComponent}
      {ServicesRowComponent}
      {CategoriesComponent}
      <Members language={language} />
      <Explore language={language} />
      <Membership language={language} />
      {/* <Payment /> */}
    </Box>
  );
};

export default Home;
