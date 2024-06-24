import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const TestList = () => {
    const baseURL = "https://gominzipsession.o-r.kr/";
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [selectedChoices, setSelectedChoices] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await axios.get(baseURL + 'liontest/question');
            setQuestions(response.data.questions);
            setSelectedChoices(Array(response.data.questions.length).fill(null));
        };
        fetchQuestions();
    }, []);
  
    const updateChoices = (questionIdx, choiceIdx) => {
        const newSelectedChoices = [...selectedChoices];
        newSelectedChoices[questionIdx] = choiceIdx;
        setSelectedChoices(newSelectedChoices);
    };
  
    const goToTestDetail = () => {
        navigate('/tests/detail', { state: { selectedChoices } });
    };

    const goToBack = () => {
        navigate('/');  
    };

    return (
      <MenuDom>
            <StyledButton onClick={goToBack}>⬅️ 홈 돌아가기</StyledButton>
            <Title>🐻멋사인 테스트🐻</Title>
            {questions.map((question, idx) => (
                <SmallTitle key={idx}>
                    <div>{question.question}</div>
                    <ChoicesContainer>
                        {question.choices.map((choice, choiceIdx) => (
                            <Choice
                                key={choiceIdx}
                                selected={selectedChoices[idx] === choiceIdx + 1}
                                onClick={() => updateChoices(idx, choiceIdx + 1)}
                            >
                                {choice}
                            </Choice>
                        ))}
                    </ChoicesContainer>
                </SmallTitle>
            ))}
            <StyledButton onClick={goToTestDetail}>😆채점하기😆</StyledButton>
        </MenuDom>
    );
};

export default TestList;

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

const SmallTitle = styled.div`
    font-size: 20px;
    color: #535353;
    font-weight: 700;
    text-align: center;
`;

const ChoicesContainer = styled.div`
    display: inline-block;
    width: auto;
    max-width: 100%;
`;

const Choice = styled.div`
    padding: 10px;
    color: ${({ selected }) => (selected ? '#000' : '#999')}; 
    background-color: ${({ selected }) => (selected ? '#b8edfb' : '#5fb7f62b')};
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    text-align: center;
    &:hover {
        background-color: #bfecfa;
    }
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    font-size: 20px;
    color: #4a4a4a;
    background-color: #b8edfb;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #a4d3e8;
    }
`;
