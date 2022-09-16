import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import Person from "../components/Person";

import solanaImage from "../assets/img/backedby/solana.png";
import kucoinImage from "../assets/img/backedby/kucoin.png";
import dweb3Image from "../assets/img/backedby/dweb3.png";
import newaveImage from "../assets/img/backedby/newave.png";
import rarestoneImage from "../assets/img/backedby/rarestone.png";
import alamedaResearchImage from "../assets/img/backedby/alameda-research.png";

import Sponser from "../components/Sponser";

const BackedBy = () => (
  <Box
    bgGradient={
      "conic(from 162deg, #1204B7, #000000, #000000, #000000, #000000, #1204B7)"
    }
    color="white"
    py={{ base: 10, lg: 14 }}
  >
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
        mb={{ base: 8, md: 14, lg: 20 }}
        fontSize={{ base: "30px", sm: "40px", lg: "55px" }}
      >
        Backed by
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        mx={{ base: 0, md: -5, lg: -8 }}
        gap={8}
        mb={{ sm: 4, md: 8 }}
      >
        <GridItem w="100%" px={{ base: 0, md: 5, lg: 8 }}>
          <Sponser name="Solana" image={solanaImage.src} />
        </GridItem>
        <GridItem w="100%" px={{ base: 0, md: 5, lg: 8 }}>
          <Sponser name="Kucoin" image={kucoinImage.src} />
        </GridItem>
        <GridItem w="100%" px={{ base: 0, md: 5, lg: 8 }}>
          <Sponser name="DWeb3" image={dweb3Image.src} />
        </GridItem>
        <GridItem w="100%" px={{ base: 0, md: 5, lg: 8 }}>
          <Sponser name="Newave" image={newaveImage.src} />
        </GridItem>
        <GridItem w="100%" px={{ base: 0, md: 5, lg: 8 }}>
          <Sponser name="Rarestone" image={rarestoneImage.src} />
        </GridItem>
        <GridItem w="100%" px={{ base: 0, md: 5, lg: 8 }}>
          <Sponser name="Alameda Research" image={alamedaResearchImage.src} />
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export default BackedBy;
