import {
  AspectRatio,
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

import logoImage from "../assets/img/logo.png";

const NavList = ({ children }: { children: ReactNode }) => (
  <Stack
    as={List}
    spacing={{ base: "20px", lg: "40px" }}
    direction={{
      base: "column",
      lg: "row",
    }}
    align={{
      lg: "center",
    }}
  >
    {children}
  </Stack>
);

const NavListItem = ({
  href,
  children,
  isExternal = false,
}: {
  href?: string;
  children: ReactNode;
  isExternal?: boolean;
}) => (
  <ListItem>
    <Link
      color="white"
      _hover={{
        color: "whiteAlpha.800",
      }}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      fontSize={{ base: "16px" }}
    >
      {children}
    </Link>
  </ListItem>
);

const SocialList = ({ children }: { children: ReactNode }) => (
  <HStack as={List} spacing={"40px"}>
    {children}
  </HStack>
);

const SocialListItem = ({ href, icon }: { href?: string; icon: any }) => (
  <ListItem>
    <Link
      color="white"
      _hover={{
        color: "whiteAlpha.800",
      }}
      target={"_blank"}
      href={href}
      display={"block"}
      height={{ base: "23px", sm: "30px" }}
      lineHeight={1}
      fontSize={{ base: "23px", sm: "30px" }}
    >
      <Icon as={icon} />
    </Link>
  </ListItem>
);

const Footer = () => {
  return (
    <>
      <Box position={"relative"}>
        <AspectRatio ratio={1632 / 100}>
          <Box>
            <AspectRatio
              ratio={1632 / 355}
              position={"absolute"}
              left="-10%"
              top={0}
              w="120%"
            >
              <Box left={0} bgColor="black" borderRadius={"50%"}></Box>
            </AspectRatio>
          </Box>
        </AspectRatio>
        <Box
          bgColor="black"
          py={{
            base: "50px",
            lg: "100px",
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
            <Stack
              direction={{
                base: "column",
                lg: "row",
              }}
              spacing="40px"
            >
              <HStack>
                <Image
                  src={logoImage.src}
                  alt="Hentis"
                  width={{
                    base: "30px",
                    sm: "70px",
                  }}
                />
                <Heading
                  color="white"
                  fontSize={{
                    base: "20px",
                    sm: "40px",
                  }}
                >
                  Hentis.one
                </Heading>
              </HStack>
              <NavList>
                <NavListItem href="mailto:contact@hentis.one">
                  Contact Us
                </NavListItem>
                <NavListItem href="https://docs.hentis.one" isExternal>
                  Document
                </NavListItem>
                <NavListItem href="http://hentis.medium.com" isExternal>
                  Blog
                </NavListItem>
              </NavList>
              <SocialList>
                <SocialListItem
                  icon={FaDiscord}
                  href="https://discord.gg/NBnhV8tsjj"
                />
                <SocialListItem
                  icon={FaTwitter}
                  href="https://twitter.com/Hentis_one"
                />
                <SocialListItem
                  icon={FaTelegramPlane}
                  href="https://t.me/Hentis_one"
                />
                <SocialListItem
                  icon={FaLinkedin}
                  href="https://www.linkedin.com/company/hentis-one/"
                />
                <SocialListItem
                  icon={FaGithub}
                  href="https://github.com/hentis-one"
                />
                <SocialListItem
                  icon={FaMedium}
                  href="http://hentis.medium.com"
                />
              </SocialList>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
