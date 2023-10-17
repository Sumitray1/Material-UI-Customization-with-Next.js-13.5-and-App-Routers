"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { Roboto } from "next/font/google";
//using custom fonts
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const themeOptions: ThemeOptions = {
  //customization of heading text
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontWeight: 900,
      fontSize: "35px",
      lineHeight: "33px",
      color: "#172121",
    }, //For header ie caption
    h2: {
      color: "#110229",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "normal",
    }, //for card titles
    h3: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "33px",
      color: "#172121",
    }, // line below headings

    h5: {
      fontWeight: 500,
      lineHeight: "33px",
      fontSize: "19px",
      color: "#383A47",
    }, //for card descriptions
    h6: {
      color: "#525252",
      fontWeight: 400,
      fontSize: "12px",
    }, //navbar text
  },

  //custimization of components  ie for buttons
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: "none",
          borderRadius: "12px",
          padding: "14px 24px",
          backgroundColor: "#eb5148",
          color: "#FFF",
          "&:hover": {
            backgroundColor: "#eb6648",
            transition:
              "background-color 0.3s cubic-bezier(0,-0.77,.77,.57),transform 0.3s ease-in,box-shadow 0.3s ease-in",
          },
        },
        outlined: {
          textTransform: "none",
          border: "1.5px solid #E8E9ED",
          borderRadius: "12px",
          padding: "14px 24px",
          color: "#eb5148",
          "&:hover": {
            transition:
              "background-color 0.3s cubic-bezier(0,-0.77,.77,.57),transform 0.3s ease-in,box-shadow 0.3s ease-in",
          },
        },
        text: {
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "24px",
          fontFamily: roboto.style.fontFamily,
          textTransform: "none",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
