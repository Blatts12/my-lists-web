import { styled } from "../../stitches.config";

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  maxWidth: "512px",
  margin: "1rem",
  padding: "1rem",
  backgroundColor: "$uiBackground",
  borderRadius: "5px",
  border: "1px solid $uiBorder",

  "@media (min-width: calc(512px + 2rem))": {
    margin: "1rem auto",
  },

  "& button[type=submit]": {
    width: "50%",
    marginTop: "0.65rem",
    transform: "translateX(50%)",
  },

  "& h1, & h2": {
    fontSize: "$xxxl",
  },
});

const FieldSet = styled("fieldset", {
  all: "unset",
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
});

const Label = styled("label", {
  fontSize: "1.15em",
});

const Input = styled("input", {
  width: "100%",
  padding: "0.2rem",
  fontSize: "1.2em",
  borderRadius: "5px",
  border: "2px solid $uiBorderInteractive",
  "&:focus": {
    outline: "1px solid $uiBorderActive",
    borderColor: "$uiBorderActive",
  },
});

const ErrorText = styled("p", {
  color: "$errorText",
  fontSize: "0.95em",

  variants: {
    nonFieldError: {
      true: {
        fontSize: "1.05em",
        textAlign: "center",
        marginTop: "10px",
      },
    },
  },
});

export { Form, FieldSet, Label, Input, ErrorText };
