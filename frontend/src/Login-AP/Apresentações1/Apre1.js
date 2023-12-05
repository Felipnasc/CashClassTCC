import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "./GlobalStyles";
import Gif from 'react-native-gif';

export default function Apre1({navigation}){

  return (
    <View style={styles.Apre1}>
      <Text style={[styles.bemVindoAoCash, styles.cashFlexBox]}>
        Bem-vindo ao Cash Class, o aplicativo de ensino financeiro projetado
        especificamente para jovens e iniciantes que estão dando os primeiros
        passos no mundo das finanças.
      </Text>
      <Pressable style={styles.icons8Esquerda308} onPress={() => navigation.navigate('Log2')}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate('Apre2')}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.comoFunciona, styles.noCashClassTypo]}>
          Como funciona?
        </Text>
      </Pressable>
      <Text style={[styles.noCashClass, styles.noCashClassTypo]}>
        No Cash Class, aprenda do básico ao avançado em finanças de forma
        acessível e envolvente. Nossa abordagem torna o aprendizado fácil para
        todos. Fortaleça seu conhecimento financeiro e transforme sua vida.
      </Text>
      <Gif
      style={styles.icon1}
      source={require('../../../assets/feliz-unscreen.gif')} // Altere a extensão do arquivo para .gif
      resizeMode="cover" // Você pode usar "cover" ou outra opção de redimensionamento
      autoPlay // Para reproduzir automaticamente o GIF
      loop // Para fazer o GIF repetir
/>
    </View>
  );
};

const styles = StyleSheet.create({
  cashFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  groupChildLayout: {
    height: 45,
    width: 298,
    position: "absolute",
  },
  noCashClassTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icon1: {
    height: "20%",
    width: "40%",
    top: 270,
    left: 115,
  },
  bemVindoAoCash: {
    top: 87,
    left: 30,
    color: "#fff8f8",
    width: 333,
    height: 160,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Esquerda308: {
    left: 29,
    top: 41,
    width: 38,
    height: 36,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: 22,
    backgroundColor: "#11ae04",
  },
  comoFunciona: {
    top: 8,
    left: 68,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 165,
    height: 26,
  },
  rectangleParent: {
    top: 697,
    left: 47,
  },
  noCashClass: {
    top: 463,
    left: 33,
    width: 327,
    height: 195,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  Apre1: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});