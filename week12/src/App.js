import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import TestList from './pages/TestList';
import TestDetail from './pages/TestDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />}>
          <Route path=":id" element={<BookDetail/>} />
        </Route>
        <Route path="/tests" element={<TestList />} />
        <Route path="/tests/detail" element={<TestDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AppDom>
  );
}

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;