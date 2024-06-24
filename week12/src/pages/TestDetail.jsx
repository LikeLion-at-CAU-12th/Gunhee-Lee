import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const TestDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const baseURL = "https://gominzipsession.o-r.kr/";
    const { selectedChoices } = location.state || { selectedChoices: [] };
    const [resultImg, setResultImg] = useState('');
    const [resultTitle, setResultTitle] = useState('');
    const [correctCount, setCorrectCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const submitResults = async () => {
            const response = await axios.post(baseURL + 'liontest/result', {
                answers: selectedChoices
            });
                
            setCorrectCount(response.data.correctCount);

            try {
                const result = await axios.get(baseURL + 'liontest/result/' + response.data.correctCount);
                setResultImg(result.data.resultImg);
                setResultTitle(result.data.resultTitle);
            } catch (getError) {
                if (getError.response && getError.response.status === 400) {
                    setErrorMsg(getError.response.data.message);
                }
            }
        }; 

        if (selectedChoices.length > 0) {
            submitResults();
        }
    }, [selectedChoices]);

    const handleRetry = () => {
        navigate('/tests');
    };

    if (errorMsg) {
        return (
            <Container>
                <Title>{errorMsg}</Title>
                <StyledButton onClick={handleRetry}>테스트 다시하기</StyledButton>
            </Container>
        );
    }
    return (
        <Container>
            <Title>당신의 점수는...💙</Title>
            <Score>{correctCount} / 5</Score>
            <ResultImage src={resultImg} alt="Result" />
            <SmallTitle>{resultTitle}</SmallTitle>
            <StyledButton onClick={handleRetry}>테스트 다시하기</StyledButton>
        </Container>
    );
};

export default TestDetail;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin: 20px;
`;

const Title = styled.div`
    font-size: 30px;
    color: #535353;
    font-weight: 700;
    text-align: center;
`;

const SmallTitle = styled.div`
    font-size: 25px;
    color: #535353;
    font-weight: 700;
    text-align: center;
`;

const Score = styled.div`
    font-size: 30px;
    color: #535353;
    font-weight: 700;
    text-align: center;
`;

const ResultImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    font-size: 20px;
    color: #4a4a4a;
    background-color: #b8edfb;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background-color: #a4d3e8;
    }
`;
