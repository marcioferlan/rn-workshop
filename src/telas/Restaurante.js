import React from "react";
import styled from "styled-components/native";

export default function Restaurante({ navigation }) {
  return (
    <Tela>
      <Titulo>Restaurante #{navigation.state.params.id}</Titulo>
      <Voltar onPress={() => navigation.navigate("Inicio")}>
        <Titulo>← Voltar</Titulo>
      </Voltar>
    </Tela>
  );
}

const Tela = styled.View`
  flex: 1;
`;

const Titulo = styled.Text`
  font-size: 18px;
`;

const Voltar = styled.TouchableOpacity``;
