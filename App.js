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
import TaskListScreen from "./screens/TasksScreen/index";
import DomainListScreen from "./screens/DomainScreen/index.js";
import DomainSummary from "./screens/DomainScreen/DomainSummary.js";
import RoleListScreen from "./screens/RoleScreen/index.js";
import RoleSummary from "./screens/RoleScreen/RoleSummary.js";
import LoginScreen from "./screens/AuthScreens/LoginScreen.js";

const isLoggedIn = true;

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!isLoggedIn) return <LoginScreen />;

  if (isLoggedIn)
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DrawerScreen" component={MyDrawer} />
      <Stack.Screen name="TaskSummary" component={TaskSummary} />
      <Stack.Screen name="TaskEditForm" component={TaskEditForm} />
      <Stack.Screen name="DomainSummary" component={DomainSummary} />
      <Stack.Screen name="RoleSummary" component={RoleSummary} />

      <Drawer.Screen name="Todays Todo List" component={TodayTodoListScreen} />
      <Drawer.Screen name="All tasks" component={TaskListScreen} />
      <Drawer.Screen name="Domains" component={DomainListScreen} />
      <Drawer.Screen name="Roles" component={RoleListScreen} />
      <Drawer.Screen name="Visions" component={TodayTodoListScreen} />
      <Drawer.Screen name="Goals" component={TodayTodoListScreen} />
      <Drawer.Screen name="Projects" component={TodayTodoListScreen} />
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
        component={TaskListScreen}
      />
      <Drawer.Screen
        name="Domains"
        component={DomainListScreen}
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
        component={RoleListScreen}
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
