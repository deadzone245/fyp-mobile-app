import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";

const TodaysTodaysAppointmentScreenScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Todays' Appointment</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <Text>this is Todays' Appointment screen</Text>
      </Content>
      <Footer />
    </Container>
    //you can add all TodaysAppointment components by replacing that <Text> tag as children
  );
};

export default TodaysTodaysAppointmentScreenScreen;
