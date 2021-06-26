import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
} from "native-base";
import { Alert } from "react-native";

const LoginScreen = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>Login</Title>
        </Body>
        <Right />
      </Header>

      <Content>
        <Form>
          <Item floatingLabel>
            <Icon active name="person" />
            <Label>Username</Label>
            <Input onChangeText={setUsername} value={username} />
          </Item>
          <Item floatingLabel>
            <Icon active name="lock-open" />
            <Label>Password</Label>
            <Input
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </Item>
        </Form>
        <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => {}}>
          <Text>Sign In</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default LoginScreen;
