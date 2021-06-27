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

export const ProsCons = () => (
  <>
    <Slide backgroundColor="primary">
      <FlexBox height="100%" flexDirection="column">
        <Image src={reactNativeLogo} />
        <Heading fontSize="h1" color="tertiary">
          Pros and Cons
        </Heading>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="primary">
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3" color="tertiary">
          Pros (business perspective)
        </Heading>
        <UnorderedList color="tertiary">
          <Appear>
            <ListItem>
              <b>Development speed and cost</b>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Works everywhere</b>
              <small>: iOS, Android, Windows, Web</small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>User Experience</b>
              <small>
                : when app is simple, you get high perf app with great UX
              </small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Faster Time to marker</b>
              <small>: arrive in market much faster, iterate faster</small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Help on demand</b> <small>: RN community is massive</small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Maintenance cost</b> <small>: 1 codebase to maintain</small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>App Store visiblity</b>
              <small>: easy to get you apps listed (not like PWA)</small>
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <p>
          <b>Development speed and cost</b>: when coming from React, knowledge
          (and sometimes even codebase) can be re-used.
        </p>
      </Notes>
    </Slide>
    <Slide backgroundColor="primary">
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3" color="tertiary">
          Pros (Development perspective)
        </Heading>
        <UnorderedList color="tertiary">
          <Appear>
            <ListItem>
              <b>Easy to work with</b>
              <small>
                : Large JS ecosystem, large community, regular updates...
              </small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Code re-usability</b>
              <small>
                : majority of the app is built using RN and can be re-used
              </small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Community</b>
              <small>
                : daily contributing, helping, creating open-source libraries...
              </small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>IDE</b>
              <small>: no need to code inside XCode not Android Studio</small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Fast refresh + Live reload</b>
              <small>: Fast refresh replace the broken hot reload.</small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Over the air (OTA) Updates</b>
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="primary">
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3" color="tertiary">
          Cons
        </Heading>
        <UnorderedList color="tertiary">
          <Appear>
            <ListItem>
              <b>Debugging issues</b>
              <small>
                : RN is still in beta, there can be compatibility / debugging
                issues.
              </small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Lack of Some Custom Modules</b>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Can be less performant</b>
              <small>
                : for high demanding components, platform-specificities, infinte
                lists...
              </small>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <b>Native developers still needed</b>
              <small>
                : when need comes to implement custom native features and no
                package exist yet
              </small>
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
  </>
);
