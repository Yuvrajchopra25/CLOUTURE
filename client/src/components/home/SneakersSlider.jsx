// Sneakers slider on home page

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Box, Typography, styled, Button } from '@mui/material';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Component = styled(Box)`
    background: rgb(25,25,25);
    height: 400px;
    padding-top: 0.2em;
`;

const BoxText = styled('h1')`
    color: white;
    position: absolute;
    margin-top: 20px;
    //top: calc(37em);
    font-size: 50px;
    left: calc(0.5em);
`;

const BoxTextBelow = styled('h1')`
    color: white;
    position: absolute;
    margin-top: 70px;
    font-size: 50px;
    //top: calc(38.2em);
    left: calc(0.5em);
`;

const BoxTextBelowBelow = styled('p')`
    color: white;
    position: absolute;
    margin-top: 150px;
    left: calc(1.5em);
    font-size: 20px;
`;

const BoxTextBelowBelowBelow = styled('p')`
    color: white;
    position: absolute;
    margin-top: 180px;
    left: calc(1.5em);
    font-size: 20px;
`;

const Btn = styled(Button)`
    position: absolute;
    z-index: 1;
    top: calc(73em);
    left: calc(1.5em);
    height: 3em;
    color: white;
    text-transform: none;
    font-size: 1.2em;
    padding: 1em 1em;
    border: 1px solid white;
    background: transparent;
    &:hover{
        color: black;
        background-color: white;
    }
`;

const CarouselStyle = styled(Carousel)`
    //margin-right: 10px;
    margin: 40px 10px 40px 400px;
    //margin-left: 400px;
`;

const BoxStyle = styled(Box)`
    background: white;
    text-align: center;
    padding: 15px 5px;
    margin: 2px;
`;

const Image = styled('img')({
    width: 'auto',
    height: 250
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;

const SneakersSlider = () =>{
    return(
        <Component>
        <BoxText>Trending</BoxText>
                <BoxTextBelow>Items:</BoxTextBelow>
                <BoxTextBelowBelow>Browse the collection of our best selling</BoxTextBelowBelow>
                <BoxTextBelowBelowBelow>and trending products</BoxTextBelowBelowBelow>
                <Btn variant="outlined">View All</Btn>
                <CarouselStyle
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
                    <Image src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" alt="product1" />
                    <Text style={{ fontWeight: 600, color: 'black' }}>product 1</Text>
                    <Text style={{ color: 'black' }}>Lowest Ask</Text>
                    <Text style={{ color: 'black', fontWeight: 600 }}>$120</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70" alt="product2" />
                    <Text style={{ fontWeight: 600, color: 'black' }}>product 2</Text>
                    <Text style={{ color: 'black' }}>Lowest Ask</Text>
                    <Text style={{ color: 'black', fontWeight: 600 }}>$220</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="product3" />
                    <Text style={{ fontWeight: 600, color: 'black' }}>product 3</Text>
                    <Text style={{ color: 'black' }}>Lowest Ask</Text>
                    <Text style={{ color: 'black', fontWeight: 600 }}>$270</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70" alt="product4" />
                    <Text style={{ fontWeight: 600, color: 'black' }}>product 4</Text>
                    <Text style={{ color: 'black' }}>Lowest Ask</Text>
                    <Text style={{ color: 'black', fontWeight: 600 }}>$120</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" alt="product5" />
                    <Text style={{ fontWeight: 600, color: 'black' }}>product 5</Text>
                    <Text style={{ color: 'black' }}>Lowest Ask</Text>
                    <Text style={{ color: 'black', fontWeight: 600 }}>$598</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70" alt="product6" />
                    <Text style={{ fontWeight: 600, color: 'black' }}>product 6</Text>
                    <Text style={{ color: 'black' }}>Lowest Ask</Text>
                    <Text style={{ color: 'black', fontWeight: 600 }}>$99</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70" alt="product7" />
                    <Text style={{ fontWeight: 600, color: 'black' }}>product 7</Text>
                    <Text style={{ color: 'black' }}>Lowest Ask</Text>
                    <Text style={{ color: 'black', fontWeight: 600 }}>$170</Text>
                </BoxStyle>
            </CarouselStyle>
        </Component>
    )
}

export default SneakersSlider;