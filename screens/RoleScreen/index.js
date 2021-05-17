import React from "react";
import {
  Container,
  Header,
  Left,
  Title,
  Right,
  Body,
  Button,
  Icon,
} from "native-base";
import RoleList from "./RoleList";

const RoleListScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>All Roles</Title>
        </Body>
        <Right />
      </Header>
      <RoleList />
    </Container>
  );
};

export default RoleListScreen;
