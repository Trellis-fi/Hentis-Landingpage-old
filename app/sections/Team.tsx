import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import Person from "../components/Person";

import jingImage from "../assets/img/team/zh-jing.png";
import mickeyImage from "../assets/img/team/mickey-iron.png";
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
            linkedinURL={"https://www.linkedin.com/in/john-olumide-4377031b6"}
          />
        </GridItem>
        <GridItem w="100%">
          <Person
            name="Nick Jackson"
            position="CTO"
            image={nickImage.src}
            linkedinURL={"https://www.linkedin.com/in/nick-j-jackson"}
          />
        </GridItem>
        <GridItem w="100%">
          <Person
            name="Joshua Adeolu"
            position="BDM"
            image={joshuaImage.src}
            linkedinURL={"https://www.linkedin.com/in/joshua-adeolu-023695186"}
          />
        </GridItem>
        <GridItem w="100%">
          <Person
            name="Atos Tiger"
            position="CMO"
            image={mickeyImage.src}
            linkedinURL="https://www.linkedin.com/in/micky-cmo"
          />
        </GridItem>
        <GridItem w="100%">
          <Person
            name="Zh Jing"
            position="CPO"
            image={jingImage.src}
            linkedinURL="https://www.linkedin.com/in/zh-jing-150805200"
          />
        </GridItem>
        <GridItem w="100%">
          <Person
            name="Tiago Emanuel"
            position="Advisor"
            image={tiagoImage.src}
            linkedinURL={"https://www.linkedin.com/in/tiagotpratas"}
          />
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export default Team;
