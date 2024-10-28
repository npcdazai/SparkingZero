import AboutUs from "./AboutUs";
import Carousel from "./Carousel"; // Adjust the path if necessary
import Categories from "./Categories";
import Donation from "./Donation";
import Explore from "./Explore";
import Membership from "./Membership";
import OurServices from "./OurServices";
import Payment from "./Payment";
import ServiceRow from "./ServicesRow";
import UpcomingEvents from "./UpcomingEvents";


const Home = () => {
  return (
    <div>
      <h1>Welcome to the Temple</h1>
      <Carousel />
      <AboutUs />
      <OurServices />
      <UpcomingEvents />
      <Donation />
      <ServiceRow />
      <Categories />
      <Explore />
      <Membership />
      <Payment />
      
    </div>
  );
};

export default Home;
