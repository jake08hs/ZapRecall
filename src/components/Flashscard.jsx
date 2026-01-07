import React, { useState } from "react";
import styled from "styled-components";

export default function Card({ index, card, aoResponder }) {
  const [etapa, setEtapa] = useState("fechado"); 
  const [status, setStatus] = useState(""); 

  // Tela 1
  if (etapa === "fechado") {
    return (
      <CardFechado status={status}>
        <p>Pergunta {index + 1}</p>
        <img src="/src/assets/seta_play.png" onClick={() => setEtapa("pergunta")} />
      </CardFechado>
    );
  }

  // Tela 2
  if (etapa === "pergunta") {
    return (
      <CardAberto>
        <p>{card.pergunta}</p>
        <img src="/src/assets/seta_virar.png" onClick={() => setEtapa("resposta")} />
      </CardAberto>
    );
  }

  // Tela 3
  if (etapa === "resposta") {
    return (
      <CardAberto>
        <p>{card.resposta}</p>
        <Botoes>
          <Btn cor="#FF3030" onClick={() => finalizar("erro")}>Não lembrei</Btn>
          <Btn cor="#FF922E" onClick={() => finalizar("quase")}>Quase não lembrei</Btn>
          <Btn cor="#2FBE34" onClick={() => finalizar("zap")}>Zap!</Btn>
        </Botoes>
      </CardAberto>
    );
  }

  function finalizar(resultado) {
    setEtapa("fechado");
    setStatus(resultado);
    aoResponder();
  }
}

const CardFechado = styled.div`
  width: 300px;
  height: 65px;
  background-color: #FFFFFF;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p {
    font-family: 'Recursive';
    font-weight: 700;
    text-decoration: ${props => props.status ? "line-through" : "none"};
    color: ${props => {
      if (props.status === "erro") return "#FF3030";
      if (props.status === "quase") return "#FF922E";
      if (props.status === "zap") return "#2FBE34";
      return "#333333";
    }};
  }
`;

const CardAberto = styled.div`
  width: 300px;
  min-height: 131px;
  background-color: #FFFFD4;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img { position: absolute; bottom: 10px; right: 10px; }
`;

const Botoes = styled.div`display: flex; gap: 8px;`;
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