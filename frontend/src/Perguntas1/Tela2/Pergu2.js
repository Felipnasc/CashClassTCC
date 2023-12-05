import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

export default function Pergu2({navigation}){

  return (
    <View style={styles.iphone14Pro38}>
      <Text
        style={[styles.basicamenteissoSignificaQue, styles.aInflaoTypo]}
      >{`  Basicamente,isso significa que com o passar dos meses ou anos, é necessário gastar mais dinheiro para comprar a mesma quantidade de coisas.
`}</Text>
      <Text
        style={[styles.aInflao, styles.aInflaoTypo]}
      >{`A inflação é o aumento geral e contínuo dos preços de bens e serviços em uma economia, resultando na perda do poder de compra da moeda. `}</Text>
      <View style={styles.iphone14Pro38Inner}>
        <View style={styles.groupChildPosition}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Text style={styles.inflao}>Inflação</Text>
        </View>
      </View>
      <Pressable
        style={[styles.icons8Esquerda3010, styles.icons8Layout]}
        onPress={() => navigation.navigate('Pergu3')}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-10.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.icons8Esquerda308, styles.icons8Layout]}
        onPress={() => navigation.navigate('Pergu1')}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>
      <Image
        style={styles.icon2}
        contentFit="cover"
        source={require("../../../assets/4072626.png")}
      />
      <Image
        style={styles.desvalorizacao1Icon}
        contentFit="cover"
        source={require("../../../assets/desvalorizacao.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aInflaoTypo: {
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
    top: 45,
    position: "absolute",
  },
  basicamenteissoSignificaQue: {
    top: 600,
    left: 30,
    width: 333,
    height: 200,
  },
  aInflao: {
    top: 159,
    width: 321,
    height: 174,
    left: 36,
  },
  groupChild: {
    borderRadius: 22,
  },
  inflao: {
    top: 5,
    left: 104,
    fontSize: 24,
    color: "#fff8f8",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  iphone14Pro38Inner: {
    top: 88,
    left: 48,
    height: 45,
    width: 298,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Esquerda3010: {
    left: 333,
  },
  icons8Esquerda308: {
    left: 36,
  },
  icon2: {
    top: 368,
    left: 51,
    width: 176,
    height: 176,
    position: "absolute",
  },
  desvalorizacao1Icon: {
    top: 419,
    left: 238,
    width: 95,
    height: 95,
    position: "absolute",
  },
  iphone14Pro38: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

