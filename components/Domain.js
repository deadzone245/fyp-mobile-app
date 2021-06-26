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

const Domain = ({ domain }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("DomainSummary");
        navigation.navigate("DomainSummary", {
          domain: domain,
        });
      }}
    >
      <Card>
        <CardItem
          style={{
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "grey",
          }}
          header
          bordered
        >
          <Text style={styles.cardHeaderText}>{domain.Name}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{domain.Description}</Text>
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

export default Domain;
