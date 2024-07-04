import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "./common";
import { ThemeColorContext } from "../../context/context";
import { useRecoilValue } from "recoil";
import { emailAtom, isSubmitedAtom, userNameAtom } from "../../recoil/atom";

const Layout = ({ children }) => {
  const context = useContext(ThemeColorContext);

  const [mode, setMode] = useState(context.blueTheme);
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const isSubmited = useRecoilValue(isSubmitedAtom);

  const handleMode = (e) => {
    const value = e.target.value;
    if (value === "blue") {
      setMode(context.blueTheme);
    } else if (value === "green") {
      setMode(context.greenTheme);
    } else {
      setMode(context.pinkTheme);
    }
  };
  return (
    <ThemeColorContext.Provider value={mode}>
      <Wrapper>
        <Header mode={mode.main}>
          <Button onClick={handleMode} value="blue">
            blue
          </Button>
          <Button onClick={handleMode} value="green">
            green
          </Button>
          <Button onClick={handleMode} value="pink">
            pink
          </Button>
        </Header>
        <div>{children}</div>
        <Footer mode={mode.main}>
          {isSubmited ? `${userName} | ${email}` : "LikeLion FE"}
        </Footer>
      </Wrapper>
    </ThemeColorContext.Provider>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  color: white;
  align-items: center;
  background-color: ${(props) => props.mode};
`;