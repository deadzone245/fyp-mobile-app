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
import PageHeader from "../../components/PageHeader";

const TaskListScreen = ({ navigation }) => {
  return (
    <Container>
      <PageHeader title="All tasks"/>
      <TaskList />
    </Container>
  );
};

export default TaskListScreen;
