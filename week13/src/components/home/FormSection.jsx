import React, { useContext, useState } from "react";
import { Wrapper } from "../layout/common";
import Form from "./Form";
import { Button } from "../layout/common";
import { ThemeColorContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  userNameAtom,
  emailAtom,
  passwordAtom,
  isSubmitedAtom,
} from "../../recoil/atom";
import styled from "styled-components";

const FormSection = () => {
  const mode = useContext(ThemeColorContext);
  const [modalOpen, setModalOpen] = useState(false);

  // useRecoilValue로 필요한 값들을 불러온다
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const password = useRecoilValue(passwordAtom);
  const setIsSubmited = useSetRecoilState(isSubmitedAtom);

  const navigate = useNavigate();

  const handleBtn = () => {
    setModalOpen(true);
  };

  const confirmModal = () => {
    setModalOpen(false);
    setIsSubmited(true);
    navigate("/mypage");
  };

  const cancelModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <Form type="text" inputType="이름"></Form>
      <Form type="email" inputType="이메일"></Form>
      <Form type="password" inputType="비밀번호"></Form>
      <Button onClick={handleBtn} mode={mode.button}>제출</Button>
      {modalOpen && (
        <Modal>
          <ModalContent borderColor={mode.main}>
            <h2>입력한 정보를 확인해주세요.</h2>
            <h5>기본값 | 이름: 홍길동, 이메일: 홍길동@cau.ac.kr, 비밀번호: 0000</h5>
            <p>이름:{userName}</p>
            <p>이메일:{email}</p>
            <p>비밀번호:{password}</p>
            <BtnContainer>
              <ModalButton onClick={confirmModal} mode={mode.button}>
                확인
              </ModalButton>
              <ModalButton style={{ marginLeft: "10px" }} onClick={cancelModal} mode={mode.button}>
                취소
              </ModalButton>
            </BtnContainer>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default FormSection;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 15px;
  border-radius: 15px;
  text-align: center;
`;

const ModalButton = styled.button`
  all: unset;
  background-color: ${(props) => props.mode};
  color: white;
  padding: 15px 15px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
`;