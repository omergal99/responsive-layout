import React from "react";
import styled from "styled-components";
// import Sections from "../cmps/Sections";

export default function Main() {
  return (
    <MainContainer className="MainContainer">
      <TopBody className="TopBody">
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

const TopBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  & > * {
    height: 100%;
    resize: horizontal;
    overflow: auto;
  }
`;

const AsideLeft = styled.div`
  width: 20%;
  background-color: #a29;
`;
const MainBody = styled.div`
  width: 60%;
  background-color: #67b;
  flex-grow: 1;
`;
const AsideRight = styled.div`
  width: 20%;
  background-color: #41c;
`;

const BottomBody = styled.footer`
  height: 20%;
  background-color: #5c5;
`;
