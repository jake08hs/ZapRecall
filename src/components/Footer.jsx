// Footer.jsx
import React from "react";
import styled from "styled-components";

export default function Footer({ concluidos, total }) {
  return (
    <Retangulo>
      {concluidos} / {total} CONCLUÍDOS
    </Retangulo>
  );
}

const Retangulo = styled.div`
  width: 375px;           
  height: 70px;          
  background-color: #FFFFFF;
  border-radius: 2p;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  margin-top: 10px;       /* distancia do deck */
`;
