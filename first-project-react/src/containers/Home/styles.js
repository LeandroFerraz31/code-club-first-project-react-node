import styled from "styled-components";
import Backgroud from "../../assets/panel-two.svg";
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
  backdrop-filter:blur(45px);

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

export const InputLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  color: rgba(238, 238, 238, 1);
  margin-left: 25px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 34px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28.13px;
  color: #eeeeee;
`;

export const Button = styled(Link)`
  width: 342px;
  height: 58px;
  margin-top: 130px;
  

  text-decoration: none;
  
  border-radius: 14px;
  border: none;
  background: rgba(0, 0, 0, 0.8);
  
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

  
`;
