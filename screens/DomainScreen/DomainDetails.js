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
const DomainDetails = ({ domain }) => {
  return (
    <Content padder>
      <Card>
        <CardItem style={styles.cardHeader} header bordered>
          <Text style={styles.cardHeaderText}>{domain.Name}</Text>
        </CardItem>
      </Card>
      <Card>
        <CardItem style={styles.cardHeader} header bordered>
          <Text style={styles.cardHeaderText}>Description</Text>
        </CardItem>
        <CardItem bordered>
          <Body style={styles.cardBody}>
            <Text>{domain.Description}</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    justifyContent: "center",
    flexDirection: "row",
  },
  cardHeaderText: {
    fontSize: 24,
  },

  cardBody: {
    justifyContent: "center",
    flexDirection: "row",
  },
  cardBodyText: {
    fontSize: 24,
  },
});

export default DomainDetails;
