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
const RoleDetails = () => {
  return (
    <Content padder>
      <Card>
        <CardItem style={styles.cardHeader} header bordered>
          <Text style={styles.cardHeaderText}>Supervisior</Text>
        </CardItem>
      </Card>
      <Card>
        <CardItem style={styles.cardHeader} header bordered>
          <Text style={styles.cardHeaderText}>Description</Text>
        </CardItem>
        <CardItem bordered>
          <Body style={styles.cardBody}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eu mauris eget leo iaculis sodales ut id nibh. Duis ac augue
              dignissim, tempus lorem id, lacinia ipsum. Aenean at mi sed libero
              porta scelerisque. Proin nec justo lacinia, mattis nisl eget,
              tempus nisi. Proin egestas cursus velit et congue.
            </Text>
          </Body>
        </CardItem>
      </Card>
      <Card>
        <CardItem style={styles.cardHeader} header bordered>
          <Text style={styles.cardHeaderText}>Role Type</Text>
        </CardItem>
        <CardItem bordered>
          <Body style={styles.cardBody}>
            <Text>Support Elective</Text>
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

export default RoleDetails;
