import React from "react";
import {
  Container,
  Header,
  Left,
  Title,
  Right,
  Body,
  Button,
  Icon,
} from "native-base";
import TaskList from "./TaskList";

const TaskListScreen = ({ navigation }) => {
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
      <TaskList />
    </Container>
  );
};

export default TaskListScreen;
