import React from "react";
import styled from "styled-components/native";

export default function Cabecalho() {
  const endereco = "Rua Projetada, S/N, Vargem Alta/ES";

  return (
    <Secao>
      <Entrega>
        <Entregar>ENTREGAR EM</Entregar>
        <Endereco>{endereco}</Endereco>
      </Entrega>

      <Busca>
        <CampoBusca placeholder="Prato ou restaurante" />
      </Busca>
    </Secao>
  );
}

const Secao = styled.View``;
const Busca = styled.View``;

const Entrega = styled.View`
  margin: 10px;
`;

const Entregar = styled.Text`
  font-size: 12px;
  font-family: "Nunito";
  color: #999;
`;

const Endereco = styled.Text`
  font-size: 12px;
  font-family: "Nunito";
  font-weight: bold;
`;

const CampoBusca = styled.TextInput`
  border-radius: 5px;
  padding: 10px;
  margin: 0 10px;
  font-size: 12px;
  font-family: "Nunito";
  background-color: #eee;
`;
