import React from "react";
import { PageContainer } from "./styles/page";
import { Sidebar } from "../components";

function Main() {
  return (
    <>
      <PageContainer>
        <Sidebar activeTab="View" />
      </PageContainer>
    </>
  );
}

export default Main;
