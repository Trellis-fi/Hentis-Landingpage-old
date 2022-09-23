import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import RoadMapItem from "../components/RoadMapItem";

const RoadMap = () => (
  <Box
    bgGradient={"linear(#000000, #1204B7)"}
    color="white"
    py={{ base: 5, lg: 20 }}
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
        mb={{ base: 5, lg: 8 }}
        fontSize={{ base: "30px", sm: "40px", lg: "55px" }}
      >
        Road Map
      </Heading>
      <Grid gap={{ base: 4, lg: 8 }}>
        <GridItem w={{ base: "94%", lg: "50%" }} ml={{ base: 0 }}>
          <RoadMapItem title="PHASE I" color="#FEC24C">
            <p>Team onboarding</p>
            <p>Project UI/UX design</p>
            <p>Official website launch</p>
          </RoadMapItem>
        </GridItem>
        <GridItem w={{ base: "94%", lg: "50%" }} ml={{ base: "3%", lg: "25%" }}>
          <RoadMapItem title="PHASE II" color="#FE4CF7">
            <p>Partnerships</p>
            <p>Completion of Hentis swap and launchpad development</p>
            <p>Hentis swap and launchpad beta launch</p>
            <p>Community airdrop events</p>
            <p>Token launch and listings</p>
          </RoadMapItem>
        </GridItem>
        <GridItem w={{ base: "94%", lg: "50%" }} ml={{ base: "6%", lg: "50%" }}>
          <RoadMapItem title="PHASE III" color="#2BE3D8">
            <p>Technical whitepaper and documentations launch</p>
            <p>Lending and borrowing platform launch</p>
            <p>Multi-chain expansion</p>
            <p>Listing on tier-1 CEXs</p>
            <p>DAO realease</p>
            <p>More development</p>
          </RoadMapItem>
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export default RoadMap;
