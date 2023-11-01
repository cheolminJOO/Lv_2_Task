import React from 'react'
import * as S from '../components/detailePageStyle'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function Todo() {
    const navigate = useNavigate()
    const onClickBtn = () => {
      navigate("/")
    }
    const params = useParams();
    const toDoArr = useSelector((state) => state.toDoArr.toDoArr)
    const detailedInfo = toDoArr.find((item) => parseInt(params.id) === item.id)
  
  return (
    <S.BossWrapper>
      <S.BigWrapper>
        <S.ContentsWrapper>
        <h1>Detailed Page</h1>
          <S.HeaderWrapper>
            <h2>{detailedInfo.id}</h2>
            <S.BackButton onClick={onClickBtn}>
              Back
              </S.BackButton>
          </S.HeaderWrapper>
          <S.BoddyWrapper>
            <h1>{detailedInfo.title}</h1>
            <h3>{detailedInfo.contents}</h3>
          </S.BoddyWrapper>
        </S.ContentsWrapper>
      </S.BigWrapper>
    </S.BossWrapper>
  )
}
