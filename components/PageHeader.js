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
import { useNavigation } from "@react-navigation/core";

const PageHeader = ({title}) => {
    const navigation = useNavigation();
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right></Right>
      </Header>

  );
};

export default PageHeader;
