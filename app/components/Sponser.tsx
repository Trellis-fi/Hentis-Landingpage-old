import { AspectRatio, Box, Image } from "@chakra-ui/react";

const Sponser = ({
  image,
  name,
  show = false,
}: {
  image: string;
  name: string;
  show?: boolean;
}) => (
  <Box
    borderColor={"#1204B7"}
    borderWidth={{ base: "2px", sm: "4px" }}
    borderRadius={{ base: "8px", sm: "16px", md: "23px" }}
    bgColor="black"
    p={{
      base: "16px 32px",
      md: "24px 48px",
      xl: "36px 69px",
    }}
  >
    {show ? (
      <Image
        src={image}
        alt={name}
        mx="auto"
        width={"100%"}
        display={"block"}
        objectFit="contain"
        __css={{ aspectRatio: "8 / 3" }}
      />
    ) : (
      <AspectRatio ratio={8 / 3}>
        <Box></Box>
      </AspectRatio>
    )}
  </Box>
);

export default Sponser;
