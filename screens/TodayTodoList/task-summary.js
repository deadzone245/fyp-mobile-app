import { useNavigation } from "@react-navigation/core";
import { Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";

const TaskSummary = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Task Summary Page with ID:</Text>
      <Text>{id}</Text>
      <Button onPress={() => navigation.navigate("TaskScreen")}>
        <Text>Go to TodoList</Text>
      </Button>
    </View>
  );
};

export default TaskSummary;
