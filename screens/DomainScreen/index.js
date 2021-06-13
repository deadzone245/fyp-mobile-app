import {Container} from "native-base";
  import React from "react";
  import PageHeader from "../../components/PageHeader";
  import DomainTraverse from "./DomainTraverse";
  import DomainFooter from "./DomainFooter";

  const DomainListScreen = ({ navigation }) => {
    return (
      <Container>
        <PageHeader title="Domains" />
        <DomainTraverse />
        <DomainFooter />
      </Container>
    );
  };
  
  export default DomainListScreen;