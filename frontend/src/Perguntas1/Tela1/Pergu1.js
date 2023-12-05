import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Vibration, Alert } from "react-native";
import { FontFamily, Color, Border, FontSize } from "./GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import Gif from 'react-native-gif';

export default function Pergu1({ navigation }) {

  const botaoCerto = () => {
    Alert.alert(
      "", // Título vazio
      "Isso ilustra claramente o fenômeno da inflação, onde muitos têm dificuldade em acreditar que era possível comprar uma Coca-Cola por apenas R$ 0,80 centavos naquela época.",
      [
        {
          text: "Fechar",
          onPress: () => navigation.navigate("Pergu2"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  const botaoErrado = () => {
    Alert.alert(
      "", // Título vazio
      "Na verdade era possível comprar uma Coca-Cola com apenas R$0,80",
      [
        {
          text: "Fechar",
          onPress: () => navigation.navigate("Pergu2"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.Pergu1}>
      <Image
        style={styles.Pergu1Child}
        contentFit="cover"
        source={require("../../../assets/rectangle-37.png")}
      />
      <Text style={[styles.oQue, styles.oQueTypo]}>O que é inflação?</Text>
      <Text style={[styles.paraIniciarNossa, styles.oQueTypo]}>
        Para iniciar nossa discussão, você tem conhecimento a respeito do preço
        de uma Coca-Cola em 1994?
      </Text>
      <Gif
      style={styles.icon1}
      source={require('../../../assets/refrigerante-1.gif')} // Altere a extensão do arquivo para .gif
      resizeMode="cover" // Você pode usar "cover" ou outra opção de redimensionamento
      autoPlay // Para reproduzir automaticamente o GIF
      loop // Para fazer o GIF repetir
/>
      <Pressable
        style={[styles.Pergu1Item, styles.iphone14Layout]}
        onPress={botaoErrado}
      />{/* Botao 4,00 */}
      <Pressable
        style={[styles.Pergu1Inner, styles.iphone14Layout]}
        onPress={botaoErrado}
      />{/* Botao 2,11 */}
      <Pressable
        style={[styles.rectanglePressable, styles.iphone14Layout]}
        onPress={botaoErrado}
      />{/* Botao 1,44 */}
      <Pressable
        style={[styles.Pergu1Child1, styles.iphone14Layout,]}
        onPress={botaoCerto}
      />{/* Botao 0,80 */}
      

      <Text
        style={[styles.r400, styles.r400Typo]}
        onPress={botaoErrado}
      >R$ 4,00</Text>

      <Text
        style={[styles.r211, styles.r400Typo]}
        onPress={botaoErrado}
      >R$ 2,11</Text>

      <Text
        style={[styles.r144, styles.r400Typo]}
        onPress={botaoErrado}
      >R$ 1,44</Text>

      <Text
        style={[styles.r080, styles.r400Typo]}
        onPress={botaoCerto}
      >R$ 0,80</Text>

      <TouchableOpacity style={styles.icons8Esquerda308} onPress={() => navigation.navigate("Principal")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  oQueTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  popup: {
    backgroundColor: "#1C1C1C",
    padding: 25,
    width: 300,
    borderRadius: 10,
    top: 75,
    left: 48,
  },
  closeButton:{
    left: 100,
    top: 10,
  },
  popupText: {
    color: "white",
  },
  iphone14Layout: {
    height: 58,
    width: 336,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    backgroundColor: Color.colorSnow, /*rgb(255, 215, 0)*/
    left: 29,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  iphone14ChildLayout: {
    height: 33,
    width: 30,
    left: 59,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  r400Typo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  Pergu1Child: {
    top: 77,
    left: 53,
    width: 298,
    height: 45,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  oQue: {
    top: 82,
    left: 102,
    fontSize: 24,
    color: "#fff",
  },
  paraIniciarNossa: {
    top: 132,
    left: 18,
    fontSize: 20,
    color: "#f5be00",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 366,
    height: 114,
  },
  refrigerante1Icon: {
    top: 236,
    left: 149,
    width: 95,
    height: 95,
    position: "absolute",
  },
  Pergu1Item: {
    top: 375,
  },
  Pergu1Inner: {
    top: 474,
  },
  rectanglePressable: {
    top: 573,
  },
  Pergu1Child1: {
    top: 672,
  },
  rectangleView: {
    top: 388,
  },
  Pergu1Child2: {
    top: 487,
  },
  Pergu1Child3: {
    top: 586,
  },
  Pergu1Child4: {
    top: 684,
  },
  r400: {
    top: 393,
    left: 163,
  },
  r211: {
    top: 491,
    left: 163,
  },
  r144: {
    top: 591,
    left: 163,
  },
  r080: {
    top: 690,
    left: 163,
    
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icon1: {
    height: "15%",
    width: "30%",
    top: 240,
    left: 135,
  },
  icons8Esquerda308: {
    top: 41,
    width: 38,
    height: 36,
    left: 29,
    position: "absolute",
  },
  Pergu1: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});
