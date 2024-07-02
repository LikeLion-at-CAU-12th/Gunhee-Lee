import { atom } from "recoil";

// 모든 컴포넌트에서 접근가능한 전역 state atom

export const userNameAtom = atom({
  key: "userName",
  default: "홍길동",
});

export const emailAtom = atom({
  key: "email",
  default: "홍길동@cau.ac.kr",
});

export const passwordAtom = atom({
  key: "password",
  default: "0000",
});

export const isSubmitedAtom = atom({
  key: "isSubmited",
  default: false,
});