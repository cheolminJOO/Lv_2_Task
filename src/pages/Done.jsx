import React from 'react'
import * as S from '../components/detailePageStyle'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function Done() {
  const navigate = useNavigate()
  const onClickBtn = () => {
    navigate("/")
  }
  const params = useParams();
  const doneArr = useSelector((state) => state.doneArr.doneArr)
  const detailedInfo = doneArr.find((item) => parseInt(params.id) === item.id)


  return  (
    <S.BossWrapper>
      <S.BigWrapper>
        <S.ContentsWrapper>
        <h1>Done | Detailed Page</h1>
          <S.DoneHeaderWrapper>
            <h2>{detailedInfo.id}</h2>
            <S.DoneBackButton onClick={onClickBtn}>
              Back
              </S.DoneBackButton>
          </S.DoneHeaderWrapper>
          <S.DoneBodywrapper>
            <h1>{detailedInfo.title}</h1>
            <h3>{detailedInfo.contents}</h3>
          </S.DoneBodywrapper>
        </S.ContentsWrapper>
      </S.BigWrapper>
    </S.BossWrapper>
  )
}

