import {
  Box,
  Container,
  HStack,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  StackItem,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import logoImage from "../assets/img/logo.png";

const NavList = ({ children }: { children: ReactNode }) => (
  <HStack
    as={List}
    spacing={{ base: "20px", lg: "40px" }}
    align={{
      lg: "center",
    }}
  >
    {children}
  </HStack>
);

const NavListItem = ({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) => (
  <ListItem>
    <Link
      color="white"
      _hover={{
        color: "whiteAlpha.800",
      }}
      fontSize={{ base: "15px", lg: "25px" }}
    >
      {children}
    </Link>
  </ListItem>
);

const SocialList = ({ children }: { children: ReactNode }) => (
  <HStack as={List} spacing={{ base: "20px", md: "40px" }}>
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
      display={"block"}
      height={{ base: "23px", md: "30px" }}
      lineHeight={1}
      fontSize={{ base: "23px", md: "30px" }}
    >
      <Icon as={icon} />
    </Link>
  </ListItem>
);

const Header = () => {
  const [isTop, setTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setTop(false);
      return;
    }
    setTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        py="4"
        bgColor={isTop ? "transparent" : "black"}
        pos={"fixed"}
        left="0"
        top="0"
        w="100%"
        zIndex={"999"}
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
          <HStack justifyContent={"space-between"}>
            <StackItem>
              <Link href="/">
                <Image
                  src={logoImage.src}
                  w={{ base: "35px", md: "55px", lg: "70px" }}
                  alt="Hentis"
                />
              </Link>
            </StackItem>
            <StackItem>
              <HStack
                spacing={{
                  base: "20px",
                  lg: "40px",
                }}
              >
                <NavList>
                  <NavListItem href="/litepaper">Litepaper</NavListItem>
                  <NavListItem href="/blog">Blog</NavListItem>
                </NavList>
                <SocialList>
                  <SocialListItem icon={FaDiscord} href="https://discord.com" />
                  <SocialListItem
                    icon={FaTelegramPlane}
                    href="https://discord.com"
                  />
                  <SocialListItem icon={FaTwitter} href="https://discord.com" />
                </SocialList>
              </HStack>
            </StackItem>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
