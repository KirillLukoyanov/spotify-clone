import React from "react";
import { PageContainer } from "./styles/page";
import { Sidebar, Player } from "../components";

function Main() {
  return (
    <>
      <PageContainer>
        <Sidebar activeTab="Main" />
      </PageContainer>
    </>
  );
}

export default Main;
