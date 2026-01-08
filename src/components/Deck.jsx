
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Footer from "./Footer";
import flashcards from "../data/flashcards";

export default function Deck({ aoResponder, statuses }) {
  const concluidos = statuses.filter(s => s !== "").length;

  return (
    <DeckContainer>
      {flashcards.map((card, index) => (
        <Card
          key={index}
          index={index}
          card={card}
          aoResponder={(status) => aoResponder(index, status)}
        />
      ))}

      <Footer concluidos={concluidos} total={flashcards.length} />
    </DeckContainer>
  );
}

const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
