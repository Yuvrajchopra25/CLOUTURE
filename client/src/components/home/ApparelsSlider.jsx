// Apparels slider on home page

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
    background: black;
    margin-top: 184px;
`;

const BoxTemp = styled('h1')`
    color: white;
    position: absolute;
    top: calc(71em);
    left: calc(1em);
    z-index: 1;
`;

const Btn = styled(Button)({
    position: 'absolute',
    zIndex: '1',
    top: 'calc(127em)',
    left: 'calc(7em)',
    height: '3em',
    color: 'black',
    textTransform: 'none',
    fontSize: '1.2em',
    padding: '1em 1em',
    border: '1px solid black',
    boxShadow: '5px 5px 7px 2px rgba(255, 255, 255, 0.5)',
    background: 'rgba(255,255,255,1)'
});

const CarouselStyle = styled(Carousel)`
    background-color: transparent;
    margin-left: 400px;
`;

const BoxStyle = styled(Box)`
     text-align: center;
     padding: 25px 15px;
`;

const Image = styled('img')({
    width: 'auto',
    height: 100
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;

const ApparelsSlider = () =>{
    return(
        <Component>
                <BoxTemp>Top Selling Apparels</BoxTemp>
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
                    <Text style={{ fontWeight: 600, color: 'white' }}>product 1</Text>
                    <Text style={{ color: 'pink' }}>Price</Text>
                    <Text style={{ color: 'white', fontWeight: 600 }}>Discount</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70" alt="product2" />
                    <Text style={{ fontWeight: 600, color: 'white' }}>product 2</Text>
                    <Text style={{ color: 'pink' }}>Price</Text>
                    <Text style={{ color: 'white', fontWeight: 600 }}>Discount</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="product3" />
                    <Text style={{ fontWeight: 600, color: 'white' }}>product 3</Text>
                    <Text style={{ color: 'pink' }}>Price</Text>
                    <Text style={{ color: 'white', fontWeight: 600 }}>Discount</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70" alt="product4" />
                    <Text style={{ fontWeight: 600, color: 'white' }}>product 4</Text>
                    <Text style={{ color: 'pink' }}>Price</Text>
                    <Text style={{ color: 'white', fontWeight: 600 }}>Discount</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70" alt="product5" />
                    <Text style={{ fontWeight: 600, color: 'white' }}>product 5</Text>
                    <Text style={{ color: 'pink' }}>Price</Text>
                    <Text style={{ color: 'white', fontWeight: 600 }}>HI</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70" alt="product6" />
                    <Text style={{ fontWeight: 600, color: 'white' }}>product 6</Text>
                    <Text style={{ color: 'pink' }}>Price</Text>
                    <Text style={{ color: 'white', fontWeight: 600 }}>Discount</Text>
                </BoxStyle>
                <BoxStyle>
                    <Image src="https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70" alt="product7" />
                    <Text style={{ fontWeight: 600, color: 'white' }}>product 7</Text>
                    <Text style={{ color: 'pink' }}>Price</Text>
                    <Text style={{ color: 'white', fontWeight: 600 }}>Discount</Text>
                </BoxStyle>
            </CarouselStyle>
        </Component>
    )
}

export default ApparelsSlider;