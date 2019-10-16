import styled from 'styled-components/macro'
import React from 'react'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
`

export const InputBox = styled.input`
  height: 35px;
  width: 200px;
  border: 1px solid #d6d6d6;
  border-radius: 3px;
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputBoxStyled = styled(InputBox)`
  width: 100%;
  border-radius: 35px;
  box-sizing: border-box;
  border: 1px solid #aaa;
`

export const InputSection = styled.div`
  display: felx;
  align-items: center;
  justify-content: center;
  & > *+* {
    margin-left: 1em;
  }
`

export const ListItem = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`

export const SearchSection = styled.div`
  padding: 0 1em;
  position: relative;
  margin: 5px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1em;
`

export const SearchIcon = styled.i`
  position: absolute;
  right: 1em;
  top: 5px;
  z-index: 2;
  color: #aaa;
`

export const BubbleContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
`

interface IProps {
  x: number
  y: number
  vertical: number
  horizontal: number
  new: boolean
}
export const Bubble = styled.div`
  position: absolute;
  width: ${(props) => props.new ? '50px' : '30px'};
  height: ${(props) => props.new ? '50px' : '30px'};
  border-radius: 50%;
  left: ${(props: IProps) => props.x + 'px'};
  top: ${(props: IProps) => props.y + 'px'};
  background: ${(props: IProps) => `hsla(${100 + Math.random() * 150}, 100%, 50%, ${props.new ? 1 : 0.4})`};
  animation: ${(props) => `animateBubble ${props.vertical}s linear infinite alternate, sideWays ${props.horizontal}s linear infinite alternate`};

  @keyframes animateBubble {
    0% {
        margin-top: 10px;
    }
    100% {
        margin-top: -10px;
    }
  }

  @keyframes sideWays {
    0% {
        margin-left:0px;
    }
    100% {
        margin-left:20px;
    }
  }
`