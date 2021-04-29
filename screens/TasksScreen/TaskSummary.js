import { StackActions, useNavigation } from "@react-navigation/native";
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

const TaskSummary = ({ route }) => {
  const { task } = route.params;
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>All Task List</Title>
        </Body>

        <Right>
          <Button
            transparent
            onPress={() => navigation.navigate("TaskEditForm")}
          >
            <Icon name="create" />
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Card>
          <CardItem style={styles.cardHeader} header bordered>
            <Text style={styles.cardHeaderText}>Finalize Loss Audit</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={styles.cardHeader} header bordered>
            <Text style={styles.cardHeaderText}>Description</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={styles.cardBody}>
              <Text>This is task description</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={styles.cardHeader} header bordered>
            <Text style={styles.cardHeaderText}>Domain</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={styles.cardBody}>
              <Text>Work</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={styles.cardHeader} header bordered>
            <Text style={styles.cardHeaderText}>Role</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={styles.cardBody}>
              <Text>Accountant</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={styles.cardHeader} header bordered>
            <Text style={styles.cardHeaderText}>Vision</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={styles.cardBody}>
              <Text>None</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={styles.cardHeader} header bordered>
            <Text style={styles.cardHeaderText}>Project</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={styles.cardBody}>
              <Text>Audit Report 2020-2021</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={styles.cardHeader} header bordered>
            <Text style={styles.cardHeaderText}>Start Date Time</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={styles.cardBody}>
              <Text>Mon 14-Aug-2020 11:00AM</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={styles.cardHeader} header bordered>
            <Text style={styles.cardHeaderText}>End Date Time</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={styles.cardBody}>
              <Text>None</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
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

export default TaskSummary;
