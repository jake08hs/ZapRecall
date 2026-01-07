import React, { useState } from "react";
import styled from "styled-components";

export default function Card({ index, card, aoResponder }) {
  const [etapa, setEtapa] = useState("fechado"); 
  const [status, setStatus] = useState(""); 

  function finalizar(resultado) {
    setEtapa("finalizado");
    setStatus(resultado);
    aoResponder();
  }

  // TELA 1
  if (etapa === "fechado" || etapa === "finalizado") {
    return (
      <CardFechado status={status} data-test="flashcard">
        <p data-test="flashcard-text">Pergunta {index + 1}</p>
        {status === "" && <img src="/src/assets/seta_play.png" onClick={() => setEtapa("pergunta")} data-test="play-btn" />}
        {status === "erro" && <img src="/src/assets/icone_erro.png" data-test="no-icon" />}
        {status === "quase" && <img src="/src/assets/icone_quase.png" data-test="partial-icon" />}
        {status === "zap" && <img src="/src/assets/icone_certo.png" data-test="zap-icon" />}
      </CardFechado>
    );
  }

  // TELA 2
  if (etapa === "pergunta") {
    return (
      <CardAberto data-test="flashcard">
        <p data-test="flashcard-text">{card.pergunta}</p>
        <img src="/src/assets/seta_virar.png" onClick={() => setEtapa("resposta")} data-test="turn-btn" />
      </CardAberto>
    );
  }

  // TELA 3
  if (etapa === "resposta") {
    return (
      <CardAberto data-test="flashcard">
        <p data-test="flashcard-text">{card.resposta}</p>
        <Botoes>
          <Btn cor="#FF3030" onClick={() => finalizar("erro")} data-test="no-btn">Não lembrei</Btn>
          <Btn cor="#FF922E" onClick={() => finalizar("quase")} data-test="partial-btn">Quase não lembrei</Btn>
          <Btn cor="#2FBE34" onClick={() => finalizar("zap")} data-test="zap-btn">Zap!</Btn>
        </Botoes>
      </CardAberto>
    );
  }
}

// Estilos específicos do Card 
const CardFechado = styled.div`
  width: 300px;
  height: 65px;
  background-color: #FFFFFF;
  margin: 12px 0;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p {
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    color: ${props => {
      if (props.status === "erro") return "#FF3030";
      if (props.status === "quase") return "#FF922E";
      if (props.status === "zap") return "#2FBE34";
      return "#333333";
    }};
    text-decoration: ${props => props.status ? "line-through" : "none"};
  }
  img { cursor: pointer; }
`;

const CardAberto = styled.div`
  width: 300px;
  min-height: 131px;
  background-color: #FFFFD4;
  margin: 12px 0;
  padding: 15px;
  border-radius: 5px;
  font-family: 'Recursive';
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p { font-size: 18px; color: #333333; }
  img { position: absolute; bottom: 10px; right: 10px; cursor: pointer; }
`;

const Botoes = styled.div` display: flex; justify-content: space-between; gap: 8px; `;

const Btn = styled.button`
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Recursive';
  font-size: 12px;
  background-color: ${props => props.cor};
  cursor: pointer;
`;