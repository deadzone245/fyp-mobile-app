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
import PageHeader from "../../components/PageHeader";

const RoleListScreen = ({ navigation }) => {
  return (
    <Container>
      <PageHeader title="All Roles" />
      <RoleList />
    </Container>
  );
};

export default RoleListScreen;
