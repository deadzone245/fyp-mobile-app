import React from "react";
import {
  Body,
  Card,
  CardItem,
  Left,
  ListItem,
  Radio,
  Right,
  Text,
  View,
} from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  CommonActions,
  StackActions,
  useNavigation,
} from "@react-navigation/core";
const Task = ({ task }) => {
  const navigation = useNavigation();
  return (
    <Card>
      <CardItem>
        <Body style={styles.item}>
          <View style={styles.itemLeft}>
            <Text style={styles.itemIndex}>{task.pk} </Text>
            <TouchableOpacity
              onPress={() => {
                console.log("going to TaskSummary");
                navigation.navigate("TaskSummary", { task: task });
              }}
            >
              <Text style={styles.itemText}>{task.Action}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemRight}>
            <Radio selected={false} />
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemIndex: {
    marginRight: 15,
  },
  itemText: {
    maxWidth: "100%",
  },
  itemRight: {
    flexDirection: "row",
  },
});
export default Task;
