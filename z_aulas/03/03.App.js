import React from "react";
import { View } from "react-native";

import Cabecalho from "./componentes/Cabecalho";
import Sugestoes from "./componentes/Sugestoes";
import Categorias from "./componentes/Categorias";

export default function App() {
  return (
    <View style={styles.tela}>
      <Cabecalho />
      <Sugestoes />
      <Categorias />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1
  }
});
