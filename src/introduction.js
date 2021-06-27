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

const reactNativeLogo = "../assets/images/logo-react-native2.png";

export const Introduction = () => (
  <>
    <Slide backgroundColor="primary">
      <FlexBox height="100%" flexDirection="column">
        <Image src={reactNativeLogo} />
        <Appear>
          <Heading fontSize="h3" color="tertiary">
            Learn once, run everywhere!
          </Heading>
        </Appear>
      </FlexBox>
      <Notes>
        <ul>
          <li>
            React Native is an open-source framework for cross-platform mobile
            application development. Created by Facebook in March of 2015
          </li>
        </ul>
      </Notes>
    </Slide>
    <Slide backgroundColor="tertiary">
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3" color="primary">
          Create native apps for Android and iOS using React
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              <b>Use a little — or a lot.</b> You can use React Native...
              <UnorderedList>
                <ListItem>
                  in an existing native Android and iOS projects
                </ListItem>
                <ListItem>create a whole new app from scratch.</ListItem>
              </UnorderedList>
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="tertiary">
      <FlexBox justifyContent="flex-start" flexDirection="column">
        <Heading fontSize="h3" color="primary">
          Written in JavaScript — rendered with native code
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              Many platforms, one React. Create platform-specific versions of
              components so a single codebase can share code across platforms.
            </ListItem>
            <ListItem>
              React Native lets you create truly native apps and doesn't
              compromise your users' experiences.
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>
            React primitives render to native platform UI, meaning your app uses
            the same native platform APIs other apps do. Many platforms, one
            React.
          </li>
          <li>
            Create platform-specific versions of components so a single codebase
            can share code across platforms. With React Native, one team can
            maintain two platforms and share a common technology—React.
          </li>
          <li>
            It provides a core set of platform agnostic native components like
            View, Text, and Image that map directly to the platform’s native UI
            building blocks.
          </li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <CodePane
        fontSize="12px"
        language="jsx"
        highlightRanges={[[2], [6], [8, 9], [7, 18]]}
      >{`     
import React from 'react';
import {Text, View} from 'react-native';
import {Header} from './Header';
import {heading} from './Typography';

const WelcomeScreen = () => (
  <View>
    <Header title="Welcome to React Native"/>
    <Text style={heading}>Step One</Text>
    <Text>
      Edit App.js to change this screen and turn it
      into your app.
    </Text>
    <Text style={heading}>Learn</Text>
    <Text>
      Read the docs to discover what to do next:
    </Text>
   </View>
);`}</CodePane>
    </Slide>
    <Slide backgroundColor="tertiary">
      <FlexBox justifyContent="flex-start" flexDirection="column">
        <Heading fontSize="h3" color="primary">
          Fast Refresh
        </Heading>
        <Appear>
          <Text>
            <b>See your changes as soon as you save.</b> With the power of
            JavaScript, React Native lets you iterate at lightning speed. No
            more waiting for native builds to finish. Save, see, repeat.
          </Text>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="tertiary">
      <FlexBox justifyContent="flex-start" flexDirection="column">
        <Heading fontSize="h3" color="primary">
          Who is using React Native?
        </Heading>
        <Grid gridTemplateColumns="50% 50%">
          <UnorderedList>
            <ListItem>Bloomberg</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>Uber Eats</ListItem>
            <ListItem>Discord</ListItem>
            <ListItem>Shopify</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Instagram</ListItem>
            <ListItem>Pinterest</ListItem>
            <ListItem>Wix</ListItem>
            <ListItem>Wallmart</ListItem>
            <ListItem>
              Baidu Mobile (Chinese company, search engine used by +600M people)
            </ListItem>
          </UnorderedList>
        </Grid>
      </FlexBox>
    </Slide>
  </>
);
