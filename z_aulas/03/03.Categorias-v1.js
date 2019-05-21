import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function Categorias() {
  return (
    <View style={styles.secaoCategorias}>
      <Text style={styles.tituloSecao}>Categorias</Text>

      <ScrollView horizontal style={styles.areaCategorias}>
        <View style={styles.itemCategoria}>
          <Image
            source={{
              uri:
                "https://static-images.ifood.com.br/image/upload/f_auto/discoveries/19C1-pizza.jpg"
            }}
            style={styles.imagemCategoria}
          />
          <Text style={styles.nomeCategoria}>Pizza</Text>
        </View>
        <View style={styles.itemCategoria}>
          <Image
            source={{
              uri:
                "https://static-images.ifood.com.br/image/upload/f_auto/discoveries/19C1-lanches-v2.jpg"
            }}
            style={styles.imagemCategoria}
          />
          <Text style={styles.nomeCategoria}>Lanches</Text>
        </View>
        <View style={styles.itemCategoria}>
          <Image
            source={{
              uri:
                "https://static-images.ifood.com.br/image/upload/f_auto/discoveries/19C1-japonesa.jpg"
            }}
            style={styles.imagemCategoria}
          />
          <Text style={styles.nomeCategoria}>Japonesa</Text>
        </View>
        <View style={styles.itemCategoria}>
          <Image
            source={{
              uri:
                "https://static-images.ifood.com.br/image/upload/f_auto/discoveries/19C1-brasileira-v2.jpg"
            }}
            style={styles.imagemCategoria}
          />
          <Text style={styles.nomeCategoria}>Brasileira</Text>
        </View>
        <View style={styles.itemCategoria} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  secaoCategorias: {
    marginVertical: 10
  },
  tituloSecao: {
    paddingLeft: 10,
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 20
  },
  areaCategorias: {
    flexGrow: 0,
    paddingVertical: 10
  },
  imagemCategoria: {
    borderRadius: 5,
    width: 100,
    height: 80
  },
  itemCategoria: {
    paddingLeft: 10
  },
  nomeCategoria: {
    color: "#666",
    textAlign: "center",
    fontWeight: "300",
    fontFamily: "Nunito",
    marginTop: 10
  }
});
