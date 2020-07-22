import React from "react";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold"></Card>
      </Column>
      <Column text="In Progres">
        <Card text="Learn Typescript"></Card>
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing"></Card>
      </Column>
    </AppContainer>
  );
};

export default App;
