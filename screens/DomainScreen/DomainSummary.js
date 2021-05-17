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
import DomainDetails from "./DomainDetails";
import Roles from "./Roles";
import Visions from "./Visions";
import Goals from "./Goals";
import Projects from "./Projects";
import TaskList from "../TasksScreen/TaskList";
import RoleList from "../RoleScreen/RoleList";
const DomainSummary = ({ navigation }) => {
  return (
    <Container>
      <Header hasTabs>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Work Domain</Title>
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
          <DomainDetails />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="people" />
              <Text>Roles</Text>
            </TabHeading>
          }
        >
          <RoleList />
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

export default DomainSummary;
