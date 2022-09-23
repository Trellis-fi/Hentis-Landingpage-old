import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import swapImage from "../assets/img/interface/swap.png";

const EarlyAccess = () => (
  <Box py={"55px"}>
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
        "2xl": "container.2xl",
      }}
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        alignItems="center"
        gap={{ base: 10 }}
      >
        <GridItem w="100%">
          <Box p={5}>
            <Image
              src={swapImage.src}
              alt="Early Access"
              width={"100%"}
              transform={
                {
                  // base: "rotate(-17deg) translateX(30px)",
                  // sm: "rotate(-17deg) translateX(50px)",
                }
              }
            />
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Heading
            fontSize={{ base: "20px", sm: "25px", lg: "30px" }}
            textTransform="uppercase"
            mb={{ base: 2, lg: 4 }}
            mt={{ base: 4, sm: 8, lg: -20 }}
          >
            Early Access
          </Heading>
          <Text
            fontSize={{ base: "15px", sm: "20px", lg: "25px" }}
            mb={{ base: 4, md: 6, lg: 10 }}
            fontWeight="500"
          >
            Hentis is nearing early access. If you&apos;d like to be a part of
            building the future of decentralized finance with us, give Hentis a
            try and join our journey. Hentis beta test will be available soon!.
          </Text>
          <Button
            as={AnchorLink}
            href="#subscribe"
            sx={{
              ":hover": {
                textDecor: "none",
              },
            }}
            colorScheme="primary"
            borderRadius={"full"}
            p={{ base: "16px 80px", sm: "24px 80px", lg: "32px 80px" }}
            fontSize={{ base: "15px", sm: "20px", lg: "25px" }}
            fontWeight={"500"}
          >
            Subscribe
          </Button>
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export default EarlyAccess;
