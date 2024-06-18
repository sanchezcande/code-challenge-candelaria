import React from "react";
import { Title, Letter,LetterContainer, TitleContainer } from "./AnimatedTitle.styles";

export default function AnimatedTitle({ myData }) {
  return (
    <TitleContainer>
      <Title>Hi👋, my name is: </Title>
      <LetterContainer>
        {myData.name.split("").map((char, index) => (
          <Letter key={index} animationdelay={`${index * 0.1}s`}>
            {char}
          </Letter>
        ))}
      </LetterContainer>
    </TitleContainer>
  );
}
