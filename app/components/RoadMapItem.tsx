import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

const RoadMapItem = ({
  color,
  title,
  children,
}: {
  color: string;
  children: ReactNode;
  title: string;
}) => (
  <Box bgGradient={"linear(#B1AFAF, rgba(217, 217, 217, 0) )"} pos="relative">
    <Box
      pos="absolute"
      w={{ base: "12px", lg: "22px" }}
      left={0}
      height="100%"
      bgGradient={`linear(${color}, rgba(217, 217, 217, 0))`}
    />
    <Box p={{ base: "21px 24px 21px 32px", lg: "29px 32px 29px 52px" }}>
      <Heading fontSize={{ base: "20px", lg: "25px" }}>{title}</Heading>
      <Box fontSize={{ base: "20px", lg: "25px" }}>{children}</Box>
    </Box>
  </Box>
);

export default RoadMapItem;
