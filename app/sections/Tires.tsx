import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

import { EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Hen from "../components/Hen";

import hen1Image from "../assets/img/hens/hen1.png";
import hen2Image from "../assets/img/hens/hen2.png";
import hen3Image from "../assets/img/hens/hen3.png";

const Tires = () => (
  <Box py={{ base: 5, lg: 12 }} bgColor="black" color="white">
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
        "2xl": "container.2xl",
      }}
    >
      <Heading
        textTransform={"uppercase"}
        textAlign="center"
        mb={{ base: 8, lg: 24 }}
        fontSize={{ base: "30px", sm: "40px", lg: "55px" }}
      >
        Tires
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(9, 1fr)",
        }}
        alignItems="center"
        gap={12}
        sx={{
          ".swiper-button-next, .swiper-button-prev": {
            border: "2px solid var(--swiper-theme-color)",
            borderRadius: "var(--chakra-radii-full)",
            width: "48px",
            height: "48px",
          },
        }}
      >
        <GridItem colSpan={5}>
          <Swiper
            effect="coverflow"
            centeredSlides
            slidesPerView={1.8}
            slidesPerGroup={1}
            loop
            centerInsufficientSlides
            centeredSlidesBounds
            coverflowEffect={{
              rotate: 0,
              stretch: 2,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            navigation
            modules={[EffectCoverflow, Navigation]}
          >
            <SwiperSlide>
              {({ isActive, isPrev, isNext }) => {
                return (
                  <Hen
                    title={"Guaranteed Allocation"}
                    price={5000}
                    image={hen1Image.src}
                    isActive={isActive}
                    isPrev={isPrev}
                    isNext={isNext}
                  />
                );
              }}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive, isPrev, isNext }) => (
                <Hen
                  title={"Guaranteed Allocation"}
                  price={5000}
                  image={hen2Image.src}
                  isActive={isActive}
                  isPrev={isPrev}
                  isNext={isNext}
                />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive, isPrev, isNext }) => (
                <Hen
                  title={"Guaranteed Allocation"}
                  price={5000}
                  image={hen3Image.src}
                  isActive={isActive}
                  isPrev={isPrev}
                  isNext={isNext}
                />
              )}
            </SwiperSlide>
          </Swiper>
        </GridItem>
        <GridItem colSpan={4}>
          <Heading
            fontSize={{ base: "20px", sm: "25px", lg: "30px" }}
            textTransform="uppercase"
            mb={4}
            mt={{ lg: -20 }}
          >
            TIERED SYSTEM
          </Heading>
          <Text
            fontSize={{ base: "15px", sm: "20px", lg: "25px" }}
            mb={{ base: 5, lg: 10 }}
            fontWeight="500"
          >
            Hentis launchpad features a 3 level tiers based on HEN token
            holdings to get allocation. Investors need to acquire HEN tokens
            based on the minimum requirement for the tier of their choice.
            Participants needs to stake HEN token before they can get
            whitelisted to participate in token sales.
          </Text>
          <Button
            colorScheme="primary"
            borderRadius={"full"}
            minW={48}
            p={{ base: "18px 36px", lg: "24px 48px" }}
            fontSize={{ base: "15px", lg: "20px" }}
            fontWeight={"500"}
          >
            Learn More
          </Button>
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export default Tires;
