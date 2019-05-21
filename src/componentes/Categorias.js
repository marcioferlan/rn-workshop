import React from "react";
import styled from "styled-components/native";
import categorias from "../dados/categorias.json";

export default function Categorias() {
  return (
    <Secao>
      <Titulo>Categorias</Titulo>
      <Painel>
        {categorias.map(categoria => (
          <Categoria key={categoria.id}>
            <Imagem source={{ uri: categoria.imagem }} />
            <Nome>{categoria.nome}</Nome>
          </Categoria>
        ))}
        <Categoria />
      </Painel>
    </Secao>
  );
}

const Secao = styled.View`
  margin: 10px 0;
`;

const Titulo = styled.Text`
  padding-left: 10;
  font-family: "Nunito";
  font-weight: bold;
  font-size: 20;
`;

const Painel = styled.ScrollView.attrs({ horizontal: true })`
  flex-grow: 0;
  padding: 10px 0;
`;

const Imagem = styled.Image`
  border-radius: 5px;
  width: 100px;
  height: 80px;
`;

const Categoria = styled.View`
  padding-left: 10px;
`;

const Nome = styled.Text`
  color: #666;
  text-align: center;
  font-weight: 300;
  font-family: "Nunito";
  margin-top: 10px;
`;
