import React from "react";
import styled from "styled-components/native";
import restaurantes from "../dados/restaurantes.json";

export default function Restaurantes() {
  return (
    <Lista>
      <Titulo>Restaurantes</Titulo>
      {restaurantes.map(restaurante => (
        <Restaurante key={restaurante.id}>
          <Imagem source={{ uri: restaurante.imagem }} />
          <Detalhes>
            <Nome>{restaurante.nome}</Nome>
            <Descricao>{restaurante.descricao}</Descricao>
            <Entrega>{restaurante.entrega}</Entrega>
          </Detalhes>
          <Avaliacao>{restaurante.avaliacao}</Avaliacao>
        </Restaurante>
      ))}
    </Lista>
  );
}

const Lista = styled.View``;

const Titulo = styled.Text`
  padding: 10px;
  font-family: "Nunito";
  font-weight: bold;
  font-size: 20;
`;

const Restaurante = styled.TouchableOpacity`
  padding: 10px;
  border-top-width: 1px;
  border-top-color: #ddd;
  flex-direction: row;
`;

const Imagem = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-self: center;
`;

const Detalhes = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const Nome = styled.Text`
  font-family: "Nunito";
  font-weight: bold;
  font-size: 16px;
`;

const Descricao = styled.Text`
  font-family: "Nunito";
  font-size: 12px;
  color: #999;
`;

const Entrega = styled.Text`
  font-family: "Nunito";
  font-size: 12px;
  margin: 5px 0;
  padding: 2px 5px;
  border-radius: 5px;
  align-self: flex-start;
  border: 1px solid #ddd;
  color: #193;
`;

const Avaliacao = styled.Text`
  font-family: "Nunito";
  font-weight: bold;
  color: #fa0;
`;
