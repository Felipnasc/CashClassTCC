import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";
import Gif from 'react-native-gif';

export default function Pergu5({navigation}){

  return (
    <View style={styles.Pergu5}>
      <View style={styles.Pergu5Inner}>
        <View style={styles.groupChildPosition}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Text style={styles.poderDeCompra}>Poder de compra</Text>
        </View>
      </View>
      <Pressable
        style={[styles.icons8Esquerda308, styles.icons8Layout]}
        onPress={() => navigation.navigate("Pergu3")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>

      <Pressable style={[styles.icons8Esquerda309, styles.icons8Layout]}
       onPress={() => navigation.navigate("Pergu6")}>
        
      <Image
      style={styles.icon}
        source={require("../../../assets/icons8esquerda30-10.png")}
        contentFit="cover"
      />
      </Pressable>

      <Text style={[styles.oPoderDe, styles.oPoderDeTypo]}>
        O poder de compra é uma medida da quantidade de bens e serviços que uma
        pessoa pode adquirir com o seu dinheiro. Basicamente, está relacionado à
        capacidade de uma pessoa ou família comprar produtos e serviços com base
        em sua renda disponível.
      </Text>
      <Gif
      style={styles.poderDeCompra1}
      source={require('../../../assets/oferta-1.gif')} // Altere a extensão do arquivo para .gif
      resizeMode="cover" // Você pode usar "cover" ou outra opção de redimensionamento
      autoPlay // Para reproduzir automaticamente o GIF
      loop // Para fazer o GIF repetir
/>
      <Text style={[styles.importanteEntenderO, styles.oPoderDeTypo]}>
        É importante entender o poder de compra para fazer escolhas financeiras
        informadas.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 45,
    width: 298,
    position: "absolute",
  },
  icons8Layout: {
    height: 30,
    width: 30,
    top: 48,
    position: "absolute",
  },
  oPoderDeTypo: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    color: Color.colorGold,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 22,
  },
  poderDeCompra: {
    top: 5,
    left: 51,
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  Pergu5Inner: {
    top: 90,
    left: 48,
    height: 45,
    width: 298,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Esquerda308: {
    left: 33,
  },
  icons8Esquerda309: {
    left: 331,
  },
  oPoderDe: {
    top: 162,
    left: 20,
    width: 356,
    height: 274,
  },
  poderDeCompra1: {
    top: 440,
    left: 98,
    width: 198,
    height: 190,
    position: "absolute",
  },
  importanteEntenderO: {
    top: 666,
    left: 18,
    width: 357,
  },
  Pergu5: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});
