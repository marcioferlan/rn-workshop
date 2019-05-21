import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Cabecalho() {
  const endereco = "Rua Projetada, S/N, Vargem Alta/ES";

  return (
    <View>
      <View style={styles.cabecalho}>
        <Text style={styles.textoEntregar}>ENTREGAR EM</Text>
        <Text style={styles.textoEndereco}>{endereco}</Text>
      </View>

      <View>
        <TextInput
          style={styles.campoBusca}
          placeholder="Prato ou restaurante"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    margin: 10
  },
  textoEntregar: {
    fontSize: 12,
    fontFamily: "Nunito",
    color: "#999"
  },
  textoEndereco: {
    fontSize: 12,
    fontFamily: "Nunito",
    fontWeight: "bold"
  },
  campoBusca: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    fontSize: 12,
    fontFamily: "Nunito",
    backgroundColor: "#eee"
  }
});
