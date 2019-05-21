import React from "react";
import styled from "styled-components/native";
import sugestoes from "../dados/sugestoes.json";

export default function Sugestoes() {
  return (
    <Painel>
      {sugestoes.map(sugestao => (
        <Sugestao key={sugestao.id}>
          <Imagem source={{ uri: sugestao.imagem }} />
          <Titulo>{sugestao.titulo}</Titulo>
          <Descricao>{sugestao.descricao}</Descricao>
        </Sugestao>
      ))}
      <Sugestao />
    </Painel>
  );
}

const Painel = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  flex-grow: 0;
  padding: 10px 0;
`;

const Sugestao = styled.View`
  padding-left: 10px;
`;

const Imagem = styled.Image`
  border-radius: 5px;
  width: 280px;
  height: 150px;
`;

const Titulo = styled.Text`
  font-size: 16px;
  font-family: "Nunito";
  margin-top: 10px;
`;

const Descricao = styled.Text`
  font-size: 12px;
  font-family: "Nunito";
  color: #999;
`;
