import { Box, Image, Text } from "@chakra-ui/react";
import { transform } from "framer-motion";

const Hen = ({
  image,
  price,
  title,
  isActive = false,
  isNext = false,
  isPrev = false,
}: {
  image: string;
  price: number;
  title: string;
  isActive?: boolean;
  isNext?: boolean;
  isPrev?: boolean;
}) => (
  <Box
    bgGradient={
      isActive ? "linear(#2314D4, #000000)" : "linear(#2314D4, #333333)"
    }
    p={{ base: "60px 12px 12px 12px", lg: "124px 24px 49px 24px" }}
    transform={{
      lg: isActive
        ? "translateX(0)"
        : isNext
        ? "translateX(-138px)"
        : "translateX(138px)",
      base: isActive
        ? "translateX(0)"
        : isNext
        ? "translateX(-148px)"
        : "translateX(148px)",
    }}
    transition={"transform 0.2s"}
    borderRadius="2xl"
  >
    <Image src={image} alt={title} />
    <Text
      textAlign={"center"}
      fontSize={{ base: "20px", md: "25px", lg: "30px" }}
      fontWeight={"700"}
    >
      {new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
        price
      )}{" "}
      $HENS
    </Text>
    <Text textAlign={"center"} fontSize={{ base: "15px", lg: "20px" }}>
      {title}
    </Text>
  </Box>
);

export default Hen;
