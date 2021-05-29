import {Footer, FooterTab, Button,Icon,Text,} from "native-base";
import React from "react";
 
  
  const DomainFooter = ({ navigation }) => {

    return (
        <Footer>
          <FooterTab>
            <Button
              iconLeft
              full
              info
              style={{ flexDirection: "row", justifyContent: "center" }}
              onPress={() => { }}
            >
              <Icon name="add-outline" style={{ color: "white" }} />
              <Text style={{ color: "white" }}>Add Domain</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  };
  
  export default DomainFooter;
  