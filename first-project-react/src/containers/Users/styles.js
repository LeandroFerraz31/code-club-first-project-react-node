import styled from "styled-components";
import Backgroud from "../../assets/panel-one.svg";
import {  Link } from "react-router-dom";
export const Container = styled.div`
  background: url("${Backgroud}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 200vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  border-radius: 61px 61px 0px 0px;
  opacity: 0px;

  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  height:200vh;
`;

export const H1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  line-height: 39.84px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 80px;
`;

export const Button = styled(Link)`
  width: 342px;
  height: 58px;
  margin-top: 130px;
  

  text-decoration: none;

  border-radius: 14px;
  border: 1px solid #ffffff;
  background: transparent ;

  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.5;
  }

  img{
  transform:rotateY(180deg);
  
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.25) ;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  
  width: 342px;
  height: 58px;

  border: none;
  outline: none;
  
  p{
    font-style:normal;
    font-weight: normal ;
    font-size: 20px;
    line-height: 28.13px;

    color: #fff;
  }

  button{
      background: none;
      border: none;
      cursor: pointer;
    }
`;
