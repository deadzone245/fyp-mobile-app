import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Body,
  Container,
  Content,
  H3,
  Header,
  Icon,
  Left,
  Button,
  Footer,
  FooterTab,
} from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

/* const SideBar = (...props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
       
    </DrawerContentScrollView>
  );
};
 */
function SideBar(props) {
  return (
    <Container>
      <Header style={{ borderBottomWidth: 0, height: 106 }}>
        <Left>
          <Avatar.Text label="R" style={{ backgroundColor: "lightblue" }} />
        </Left>
        <Body style={{ marginLeft: 10 }}>
          <H3>Rayan Tahir</H3>
          <Text style={{ fontSize: 12, marginLeft: 2 }}>
            <Icon
              style={{ fontSize: 15 }}
              name="checkmark-done-circle-outline"
            />
            4/7
          </Text>
        </Body>
      </Header>
      <Content>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text style={{ color: "white" }}>Sign Out</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default SideBar;
