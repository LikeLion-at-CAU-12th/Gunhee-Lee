import axios from "axios";
import { getAuthAxios } from "./authAxios";

const baseURL = `http://yangzzago.kro.kr:3000`;

export const signUp = async (id, pw, name, age) => {
  const result = await axios.post(`${baseURL}/signup`, {
    id,
    pw,
    name,
    age,
  });
  return result;
};

export const login = async (id, pw) => {
  const result = await axios.post(`${baseURL}/login`, {
    id,
    pw,
  });
  return result.data;
};

export const getMyPage = async (token) => {
  const authAxios = getAuthAxios(token);
  const result = authAxios.get("/mypage");
  return result;
};

export const getNewRefreshToken = async () => {
  try {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    // 4. refreshToken 만료 시 로그아웃 후 로그인 페이지로 이동
    if (!refreshToken) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      window.location.href = "/";
    }

    const result = await axios.post(
      `${baseURL}/refresh`,
      {
        refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return result.data;
  } catch (error) {
    // 토큰이 만료되었을 경우
    alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
    console.log(error);
  }
};