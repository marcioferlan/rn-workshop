import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function Sugestoes() {
  const sugestoes = [
    {
      id: 1,
      titulo: "Jantar bom e barato",
      descricao: "Opções a partir de R$ 10 sem taxas",
      imagem:
        "https://static-images.ifood.com.br/image/upload/f_auto,t_high/discoveries/ifood_capas_jantar_bom_e_barato_v1_marco_2019.png"
    },
    {
      id: 2,
      titulo: "Taxa na faixa",
      descricao: "Cortesia do restaurante pra você",
      imagem:
        "https://static-images.ifood.com.br/image/upload/f_auto,t_high/discoveries/ifood_capas_entregagratis_v4_abril_2019.png"
    }
  ];

  return (
    <ScrollView horizontal style={styles.areaSugestoes}>
      {sugestoes.map(sugestao => (
        <View style={styles.itemSugestao}>
          <Image
            source={{ uri: sugestao.imagem }}
            style={styles.imagemSugestao}
          />
          <Text style={styles.tituloSugestao}>{sugestao.titulo}</Text>
          <Text style={styles.descricaoSugestao}>{sugestao.descricao}</Text>
        </View>
      ))}
      <View style={styles.itemSugestao} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  areaSugestoes: {
    flexGrow: 0,
    paddingVertical: 10
  },
  imagemSugestao: {
    borderRadius: 5,
    width: 280,
    height: 150
  },
  itemSugestao: {
    paddingLeft: 10
  },
  tituloSugestao: {
    fontSize: 16,
    fontFamily: "Nunito",
    marginTop: 10
  },
  descricaoSugestao: {
    fontSize: 12,
    fontFamily: "Nunito",
    color: "#999"
  }
});
