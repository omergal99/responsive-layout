import React from "react";
import "./assets/css/App.scss";
import Main from "./pages/Main";
import styled from "styled-components";

export default function App() {
  return (
    <div className="App">
      <Header className="flex-center">
        <h2>Header</h2>
      </Header>
      <Nav className="flex-center">
        <h4>nav</h4>
      </Nav>

      <Main />

      <Footer className="flex-center">
        <h4>Footer</h4>
      </Footer>
    </div>
  );
}
const reuseFixed = `
  color: #d5e2ff;
  position: fixed;
  width: 100%;
`;

const Header = styled.header`
  ${reuseFixed}
  background-color: #5d5d5d;
  top: 0;
  height: var(--header-height);
`;

const Nav = styled.nav`
  ${reuseFixed}
  background-color: #384a50;
  top: 3rem;
  height: var(--nav-height);
`;

const Footer = styled.footer`
  ${reuseFixed}
  background-color: #5d5d5d;
  bottom: 0;
  height: var(--footer-height);
`;
