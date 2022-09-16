import {
  AspectRatio,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Box position={"relative"}>
        <Box
          top="0"
          right="0"
          h="815px"
          w="384px"
          zIndex={"998"}
          position={"absolute"}
          bgGradient="radial(#494949, rgba(217, 217, 217, 0))"
          transform={"rotate(-45deg) translate(350px, -100px)"}
          display={{ base: "none", md: "block" }}
        />
        <Box
          bgColor="black"
          color="white"
          pt={{
            base: "100px",
            lg: "150px",
          }}
          pb={{
            base: "50px",
            lg: "25px",
          }}
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
              mb="32px"
              fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "70px" }}
              maxW="774px"
              mx="auto"
            >
              ACCESS THE FUTURE OF DECENTRALIZED FINANCE
            </Heading>
            <Text
              fontSize={{ base: "15px", sm: "20px", md: "25px", lg: "30px" }}
              textAlign="center"
              mb="4"
            >
              One-stop decentralized finance application platform built on
              solana.
            </Text>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(5, 1fr)",
              }}
              maxW="960px"
              mx="auto"
              gap={{ base: "4", md: "6", lg: "10" }}
            >
              <GridItem colSpan={{ base: 1, md: 3 }}>
                <Input
                  placeholder="Enter your email address"
                  bgColor={"#D9D9D9"}
                  borderRadius="full"
                  color={"black"}
                  p={{ base: "20px", md: "28px", lg: "35px" }}
                  fontSize={{ base: "15px", md: "20px", lg: "25px" }}
                />
              </GridItem>
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <Button
                  colorScheme="primary"
                  borderRadius="full"
                  w="100%"
                  p={{ base: "20px", md: "28px", lg: "35px" }}
                  fontSize={{ base: "15px", md: "20px", lg: "25px" }}
                >
                  Subscribe
                </Button>
              </GridItem>
            </Grid>
          </Container>
        </Box>
        <AspectRatio ratio={1632 / 100}>
          <Box>
            <AspectRatio
              ratio={1632 / 355}
              position={"absolute"}
              left="-10%"
              top={"-330%"}
              w="120%"
            >
              <Box bgColor="black" borderRadius={"50%"}></Box>
            </AspectRatio>
          </Box>
        </AspectRatio>
      </Box>
    </>
  );
};

export default Hero;
