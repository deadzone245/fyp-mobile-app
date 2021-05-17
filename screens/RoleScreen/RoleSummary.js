import React from "react";
import {} from "react-native";
import {
  Container,
  Content,
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
  View,
  Footer,
  FooterTab,
  Form,
  Input,
  Label,
  Item,
  TouchableOpacity,
  ScrollableTab,
} from "native-base";
import RoleDetails from "./RoleDetails";
import Visions from "../DomainScreen/Visions";
import Goals from "../DomainScreen/Goals";
import Projects from "../DomainScreen/Projects";
import TaskList from "../TasksScreen/TaskList";
const RoleSummary = ({ navigation }) => {
  return (
    <Container>
      <Header hasTabs>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Supervisior Role</Title>
        </Body>
        <Right />
      </Header>

      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab
          heading={
            <TabHeading>
              <Icon name="information" />
              <Text>Details</Text>
            </TabHeading>
          }
        >
          <RoleDetails />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="eye" />
              <Text>Visions</Text>
            </TabHeading>
          }
        >
          <Visions />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="disc" />
              <Text>Goals</Text>
            </TabHeading>
          }
        >
          <Goals />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="construct" />
              <Text>Projects</Text>
            </TabHeading>
          }
        >
          <Projects />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="checkbox" />
              <Text>Tasks</Text>
            </TabHeading>
          }
        >
          <TaskList />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default RoleSummary;
