import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  const navigate = useNavigate();

  // 5. 로그인 안되어있으면 login 페이지로 이동
  const onClick = () => {
    const isLogIn = localStorage.getItem("access");
    if (isLogIn) {
      navigate("/tests")
    } else {
      alert("로그인이 필요합니다.")
      navigate("/login")
    }
  };

  return (
      <MenuDom>
          <Title>Week12 Session🐻‍❄️</Title>
          <StyledLink to="/books">
              📚 Book List
          </StyledLink>
          {/* Link 컴포넌트에 원하는 클릭 이벤트 핸들러 직접 추가 */}
          <StyledLink as="div" onClick={onClick}> 
              🦁 멋사인 테스트
          </StyledLink>    
      </MenuDom>

  )
}

export default Home

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;