import React, { useState, useContext } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  userNameAtom,
  emailAtom,
  passwordAtom,
  isSubmitedAtom,
} from "../recoil/atom";
import { Title, Wrapper } from "../components/layout/common";
import { Button } from "../components/layout/common";
import { ThemeColorContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPage = () => {
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const password = useRecoilValue(passwordAtom);
  const mode = useContext(ThemeColorContext);
  const [showSettings, setShowSettings] = useState(false);

  const navigate = useNavigate();

  const resetUserName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetPassword = useResetRecoilState(passwordAtom);
  const resetIsSubmited = useResetRecoilState(isSubmitedAtom);

  // 설정 버튼을 누르면 개인정보 입력값이 조회됨
  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  // 로그아웃을 누르면 입력정보를 초기화하고 첫 화면으로 돌아감
  const handleLogout = () => {
    resetUserName();
    resetEmail();
    resetPassword();
    resetIsSubmited();
    navigate("/");
  };

  return (
    <Wrapper>
      <Title>Welcome {userName}</Title>
      <Button onClick={handleSettings} mode={mode.button}>
        설정
      </Button>
      {showSettings && (
        <StyledInfo>
          <p>이름: {userName}</p>
          <p>이메일: {email}</p>
          <p>비밀번호: {password}</p>
        </StyledInfo>
      )}
      <Button onClick={handleLogout} mode={mode.button}>
        로그아웃
      </Button>
    </Wrapper>
  );
};

export default MyPage;

const StyledInfo = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  p {
    margin: 10px 0;
    font-size: 16px;
  }
`;