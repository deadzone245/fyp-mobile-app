import { Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";

const TaskList = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>All tasks list screen</Text>
      <Button onPress={() => navigation.navigate("Todays Todo List")}>
        <Text>Go to TodoList</Text>
      </Button>
    </View>
  );
};

export default TaskList;
