// Sneakers slider on home page

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Typography, styled, Button } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  display: flex;
  background: black;
  height: 27em;
  margin-top: 0.2em;
  width: 100%;
`;

const HeaderBox = styled(Box)`
  height: auto;
  width: 30%;
  margin: 1em;
  background-color: black;
`;

const Heading = styled(Typography)`
  font-size: 3.2em;
  font-weight: 600;
  line-height: 1em;
  color: white;
`;

const SubHeading = styled(Typography)`
  color: white;
  font-size: 1.2em;
  margin-top: 1em;
`;

const Btn = styled(Button)`
  color: white;
  top: 5em;
  padding: 1em 1em;
  font-size: 1em;
  text-transform: none;
  border: 2px solid white;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;

const Slide = styled(Box)`
  height: auto;
  width: 70%;
  margin: 1em;
  background-color: black;
`;

const BoxStyle = styled(Box)`
  background: white;
  height: auto;
  width: auto;
  text-align: center;
  padding: 0.5em;
  margin: 0.2em;
`;

const Image = styled("img")({
  height: "17em",
  width: "100%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
});

const ProductName = styled(Typography)`
  font-size: 14px;
  margin-top: 25px;
  font-weight: 600;
  color: black;
`;

const PriceAsked = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
  color: black;
`;

const Price = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
  font-weight: 600;
  color: black;
`;

const SneakersSlider = () => {
  return (
    <Component>
      <HeaderBox>
        <Heading>Trending Items:</Heading>
        <SubHeading>
          Browse the collection of our best selling <br/> and trending products
        </SubHeading>
        <Btn>Read More</Btn>
      </HeaderBox>
      <Slide>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          slidesToSlide={1}
          centerMode={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          <BoxStyle>
            <Image
              src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"
              alt="product1"
            />
            <ProductName>product 1</ProductName>
            <PriceAsked>Lowest Ask</PriceAsked>
            <Price>$120</Price>
          </BoxStyle>
          <BoxStyle>
            <Image
              src="https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70"
              alt="product2"
            />
            <ProductName>product 2</ProductName>
            <PriceAsked>Lowest Ask</PriceAsked>
            <Price>$220</Price>
          </BoxStyle>
          <BoxStyle>
            <Image
              src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70"
              alt="product3"
            />
            <ProductName>product 3</ProductName>
            <PriceAsked>Lowest Ask</PriceAsked>
            <Price>$270</Price>
          </BoxStyle>
          <BoxStyle>
            <Image
              src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70"
              alt="product4"
            />
            <ProductName>product 4</ProductName>
            <PriceAsked>Lowest Ask</PriceAsked>
            <Price>$120</Price>
          </BoxStyle>
          <BoxStyle>
            <Image
              src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"
              alt="product5"
            />
            <ProductName>product 5</ProductName>
            <PriceAsked>Lowest Ask</PriceAsked>
            <Price>$598</Price>
          </BoxStyle>
          <BoxStyle>
            <Image
              src="https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70"
              alt="product6"
            />
            <ProductName>product 6</ProductName>
            <PriceAsked>Lowest Ask</PriceAsked>
            <Price>$99</Price>
          </BoxStyle>
          <BoxStyle>
            <Image
              src="https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70"
              alt="product7"
            />
            <ProductName>product 7</ProductName>
            <PriceAsked>Lowest Ask</PriceAsked>
            <Price>$170</Price>
          </BoxStyle>
        </Carousel>
      </Slide>
    </Component>
  );
};

export default SneakersSlider;
