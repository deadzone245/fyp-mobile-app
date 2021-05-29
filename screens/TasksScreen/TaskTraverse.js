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
import { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Domain from "../../components/Domain";
import axios from "axios";
const DomainTraverse = ({ navigation }) => {

    const [loading, setLoading] = useState(true);
    const [domains, setDomains] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('http://18.139.228.56:8000/DomainJson/')

            .then(response => response.json())
            .then(json => {
                setDomains(json.body);
                setLoading(false);
            })
    }
        , []);



    if (loading)
        return (
            // <Content padder>
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            // </Content>

        );
    return (
        <Content padder>
            <View >
                <FlatList
                    data={domains}
                    keyExtractor={domain => domain.pk}
                    renderItem={({ item }) => <Domain domain={item.fields} />}
                />
            </View>
        </Content>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
export default DomainTraverse;
