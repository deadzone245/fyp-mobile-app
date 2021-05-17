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
import Role from "../../components/Role";

const RoleList = ({ navigation }) => {
  return (
    <Container>
      <Content padder>
        <Role
          role={{
            title: "Developer",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mauris eget leo iaculis sodales ut id nibh. Duis ac augue dignissim, tempus lorem id, lacinia ipsum. Aenean at mi sed libero porta scelerisque. Proin nec justo lacinia, mattis nisl eget, tempus nisi. Proin egestas cursus velit et congue. ",
            color: "#343a40",
          }}
        />
        <Role
          role={{
            title: "Entrepenuer",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mauris eget leo iaculis sodales ut id nibh. Duis ac augue dignissim, tempus lorem id, lacinia ipsum. Aenean at mi sed libero porta scelerisque. Proin nec justo lacinia, mattis nisl eget, tempus nisi. Proin egestas cursus velit et congue. ",
            color: "#17a2b8",
          }}
        />
        <Role
          role={{
            title: "Supervisior",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mauris eget leo iaculis sodales ut id nibh. Duis ac augue dignissim, tempus lorem id, lacinia ipsum. Aenean at mi sed libero porta scelerisque. Proin nec justo lacinia, mattis nisl eget, tempus nisi. Proin egestas cursus velit et congue. ",
            color: "#28a745",
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
            <Text style={{ color: "white" }}>Add Role</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default RoleList;
