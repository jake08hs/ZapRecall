import React, { useState } from "react";
import styled from "styled-components";

import play from "../assets/play.png";
import virar from "../assets/virada.png";
import cancelado from "../assets/cancelado.png";
import indefinido from "../assets/indefinido.png";
import feito from "../assets/feito.png";

export default function Card({ index, card, aoResponder }) {
  const [etapa, setEtapa] = useState("fechado"); 
  const [status, setStatus] = useState(""); 

  
  function finalizar(resultado) {
  setEtapa("finalizado");
  setStatus(resultado);
  aoResponder(resultado); 
}


  if (etapa === "fechado" || etapa === "finalizado") {
    return (
      <CardFechado status={status} data-test="flashcard">
        <p data-test="flashcard-text">Pergunta {index + 1}</p>

        {status === "" && (
          <img
            src={play}
            alt="play"
            onClick={() => setEtapa("pergunta")}
            data-test="play-btn"
          />
        )}
        {status === "erro" && <img src={cancelado} alt="não lembrei" data-test="no-icon" />}
        {status === "quase" && <img src={indefinido} alt="quase" data-test="partial-icon" />}
        {status === "zap" && <img src={feito} alt="zap" data-test="zap-icon" />}
      </CardFechado>
    );
  }

  
  if (etapa === "pergunta") {
    return (
      <CardAberto data-test="flashcard">
        <p data-test="flashcard-text">{card.pergunta}</p>
        <img
          src={virar}
          alt="virar"
          onClick={() => setEtapa("resposta")}
          data-test="turn-btn"
        />
      </CardAberto>
    );
  }


  if (etapa === "resposta") {
    return (
      <CardAberto data-test="flashcard">
        <p data-test="flashcard-text">{card.resposta}</p>
        <Botoes>
          <Btn cor="#FF3030" onClick={() => finalizar("erro")} data-test="no-btn">
            Não lembrei
          </Btn>
          <Btn cor="#FF922E" onClick={() => finalizar("quase")} data-test="partial-btn">
            Quase não lembrei
          </Btn>
          <Btn cor="#2FBE34" onClick={() => finalizar("zap")} data-test="zap-btn">
            Zap!
          </Btn>
        </Botoes>
      </CardAberto>
    );
  }
}


const CardFechado = styled.div`
  width: 300px;
  height: 65px;
  background-color: #ffffff;
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
    color: ${(props) => {
      if (props.status === "erro") return "#FF3030";
      if (props.status === "quase") return "#FF922E";
      if (props.status === "zap") return "#2FBE34";
      return "#333333";
    }};
    text-decoration: ${(props) => (props.status ? "line-through" : "none")};
  }

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

const CardAberto = styled.div`
  width: 300px;
  min-height: 100px;
  background-color: #ffffd4;
  margin: 12px 0;
  padding: 15px;
  border-radius: 5px;
  font-family: 'Recursive';
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

  p {
    font-size: 18px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    color: #333333;
  }

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Btn = styled.button`
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Recursive';
  font-size: 12px;
  font-weight: 700;
  background-color: ${(props) => props.cor};  /* <- aqui usa props.cor */
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 14px;
  word-break: break-word;
  padding: 0 4px;
`;
