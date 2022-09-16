import { extendTheme } from "@chakra-ui/react";

const themeConfig = {
  colors: {
    primary: {
      "50": "#5546ff",
      "100": "#4b3cfc",
      "200": "#4132f2",
      "300": "#3728e8",
      "400": "#2d1ede",
      "500": "#2314d4",
      "600": "#190aca",
      "700": "#0f00c0",
      "800": "#0500b6",
      "900": "#0000ac",
    },
  },
  styles: {
    global: (props: any) => ({
      ":root": {
        "--swiper-theme-color": "white",
        "--swiper-navigation-size": "24px",
      },
      "html, body": {
        overflowX: "hidden",
        color: "black",
        bgColor: "#e2e2e2",
        fontFamily: "Inter",
      },
    }),
  },
};

const theme = extendTheme(themeConfig);

export default theme;
