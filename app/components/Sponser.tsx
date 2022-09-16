import { Box, Image } from "@chakra-ui/react";

const Sponser = ({ image, name }: { image: string; name: string }) => (
  <Box
    borderColor={"#1204B7"}
    borderWidth={{ base: "2px", sm: "4px" }}
    borderRadius={{ base: "8px", sm: "16px", md: "23px" }}
    bgColor="black"
    p={{
      base: "8px 17px",
      xl: "24px 49px",
    }}
  >
    <Image src={image} alt={name} mx="auto" />
  </Box>
);

export default Sponser;
