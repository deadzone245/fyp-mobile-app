import React from "react";
import {} from "react-native";
import { View, Text, Button } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodayTodoListScreen from "./TodayTodoListScreen";
import TaskSummary from "./task-summary";
import AppointmentSummary from "../appointment-summary";

const Stack = createStackNavigator();

const TestStackScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("TodoScreen")}>
        <Text>Todo Screen</Text>
      </Button>
      <Button onPress={() => navigation.navigate("TaskSummary")}>
        <Text>Task Summary Screen</Text>
      </Button>
      <Button>
        <Text>Appointment Summary Screen</Text>
      </Button>
    </View>
  );
};

const TodoListStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TestStackScreen" component={TestStackScreen} />
      <Stack.Screen name="TodoScreen" component={TodayTodoListScreen} />
      {/* todayScreen */}
      <Stack.Screen name="TaskSummary" mode="modal" component={TaskSummary} />
      {/* Task Summary Screen */}
      <Stack.Screen name="AppointmentSummary" component={AppointmentSummary} />
      {/* Appointment Summary Screen */}
      <Stack.Screen name="EventSummary" component={AppointmentSummary} />
      {/* Event Summary Screen */}
    </Stack.Navigator>
  );
};

export default TodoListStackScreen;
