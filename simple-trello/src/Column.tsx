import React from "react";

import { AddNewItem } from "./AddNewItem";

import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text: string;
}

// export const Column: React.FC<ColumnProps> = ({ text }) => {
export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        onAdd={console.log}
        toggleButtonText="+ Add another task"
        dark
      ></AddNewItem>
    </ColumnContainer>
  );
};
