import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Container,
  Header,
  Left,
  Right,
  Icon,
  View,
  Text,
  Body,
  Title,
  Content,
  CardItem,
  Card,
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Role = ({ role }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("going to RoleSummary");
        navigation.navigate("RoleSummary");
      }}
    >
      <Card>
        <CardItem
          style={{
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: role.color,
          }}
          header
          bordered
        >
          <Text style={styles.cardHeaderText}>{role.title}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{role.description}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    justifyContent: "center",
    flexDirection: "row",
  },
  cardHeaderText: {
    fontSize: 24,
    color: "white",
  },

  cardBody: {
    justifyContent: "center",
    flexDirection: "row",
  },
  cardBodyText: {
    fontSize: 24,
  },
});

export default Role;
