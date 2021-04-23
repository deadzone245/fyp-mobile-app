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

const Task = (props) => {
  return (
    <Card>
      <CardItem>
        <Body style={styles.item}>
          <View style={styles.itemLeft}>
            <Text style={styles.itemIndex}>{props.index} </Text>
            <Text style={styles.itemText}>{props.title}</Text>
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
