import styled from "styled-components";
import { theme } from "../Theme";

export const MainLogin = styled.main`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0;
`;

export const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1; 
    transform: scale(1.1, 1.1);
    filter: blur(5px);
`;

export const Img = styled.img`
   width: 430px;
   height: 500px;
`;


export const Button = styled.button`
  padding: .7rem 1.4rem;

  background-color: ${theme.color.primary};
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);

  color: ${theme.color.white};
  font-size: 1rem;
  font-weight: 500;

  transition: .2s;

  &:hover {
    cursor: pointer;

    background-color: ${theme.color.white};

    color: ${theme.color.primary};
  }

  align-self: end;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 430px;
  height: 500px;
  justify-content: center;

  background-color: white;
  gap: 2rem;
  padding: 2rem;
`;


export const Label = styled.label`
  font-weight: 500;
  font-size: 2rem;
  color: black;
  
  align-self: center;
`;

export const ImgLabel = styled.label`
  font-weight: 500;
  font-size: 2rem;
  color: white;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  border-radius: 1rem;
  background-color: black;
  overflow: hidden;

  border-style: solid;
  border-width: 2px;
  border-color: white;
`;

export const RightCard = styled.div`
    display: flex;
`;

export const LeftCard = styled.div`
    display: flex;
    position: relative;

`;