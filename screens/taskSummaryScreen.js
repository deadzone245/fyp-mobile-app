import React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  Right,
  Left,
  Body,
  TabHeading,
  Card,
} from "native-base";
const TaskSummary = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="home" />
          </Button>
        </Left>
        <Body>
          <Title></Title>
        </Body>
        <Right></Right>
      </Header>
    </Container>
  );
};

export default TaskSummary;
