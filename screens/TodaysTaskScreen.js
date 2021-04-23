import React, { useContext } from "react";
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
import GenericScreen from "./GenericScreen";

const TodaysTaskScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => this.navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Todays' Task</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <Text>This is today's task screen</Text>
      </Content>
      <Footer />
    </Container>
  );
};

export default TodaysTaskScreen;
