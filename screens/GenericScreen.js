import React from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";

const GenericScreen = (props) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon name="home" />
          </Button>
        </Left>
        <Body>
          <Title>{props.title}</Title>
        </Body>
        <Right></Right>
      </Header>
      {props.children}
    </Container>
  );
};

export default GenericScreen;
