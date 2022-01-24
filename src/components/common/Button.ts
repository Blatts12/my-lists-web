import { styled } from "../../stitches.config";

const Button = styled("button", {
  display: "inline-flex",
  alignContent: "center",
  justifyContent: "center",
  width: "fit-content",
  padding: "0.075em 0.5em",
  borderRadius: "0.4em",
  transition: "color 180ms, background-color 180ms, border-color 180ms",
  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    icon: {
      true: {
        padding: "0.375em",
      },
    },
    circled: {
      true: {
        borderRadius: "100%",
      },
    },
    boldText: {
      true: {
        fontWeight: "bold",
      },
    },
    color: {
      success: {
        backgroundColor: "$successButtonBackground",
        color: "$successButtonText",
        border: "1px solid $successButtonBorder",
        "&:hover, &:focus": {
          backgroundColor: "$successButtonBackgroundHover",
          borderColor: "$successButtonBorderHover",
        },
      },
      info: {
        backgroundColor: "$infoButtonBackground",
        color: "$infoButtonText",
        border: "1px solid $infoButtonBorder",
        "&:hover, &:focus": {
          backgroundColor: "$infoButtonBackgroundHover",
          borderColor: "$infoButtonBorderHover",
        },
      },
      error: {
        backgroundColor: "$errorButtonBackground",
        color: "$errorButtonText",
        border: "1px solid $errorButtonBorder",
        "&:hover, &:focus": {
          backgroundColor: "$errorButtonBackgroundHover",
          borderColor: "$errorButtonBorderHover",
        },
      },
      warning: {
        backgroundColor: "$warningButtonBackground",
        color: "$warningButtonText",
        border: "1px solid $warningButtonBorder",
        "&:hover, &:focus": {
          backgroundColor: "$warningButtonBackgroundHover",
          borderColor: "$warningButtonBorderHover",
        },
      },
      primary: {
        border: "none",
        backgroundColor: "$primaryButtonBackground",
        color: "white",
        "&:hover, &:focus": {
          backgroundColor: "$primaryButtonBackgroundHover",
        },
      },
      secondary: {
        border: "none",
        backgroundColor: "$secondaryButtonBackground",
        color: "white",
        "&:hover, &:focus": {
          backgroundColor: "$secondaryButtonBackgroundHover",
        },
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
      },
      s: {
        fontSize: "$s",
      },
      m: {
        fontSize: "$m",
      },
      l: {
        fontSize: "$l",
      },
      xl: {
        fontSize: "$xl",
      },
      xxl: {
        fontSize: "$xxl",
      },
      xxxl: {
        fontSize: "$xxxl",
      },
      xxxxl: {
        fontSize: "$xxxxl",
      },
    },
  },
});

const IconButton = styled(Button, {
  padding: "0.5em",
  variants: {
    circled: {
      true: {
        borderRadius: "100%",
      },
    },
    noBackground: {
      true: {
        backgroundColor: "none",
      },
    },
    noBorder: {
      true: {
        border: "none",
      },
    },
  },
});

export { Button };
