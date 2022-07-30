// Carousel and Banners below the top selling sneakers

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { styled, Box } from "@mui/material";

// Images
import img1 from "/home/yuvraj/Clouture/client/src/Images/home_page/apparels.jpeg";
import img2 from "/home/yuvraj/Clouture/client/src/Images/home_page/sneakers_collection.webp";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-top: 0.2em;
  height: 25em;
  width: 100%;
`;

const CarouselBox = styled(Box)`
  height: 25em;
  width: calc(60% - 0.2em);
  margin-right: 0.2em;
`;

const CarouselStyle = styled(Carousel)`
  height: auto;
  width: 100%;
`;

// Image inside carousel banner
const Image = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "25em",
});

const RightBannerBox = styled(Box)`
  height: auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Banner1 = styled(Box)`
  height: calc(50% - 0.15em);
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 0.2em;
`;

const Banner2 = styled(Box)`
  height: calc(50% - 0.15em);
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselAndBanners = () => {
  return (
    <>
      <MainContainer>
        <CarouselBox>
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
            <Image
              src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50"
              alt="banner"
            />
            <Image
              src="https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50"
              alt="banner"
            />
            <Image
              src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50"
              alt="banner"
            />
            <Image
              src="https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50"
              alt="banner"
            />
          </CarouselStyle>
        </CarouselBox>
        <RightBannerBox>
          <Banner1 sx={{ backgroundImage: `url(${img1})` }}></Banner1>
          <Banner2 sx={{ backgroundImage: `url(${img2})` }}></Banner2>
          {/* <BannerBox>
        <Banner3 src={img3}></Banner3>
        <Banner4 src={img4}></Banner4>
        <Banner5 src={img5}></Banner5>
    </BannerBox> */}
        </RightBannerBox>
      </MainContainer>
    </>
  );
};

export default CarouselAndBanners;
