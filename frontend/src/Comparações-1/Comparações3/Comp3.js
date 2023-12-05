import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

export default function Comp3({navigation}){
  return (
    <View style={styles.iphone14Pro68}>
      <Pressable
        style={[styles.rectangleParent, styles.groupLayout]}
        onPress={() => navigation.navigate("Comp2")}
      >
        <View style={[styles.groupChild, styles.childBorder]} />
        <Image
          style={[styles.casaLimpa1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../../../assets/casalimpa-1.png")}
        />
        <Text style={[styles.prsEContras, styles.prsTypo]} onPress={() => navigation.navigate("Comp4")}>
          Prós e contras de casa para alugar
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Comp4")}
      >
        <View style={[styles.groupChild, styles.childBorder]} />
        <Text style={[styles.prsEContras1, styles.prsTypo]} onPress={() => navigation.navigate("Comp4")}>
          Prós e contras de fundo imobiliário
        </Text>
        <Text style={[styles.fundoImobilirio, styles.casaDeAluguelTypo]}>
          Fundo Imobiliário
        </Text>
        <Image
          style={[styles.imobiliaria1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../../../assets/imobiliaria-1.png")}
        />
      </Pressable>
      <Text style={[styles.casaDeAluguel, styles.casaDeAluguelTypo]}>
        Casa de aluguel
      </Text>
      <View style={[styles.iphone14Pro68Child, styles.childBorder]} />
      <Pressable
        style={[styles.definicoes1, styles.licao1Layout]}
        onPress={() => navigation.navigate("Pessoal1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/definicoes-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.comparacao11, styles.licao1Layout]}
        onPress={() => navigation.navigate("Comp1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/comparacao-1-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.licao1, styles.licao1Layout]}
        onPress={() => navigation.navigate("Sit1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/licao-1.png")}
        />
      </Pressable>
      <Image
        style={styles.testeRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../../../assets/testeremovebgpreview-1.png")}
      />
      <Text style={styles.cliqueEmAlguma}>
        Clique em alguma das opções para obter a explicação dessas comparações.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 163,
    width: 336,
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    top: 50,
    position: "absolute",
  },
  prsTypo: {
    height: 67,
    width: 183,
    color: Color.colorBlack,
    top: 59,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  casaDeAluguelTypo: {
    height: 32,
    color: Color.colorBlue,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  licao1Layout: {
    height: 48,
    width: 48,
    top: 147,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorSilver,
    borderColor: Color.colorBlack,
    height: 163,
    width: 336,
  },
  casaLimpa1Icon: {
    width: 72,
    height: 72,
    left: 28,
  },
  prsEContras: {
    left: 132,
  },
  rectangleParent: {
    top: 283,
    left: 28,
    position: "absolute",
  },
  prsEContras1: {
    left: 29,
  },
  fundoImobilirio: {
    top: 18,
    left: 24,
    width: 197,
  },
  imobiliaria1Icon: {
    left: 247,
    width: 64,
    height: 64,
  },
  rectangleGroup: {
    top: 614,
    left: 28,
    position: "absolute",
  },
  casaDeAluguel: {
    top: 301,
    width: 159,
    left: 172,
  },
  iphone14Pro68Child: {
    top: -18,
    borderRadius: 20,
    backgroundColor: "#3b3e3c",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#494949",
    width: 393,
    height: 226,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  definicoes1: {
    left: 316,
  },
  comparacao11: {
    left: 172,
  },
  licao1: {
    left: 40,
  },
  testeRemovebgPreview1Icon: {
    top: 39,
    left: 92,
    width: 208,
    height: 111,
    position: "absolute",
  },
  cliqueEmAlguma: {
    top: 481,
    left: 46,
    color: "#f5be00",
    width: 296,
    height: 98,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iphone14Pro68: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});
