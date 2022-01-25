import {
  blackA,
  blueDark,
  crimson,
  crimsonDark,
  grassDark,
  green,
  indigo,
  indigoDark,
  whiteA,
  yellowDark,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      text: indigoDark.indigo12,
      textLight: indigo.indigo12,

      background: indigoDark.indigo1,

      borderDark: blackA.blackA8,
      borderLight: whiteA.whiteA8,

      overlayDark: blackA.blackA12,
      overlayLight: whiteA.whiteA12,

      uiBackground: indigoDark.indigo3,
      uiBackgroundHover: indigoDark.indigo4,
      uiBackgroundSelect: indigoDark.indigo5,
      uiBorder: indigoDark.indigo6,
      uiBorderInteractive: indigoDark.indigo7,
      uiBorderActive: indigoDark.indigo7,
      uiText: indigoDark.indigo12,

      errorBackground: crimsonDark.crimson3,
      errorBorder: crimsonDark.crimson7,
      errorText: crimsonDark.crimson11,
      errorButtonBackground: crimsonDark.crimson3,
      errorButtonBackgroundHover: crimsonDark.crimson4,
      errorButtonBorder: crimsonDark.crimson7,
      errorButtonBorderHover: crimsonDark.crimson8,
      errorButtonText: crimsonDark.crimson11,

      infoBackground: blueDark.blue3,
      infoBorder: blueDark.blue7,
      infoText: blueDark.blue11,
      infoButtonBackground: blueDark.blue3,
      infoButtonBackgroundHover: blueDark.blue4,
      infoButtonBorder: blueDark.blue7,
      infoButtonBorderHover: blueDark.blue8,
      infoButtonText: blueDark.blue11,

      warningBackground: yellowDark.yellow3,
      warningBorder: yellowDark.yellow7,
      warningText: yellowDark.yellow11,
      warningButtonBackground: yellowDark.yellow3,
      warningButtonBackgroundHover: yellowDark.yellow4,
      warningButtonBorder: yellowDark.yellow7,
      warningButtonBorderHover: yellowDark.yellow8,
      warningButtonText: yellowDark.yellow11,

      successBackground: grassDark.grass3,
      successBorder: grassDark.grass7,
      successText: grassDark.grass11,
      successButtonBackground: grassDark.grass3,
      successButtonBackgroundHover: grassDark.grass4,
      successButtonBorder: grassDark.grass7,
      successButtonBorderHover: grassDark.grass8,
      successButtonText: grassDark.grass11,

      primaryBackground: green.green3,
      primaryBorder: green.green7,
      primaryText: green.green11,
      primaryButtonBackground: green.green9,
      primaryButtonBackgroundHover: green.green10,

      secondaryBackground: crimson.crimson3,
      secondaryBorder: crimson.crimson7,
      secondaryText: crimson.crimson11,
      secondaryButtonBackground: crimson.crimson9,
      secondaryButtonBackgroundHover: crimson.crimson10,
    },
    fontSizes: {
      xxs: "0.512rem",
      xs: "0.64rem",
      s: "0.8rem",
      m: "1rem",
      l: "1.25rem",
      xl: "1.563rem",
      xxl: "1.953rem",
      xxxl: "2.441rem",
      xxxxl: "3.052rem",
    },
  },
  media: {
    // default = phone
    phone_large: "(min-width: 37.438em)", // 599px
    tablet: "(min-width: 56.26em)", // 900px
    desktop: "(min-width: 75em)", // 1200px
    desktop_large: "(min-width: 112.5em)", // 1800px
  },
});
