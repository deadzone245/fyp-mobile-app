import React from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import TaskScreen from "./screens/TaskScreen.js";
import TodayTodoListScreen from "./screens/TodayTodoList/TodayTodoListScreen";
import SideBar from "./screens/customDrawer.js";
import { Icon } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";
import TaskSummary from "./screens/TasksScreen/TaskSummary.js";
import TaskEditForm from "./screens/TasksScreen/TaskEditForm.js";
import TaskList from "./screens/TasksScreen/TaskList";
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const MiscellaneousScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TaskSummary" component={TaskSummary} />
      <Stack.Screen name="TaskEditForm" component={TaskEditForm} />
    </Stack.Navigator>
  );
};

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
      <Drawer.Screen
        name="Todays Todo List"
        component={TodayTodoListScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="stats-chart-outline"
              style={{ fontSize: size, color: color }}
            />
          ),
        }}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="trending-up-outline"
              style={{ fontSize: size, color: color }}
            />
          ),
        }}
        name="All tasks"
        component={TaskList}
      />
      <Drawer.Screen
        name="Domains"
        component={TodayTodoListScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="code-working-outline"
              style={{ fontSize: size, color: color }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Roles"
        component={TodayTodoListScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="people-outline"
              style={{ fontSize: size, color: color }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Visions"
        component={TodayTodoListScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="eye-outline" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Goals"
        component={TodayTodoListScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="disc-outline"
              style={{ fontSize: size, color: color }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Projects"
        component={TodayTodoListScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name="construct-outline"
              style={{ fontSize: size, color: color }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MiscellaneousScreenStack"
        component={MiscellaneousScreenStack}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
});
