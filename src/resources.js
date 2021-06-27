import React from "react";

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodePane,
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
  Notes,
  MarkdownSlide,
  MarkdownSlideSet,
} from "spectacle";

export const Resources = () => (
  <>
    <Slide backgroundColor="tertiary">
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h1" color="primary">
          Useful resources
        </Heading>
        <UnorderedList>
          <ListItem>
            <b>
              <a hreh="https://reactnative.dev/">React Native</a>
            </b>
            <small>: Docs and tutorials are unmissible</small>
          </ListItem>
          <ListItem>
            <b>
              <a hreh="https://github.com/jondot/awesome-react-native">
                Awesome list
              </a>
            </b>
            <small>: for useful and solid libraries to help you</small>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h1" color="primary">
          Thank you 😊 👋
        </Heading>
      </FlexBox>
    </Slide>
  </>
);
