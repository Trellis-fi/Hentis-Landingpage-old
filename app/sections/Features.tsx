import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";

import launchpadImage from "../assets/img/features/launchpad.gif";
import lendingProtocalImage from "../assets/img/features/lending-protocal.gif";
import metadexImage from "../assets/img/features/metadex.gif";
import FeatureItem from "../components/FeatureItem";

const Features = () => (
  <Box pt={{ base: 5, lg: 12 }} pb={{ base: 5, lg: 24 }}>
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
        mb={{ base: "20px", lg: "39px" }}
        fontSize={{ base: "23px", sm: "30px", md: "40px", lg: "55px" }}
      >
        ADVANCED DEFI PLATFORM
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        alignItems="stretch"
        gap={{ base: 5, xl: 10 }}
      >
        <GridItem w="100%">
          <FeatureItem title="Meta DEX" image={metadexImage.src}>
            Advanced DEX with fee discounts, Light-speed swap, friction-less
            yields and low gas fee.
          </FeatureItem>
        </GridItem>
        <GridItem w="100%">
          <FeatureItem title="Launchpad" image={launchpadImage.src}>
            Pioneering launchpad that strives to assist projects with community
            fundraising and marketing strategy
          </FeatureItem>
        </GridItem>
        <GridItem w="100%">
          <FeatureItem
            title="Lending Protocal"
            image={lendingProtocalImage.src}
          >
            Permisionless all-in-one, peer-peer Defi lending protocol on Solana
          </FeatureItem>
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export default Features;
