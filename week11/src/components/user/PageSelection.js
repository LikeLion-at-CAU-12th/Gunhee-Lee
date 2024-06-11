import React, { useState } from 'react'
import styled from 'styled-components'
import { getPerPage } from '../../apis/userlist'

const PageSelection = ({ curPage, setUserData, setCurPage }) => {
    const [allData, setAllData] = useState([]);
    const perPage = 5;

    const handleClick = async (page) => {
        let data = allData;
        if (allData.length === 0) {
            data = await getPerPage(0); // 최초 데이터 로드
            setAllData(data);
        }
        const offset = (page - 1) * perPage;
        setUserData(data.slice(offset, offset + perPage));
        setCurPage(page);
    };

    return (
        <SelectionLayout>
            {[1, 2, 3, 4, 5, 6].map((val) => 
                <PageBox
                    key={val}
                    $active={val === curPage}
                    onClick={() => handleClick(val)}
                >
                    {val}
                </PageBox>
            )}
        </SelectionLayout>
    )
}

export default PageSelection

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
    &:hover {
        cursor: pointer;
        color: white;
    }
`
