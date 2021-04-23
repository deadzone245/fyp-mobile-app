import React from "react";
import GenericScreen from "./GenericScreen.js";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Icon,
  Right,
  Body,
  Text,
} from "native-base";

const TaskScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>All Tasks</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <Text>this is Todays' Appointment screen</Text>
      </Content>
      <Footer />
    </Container>
  );
};

export default TaskScreen;
