import React from "react";
import styled from "styled-components/native";

import Cabecalho from "../componentes/Cabecalho";
import Sugestoes from "../componentes/Sugestoes";
import Categorias from "../componentes/Categorias";
import Restaurantes from "../componentes/Restaurantes";

export default function Inicio({ navigation }) {
  return (
    <Tela>
      <Cabecalho />
      <Sugestoes />
      <Categorias />
      <Restaurantes />
    </Tela>
  );
}

const Tela = styled.ScrollView`
  flex: 1;
`;
