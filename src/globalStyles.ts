import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  body: {
    background: "$background",
    fontFamily: "'Source Sans Pro', sans-serif",
    color: "$text",
    h1: { fontSize: "$xxxxl" },
    h2: { fontSize: "$xxxl" },
    h3: { fontSize: "$xxl" },
    h4: { fontSize: "$xl" },
    h5: { fontSize: "$l" },
    small: {},
  },
});

export default globalStyles;
