import {styled} from 'styled-components'

export const BossWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const BigWrapper = styled.div`
  width : 1200px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border : 3px solid black;
  border-radius: 30px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width : 400px;
  border: 2px solid black;
  
  
`

export const DoneHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width : 400px;
  border: 2px solid red;
  
  
`

export const BackButton = styled.button`
  background-color: ${(props) => (props.backColor ? props.backColor : "black")};
  color: ${(props) => (props.color ? props.color : "red")};
  font-size: large;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    color :${(props) => (props.hoverColor ? props.hoverColor : "white")}; 
    background-color: ${(props) => (props.hoverBackgroundColor ? props.hoverBackgroundColor : "red")};
  }
`

export const DoneBodywrapper = styled.div`
  border : 1px solid red;
  width : 400px;
  height: 330px;

`
export const BoddyWrapper = styled.div`
  border : 1px solid black;
  width : 400px;
  height: 330px;

`
export const IdFontStyle = styled.h2`
  text-align: center;
`


