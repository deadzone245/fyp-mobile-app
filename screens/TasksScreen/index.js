import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import TaskList from "./TaskList";
import TaskSummary from "./TaskSummary";

const Stack = createStackNavigator();

const TaskListStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TaskList" component={TaskList} />
      <Stack.Screen name="TaskSummary" component={TaskSummary} />
    </Stack.Navigator>
  );
};

export default TaskListStackScreen;
