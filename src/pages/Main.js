import React from "react";
import styled from "styled-components";
// import Sections from "../cmps/Sections";

export default function Main() {
  return (
    <MainContainer>
      <TopBody>
        <AsideLeft>Aside-left</AsideLeft>

        <MainBody>Main</MainBody>

        <AsideRight>Aside-right</AsideRight>
      </TopBody>

      <BottomBody>Bottom-bar</BottomBody>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: calc(
    100vh - var(--header-height) - var(--nav-height) - var(--footer-height)
  );
`;

const TopBody = styled.footer``;

const BottomBody = styled.footer``;
