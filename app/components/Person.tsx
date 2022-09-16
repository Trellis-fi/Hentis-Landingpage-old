import { Box, Heading, Icon, Img, Link, Text } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const Person = ({
  image,
  name,
  position,
  linkedinURL,
}: {
  image: any;
  name: string;
  position: string;
  linkedinURL?: string;
}) => (
  <Box>
    <Box
      bgGradient={"conic(from 180deg, #1204B7, #2BE3D8)"}
      pos={"relative"}
      borderRadius="50%"
      p={1}
      css={{
        aspectRatio: "1/1",
      }}
      mx="auto"
      mb="15px"
      width={{
        base: "100px",
        md: "193px",
      }}
    >
      <Img
        src={image}
        borderRadius="50%"
        objectFit="cover"
        css={{
          aspectRatio: "1/1",
        }}
        width={{
          base: "100px",
          md: "193px",
        }}
      />
      {linkedinURL && (
        <Box
          bgGradient={"conic(from 180deg, #1204B7, #2BE3D8)"}
          pos="absolute"
          left={{ base: "55%", md: "60%" }}
          top={{ base: "55%", md: "60%" }}
          width={{ base: "27px", md: "50px" }}
          height={{ base: "27px", md: "50px" }}
          borderRadius="full"
          padding="1px"
        >
          <Link
            display={"block"}
            target={"_blank"}
            href={linkedinURL}
            bgColor="whiteAlpha.800"
            width={{ base: "25px", md: "48px" }}
            height={{ base: "25px", md: "48px" }}
            textAlign={"center"}
            borderRadius="48px"
          >
            <Icon
              as={FaLinkedin}
              color={"primary.500"}
              fontSize={{ base: "15px", md: "22px" }}
              lineHeight={{ base: "25px", md: "48px" }}
              height={{ base: "25px", md: "48px" }}
            />
          </Link>
        </Box>
      )}
    </Box>
    <Heading
      fontWeight={"500"}
      fontSize={{ base: "15px", md: "25px" }}
      textAlign="center"
    >
      {name}
    </Heading>
    <Text
      fontSize={{ base: "15px", md: "25px" }}
      color="#2B53E3"
      textAlign="center"
    >
      {position}
    </Text>
  </Box>
);

export default Person;
