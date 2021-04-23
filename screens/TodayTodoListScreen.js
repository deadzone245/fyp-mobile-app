import React, { useContext } from "react";
import GenericScreen from "./GenericScreen.js";
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
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import TodaysTaskScreen from "./TodaysTaskScreen";
import TodaysAppointmentScreens from "./TodaysAppointmentScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => navigation.navigate("Tasks")}>
          <Icon name="bowtie" />
          <Text>Tasks</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate("Appointments")}>
          <Icon name="briefcase" />
          <Text>Appoinments</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}

const TodayTodoListScreen = ({ navigation }) => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Tasks" component={TodaysTaskScreen} />
      <Tab.Screen name="Appointments" component={TodaysAppointmentScreens} />
    </Tab.Navigator>
    //you can add all task components by replacing that <Text> tag as children
  );
};

export default TodayTodoListScreen;
 */

export const TodayTodoListScreen = ({ navigation }) => {
  return (
    <Container>
      <Header hasTabs>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title> Today's Todolist</Title>
        </Body>
        <Right />
      </Header>
      <Tabs style={{ elevation: 3 }}>
        <Tab
          heading={
            <TabHeading>
              <Icon name="checkbox" />
              <Text>Tasks</Text>
            </TabHeading>
          }
        >
          <TabOne />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="briefcase" />
              <Text>Appoinments</Text>
            </TabHeading>
          }
        >
          <TabTwo />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="calendar" />
              <Text>Events</Text>
            </TabHeading>
          }
        >
          <TabThree />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TodayTodoListScreen;
