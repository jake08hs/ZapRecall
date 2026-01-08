import React, { useState } from "react";
import styled from "styled-components";
import Deck from "./components/Deck";
import flashcards from "./data/flashcards";
import raio from "./assets/raio.png"; 

export default function App() {
  const [statuses, setStatuses] = useState(Array(flashcards.length).fill(""));

  // atualiza o status de cada card
  function aoResponder(index, status) {
    const novo = [...statuses];
    novo[index] = status;
    setStatuses(novo);
  }

  return (
    <PageFundo>
      <Container>
        <Cabecalho>
            <img src={raio} alt="raio" />
          ZapRecall
        </Cabecalho>

        {/* deck recebe a função de atualizar e os statuses */}
        <Deck aoResponder={aoResponder} statuses={statuses} />
      </Container>
    </PageFundo>
  );
}

// fundo da tela
const PageFundo = styled.div`
  background-color: #DBDBDB;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// container vermelho centralizado
const Container = styled.div`
  width: 375px;
  height: 667px;
  background-color: #FB6B6B;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center; /* centraliza horizontalmente */
`;

// cabeçalho
const Cabecalho = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Righteous', cursive;
  font-size: 36px;
  color: #FFFFFF;

  img {
    width: 52px;
    height: 60px;
  }
`;
