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
import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Domain from "../../components/Domain";
import PageHeader from "../../components/PageHeader";
import DomainTraverse from "./DomainTraverse";

const DomainListScreen = ({ navigation }) => {
  // useEffect(() => {
  //   setLoading(true);
  //   fetch('http://18.139.228.56:8000/DomainJson/')

  //     .then(response => response.json())
  //     .then(json => {
  //       setDomains(json.body);
  //       setLoading(false);
  //     })
  // }
  //   , []);

  return (
    <Container>
      <PageHeader title="All domains list" />

      <DomainTraverse />
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

export default DomainListScreen;
