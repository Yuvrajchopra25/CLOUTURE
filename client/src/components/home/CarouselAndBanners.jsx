// Carousel and Banners below the top selling sneakers

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import { styled, Box } from '@mui/material';

import img1 from "/home/yuvraj/Clouture/client/src/Images/home_page/apparels.jpeg";
import img2 from "/home/yuvraj/Clouture/client/src/Images/home_page/sneakers_collection.webp";
import img3 from "/home/yuvraj/Clouture/client/src/Images/home_page/apparels_Mens.jpg";
import img4 from "/home/yuvraj/Clouture/client/src/Images/home_page/sneakers.jpeg";
import img5 from "/home/yuvraj/Clouture/client/src/Images/home_page/banner3.webp";

const CarouselStyle = styled(Carousel)`
    margin-top: 0.2em;
    width: 60%;
    height: 400;
`;

// Image inside carousel banner
const Image = styled('img')({
    objectFit: 'cover',
    width: '100%',
    height: 400,
});

const Banner1 = styled('img')({
    position: 'absolute',
    top: 'calc(95.3em)',
    left: 'calc(51em)',
    height: '197px',
    width: '39.5%',
    backgroundColor: 'red',
    marginTop: '0.2em'
});

const Banner2 = styled('img')({
    position: 'absolute',
    top: 'calc(108em)',
    left: 'calc(51em)',
    marginTop: '0.2em',
    height: '197px',
    width: '39.5%',
    backgroundColor: 'red'
});

const BannerBox = styled(Box)`
    height: 300px;
    width: auto;
    margin-top: 0.2em;
`;

const Banner3 = styled('img')({
    position: 'relative',
    height: '20em',
    width: 'calc(33%)',
    paddingRight: '0.3em'
});

const Banner4 = styled('img')({
    position: 'relative',
    height: '20em',
    width: 'calc(33%)',
    paddingRight: '0.3em'
});

const Banner5 = styled('img')({
  position: 'relative',
  height: '20em',
  width: 'calc(33.2%)'
});

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const CarouselAndBanners = () => {
  return (
    <>
        <CarouselStyle
            responsive={responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            swipeable={false}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={true}
            centerMode={false}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            slidesToSlide={1}
        >
        <Image src='https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50' alt="banner" />
        <Image src='https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50' alt="banner" />
        <Image src='https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50' alt="banner" />
        <Image src='https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50' alt="banner" />
    </CarouselStyle>
    <Banner1 src={img1}></Banner1>
    <Banner2 src={img2}></Banner2>
    <BannerBox>
        <Banner3 src={img3}></Banner3>
        <Banner4 src={img4}></Banner4>
        <Banner5 src={img5}></Banner5>
    </BannerBox>
    </>
  )
}

export default CarouselAndBanners;