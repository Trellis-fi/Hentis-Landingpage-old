import { Box, Heading, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

const FeatureItem = ({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children: ReactNode;
}) => (
  <Box
    bgGradient={"linear(#1204B7, #000000)"}
    color="white"
    p={{ base: "17px 28px", lg: "28px 28px" }}
    borderRadius="2xl"
    height="100%"
  >
    <Image
      src={image}
      alt={title}
      w={{ base: "80px", md: "140px" }}
      borderRadius={"full"}
      mx="auto"
      mb="11px"
    />
    <Heading
      textAlign={"center"}
      fontSize={{ base: "20px", sm: "25px", lg: "30px" }}
      mb="20px"
    >
      {title}
    </Heading>
    <Box
      textAlign={"center"}
      fontSize={{ base: "15px", sm: "20px", lg: "25px" }}
      mb="15px"
    >
      {children}
    </Box>
  </Box>
);

export default FeatureItem;
