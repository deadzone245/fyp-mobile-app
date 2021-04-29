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
            <Text style={styles.itemIndex}>{task.index} </Text>
            <TouchableOpacity
              onPress={() => {
                console.log("going to MiscellaneousScreenStack->TaskSummary");
                navigation.navigate("MiscellaneousScreenStack", {
                  screen: "TaskSummary",
                  params: {
                    task: task,
                  },
                });
              }}
            >
              <Text style={styles.itemText}>{task.title}</Text>
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
    maxWidth: "85%",
  },
  itemRight: {
    flexDirection: "row",
  },
});
export default Task;
