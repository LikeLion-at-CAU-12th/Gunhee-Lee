import React from "react";
import { useRecoilState } from "recoil";
import { userNameAtom, emailAtom, passwordAtom } from "../../recoil/atom";

const Form = ({ type, inputType }) => {
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);

  const onChange = (e) => {
    const value = e.target.value;
    if (inputType === "이름") {
      setUserName(value);
    } else if (inputType === "이메일") {
      setEmail(value);
    } else if (inputType === "비밀번호") {
      setPassword(value);
    }
  };

  return (
    <>
      <div>{inputType}</div>
      <input onChange={onChange} type={type} />
    </>
  );
};

export default Form;