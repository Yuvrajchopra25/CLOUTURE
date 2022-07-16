// Banner on the home page

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import { styled } from '@mui/material';

const Image = styled('img')({
    objectFit: 'cover',
    width: '100%',
    height: 630,
})

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

const Banner = () => {
  return (
    <Carousel
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
    </Carousel>
  )
}

export default Banner;