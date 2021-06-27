import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
} from "spectacle";
import { Introduction } from "./introduction";
import { ProsCons } from "./proscons";
import { GoingFurther } from "./going-further";
import { Resources } from "./resources";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#61dafb",
    quarternary: "#CECECE",
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Introduction />
    <ProsCons />
    <GoingFurther />
    <Resources />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
