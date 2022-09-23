import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import Person from "../components/Person";

import adrienImage from "../assets/img/team/adrien-bhol.png";
import atosImage from "../assets/img/team/atos-tiger.png";
import johnImage from "../assets/img/team/john-olumide.png";
import joshuaImage from "../assets/img/team/joshua-adeolu.png";
import nickImage from "../assets/img/team/nick-jackson.png";
import tiagoImage from "../assets/img/team/tiago-emanuel.png";

const Team = () => (
  <Box bgColor={"black"} color="white" py={{ base: 4, md: 10, lg: 16 }}>
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
        mb={{ base: 14, lg: 20 }}
        fontSize={{ base: "30px", sm: "40px", lg: "55px" }}
      >
        Core team
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: 6, lg: 10 }}
      >
        <GridItem w="100%">
          <Person
            name="John Olumide"
            position="CEO"
            image={johnImage.src}
            // linkedinURL={"https://www.linkedin.com/in/john-olumide-4377031b6"}
          />
        </GridItem>
        <GridItem w="100%">
          <Person name="Atos Tiger" position="CTO" image={atosImage.src} />
        </GridItem>
        <GridItem w="100%">
          <Person
            name="Joshua Adeolu"
            position="BDM"
            image={joshuaImage.src}
            // linkedinURL={"https://www.linkedin.com/in/joshua-adeolu-023695186"}
          />
        </GridItem>
        <GridItem w="100%">
          <Person
            name="Adrien Bhol"
            position="Community Mod"
            image={adrienImage.src}
          />
        </GridItem>
        <GridItem w="100%">
          <Person
            name="Nick Jackson"
            position="CFO"
            image={nickImage.src}
            // linkedinURL={"https://www.linkedin.com/in/nick-j-jackson"}
          />
        </GridItem>
        <GridItem w="100%">
          <Person
            name="Tiago Emanuel"
            position="Advisor"
            image={tiagoImage.src}
            // linkedinURL={"https://www.linkedin.com/in/tiagotpratas"}
          />
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export default Team;
