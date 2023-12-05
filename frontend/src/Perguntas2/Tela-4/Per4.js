import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, Border, Color, FontSize } from "./GlobalStyles";

export default function Per4({navigation}){
  return (
    <View style={styles.iphone14Pro46}>
      <View style={[styles.vectorParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={[styles.tiposDeImpostos, styles.proxmoTypo]}>
          Tipos de impostos
        </Text>
      </View>
      <Pressable style={styles.icons8Esquerda308} onPress={() => navigation.navigate('Per3')}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vectorGroup, styles.groupLayout]}
        onPress={() => navigation.navigate('Per5')}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={[styles.proxmo, styles.proxmoTypo]} onPress={() => navigation.navigate('Per5')}>Proxímo</Text>
      </Pressable>
      <Text style={[styles.emSumaOs, styles.proxmoTypo]}>
        Em suma os impostos desempenham um papel fundamental na arrecadação de
        receita para o governo. Quando os cidadãos e as empresas pagam impostos,
        estão contribuindo para o orçamento público. Essa receita é essencial
        para que o governo possa cumprir suas funções, como fornecer serviços
        públicos, pagar salários de funcionários públicos e investir em projetos
        de infraestrutura.
      </Text>
      <Image
        style={styles.sp1Icon}
        contentFit="cover"
        source={require("../../../assets/sp-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 45,
    width: 298,
    position: "absolute",
  },
  proxmoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xl,
  },
  tiposDeImpostos: {
    left: 43,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    top: 5,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  vectorParent: {
    top: 77,
    left: 53,
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
  proxmo: {
    left: 103,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    top: 5,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  vectorGroup: {
    top: 734,
    left: 47,
  },
  emSumaOs: {
    top: 154,
    left: 13,
    fontSize: 20,
    color: "#f5be00",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 366,
    height: 412,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  sp1Icon: {
    top: 586,
    left: 97,
    width: 200,
    height: 117,
    position: "absolute",
  },
  iphone14Pro46: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});
