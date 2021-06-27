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

const reactNativeLogo = "../assets/images/logo-react-native-white.png";

export const GoingFurther = () => (
  <>
    <Slide backgroundColor="tertiary">
      <FlexBox height="100%" flexDirection="column">
        <Image src={reactNativeLogo} />
        <Appear>
          <Heading fontSize="h3" color="primary">
            Going further with React Native
          </Heading>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="tertiary">
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3" color="primary">
          Android and iOS and... so much more
        </Heading>
        <Text color="primary">
          Libraries now exist to have React Native work on many platforms
        </Text>
        <UnorderedList color="primary">
          <ListItem>
            <b>Web</b> with React-native-web
          </ListItem>
          <ListItem>
            <b>Windows</b> with React-native-windows (xbox, TV and desktop)
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="tertiary">
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3" color="primary">
          Alternatives
        </Heading>
        <UnorderedList color="primary">
          <ListItem>Native (iOS and Android)</ListItem>
          <ListItem>Flutter</ListItem>
          <ListItem>Ionic</ListItem>
          <ListItem>NativeScript, Xamarin (C#)</ListItem>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>
            Native: 2 teams, twice the work, inconsistencies, no re-usability
          </li>
          <li>
            Flutter, a relatively new mobile application framework developed by
            Google. based on the Dart programming language
            <ul>
              <li> Performance OK </li>
              <li> Native look </li>
              <li> Community still small </li>
              <li> Easier to integrate when coming from C# VS RN / React </li>
            </ul>
          </li>
          <li>Ionic: webview (slow) / PWA seem a better way to go nwo</li>
          <li>
            NativeScript: framework that allows developing mobile apps using web
            frameworks like Angular or Vue.js
          </li>
        </ul>
      </Notes>
    </Slide>
  </>
);
