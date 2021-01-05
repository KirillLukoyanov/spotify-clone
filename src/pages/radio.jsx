import React from "react";
import { PageContainer } from "./styles/page";
import { Sidebar, Player } from "../components";

function Main() {
  return (
    <>
      <PageContainer>
        <Sidebar activeTab="Radio" />
      </PageContainer>
    </>
  );
}

export default Main;
