import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../apis/user";

const Signup = () => {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const router = useNavigate();

  const onClick = async () => {
    await signUp(id, pw, name, age);
    router("/login");
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <div>아이디</div>
        <input value={id} onChange={onChangeId} />
        <div>비밀번호</div>
        <input value={pw} onChange={onChangePw} />
        <div>이름</div>
        <input value={name} onChange={onChangeName} />
        <div>나이</div>
        <input value={age} onChange={onChangeAge} />
      </Inputs>
      <BtnWrapper>
        <SignupLink to="/login">뒤로가기</SignupLink>
        <button onClick={onClick}>가입하기</button>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  border: 3px solid #89cdf6;
  background: #fafffa;
  padding: 30px;
  button {
    background-color: skyblue;
    color: white;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    border: white;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  div {
    font-size: 14px;
    color: grey;
  }
  input {
    font-size: 20px;
    height: 20px;
    width: 290px;
    border-radius: 10px;
    border: 1px solid #888;
    padding: 10px;
    margin-bottom: 1rem;
    &::placeholder {
      color: darkgray;
      font-size: 20px;
      font-weight: 500;
      font-family: "OTWelcomeRA";
    }
  }
`;

const BtnWrapper = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.0rem;
  button {
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;

const SignupLink = styled(Link)`
  color: #89cdf6;
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  padding: 10px;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  font-weight: bold;
  &:hover {
    text-shadow: 0px 0px 5px skyblue;
    color: white;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #b8e3f5;
  }
`;
