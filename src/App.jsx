import React, { useState } from "react";
import styled from "styled-components";
import flashcards from "./data/flashcards";
import Card from "./components/Card"; 

export default function App() {
  const [concluidos, setConcluidos] = useState(0);

  return (
    <ScreenContainer>
      <LogoContainer>
        <img src="/src/assets/raio.png" alt="logo" />
        <h1>ZapRecall</h1>
      </LogoContainer>

      <CardsContainer>
        {flashcards.map((card, index) => (
          <Card 
            key={card.id} 
            index={index} 
            card={card} 
            // Função rodapé
            aoResponder={() => setConcluidos(prev => prev + 1)} 
          />
        ))}
      </CardsContainer>

      <Footer data-test="footer">
        {concluidos}/{flashcards.length} CONCLUÍDOS
      </Footer>
    </ScreenContainer>
  );
}


const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px; /* Evita que o último card fique atrás do footer */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  h1 {
    font-family: 'Righteous', cursive;
    font-size: 36px;
    color: #FFFFFF;
    margin-left: 20px;
  }
  img { width: 52px; }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Footer = styled.footer`
  width: 100%;
  min-height: 70px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;