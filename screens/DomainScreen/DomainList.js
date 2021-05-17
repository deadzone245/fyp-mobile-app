import {
  Container,
  Content,
  Footer,
  View,
  Header,
  Left,
  Right,
  Body,
  FooterTab,
  Button,
  Icon,
  Title,
  Text,
} from "native-base";
import React from "react";
import {} from "react-native";
import Domain from "../../components/Domain";

const DomainList = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>All Domains List</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => navigation.navigate("MiscellaneousScreenStack")}
          >
            <Icon name="create" />
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Domain
          domain={{
            title: "Work",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mauris eget leo iaculis sodales ut id nibh. Duis ac augue dignissim, tempus lorem id, lacinia ipsum. Aenean at mi sed libero porta scelerisque. Proin nec justo lacinia, mattis nisl eget, tempus nisi. Proin egestas cursus velit et congue. ",
            color: "#343a40",
          }}
        />
        <Domain
          domain={{
            title: "Home",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mauris eget leo iaculis sodales ut id nibh. Duis ac augue dignissim, tempus lorem id, lacinia ipsum. Aenean at mi sed libero porta scelerisque. Proin nec justo lacinia, mattis nisl eget, tempus nisi. Proin egestas cursus velit et congue. ",
            color: "#17a2b8",
          }}
        />
      </Content>
      <Footer>
        <FooterTab>
          <Button
            iconLeft
            full
            info
            style={{ flexDirection: "row", justifyContent: "center" }}
            onPress={() => {}}
          >
            <Icon name="add-outline" style={{ color: "white" }} />
            <Text style={{ color: "white" }}>Add Domain</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default DomainList;
