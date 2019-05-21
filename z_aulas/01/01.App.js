import React from "react";
import { View } from "react-native";

import Cabecalho from "./componentes/Cabecalho";

export default function App() {
  return (
    <View style={styles.tela}>
      <Cabecalho />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1
  }
});
