// Home page

// components
import Banner from './Banner.jsx';
import Navbar from '../common/Navbar/Navbar.jsx';
import History from './History.jsx';
import SneakersSlider from './SneakersSlider.jsx';
import CarouselAndBanners from './CarouselAndBanners.jsx';
import ThreeSmallBanner from './ThreeSmallBanner.jsx';
import ApparelsSlider from './ApparelsSlider.jsx';
import BottomBanner from './BottomBanner.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <History />
      <SneakersSlider />
      <CarouselAndBanners />
      <ThreeSmallBanner />
      <ApparelsSlider />
      <BottomBanner />
    </>
  )
}

export default Home;