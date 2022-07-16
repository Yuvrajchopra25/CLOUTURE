// Home page

// components
import Banner from './Banner.jsx';
import Navbar from '../common/Navbar/Navbar.jsx';
import History from './History.jsx';
import SneakersSlider from './SneakersSlider.jsx';
import CarouselAndBanners from './CarouselAndBanners.jsx';
import ApparelsSlider from './ApparelsSlider.jsx';
import BottomBanner from './BottomBanner.jsx';
import Footer from '../common/Footer/Footer.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <History />
      <SneakersSlider />
      <CarouselAndBanners />
      <ApparelsSlider />
      <BottomBanner />
      <Footer />
    </>
  )
}

export default Home;