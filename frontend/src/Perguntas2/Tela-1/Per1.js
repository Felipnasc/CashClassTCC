import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

export default function Per1({navigation}){

  return (
    <View style={styles.Per1}>
      <View style={[styles.vectorParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={[styles.oQue, styles.oQueTypo]}>O que é imposto?</Text>
      </View>
      <Pressable
        style={[styles.vectorGroup, styles.groupLayout]}
        onPress={() => navigation.navigate('Per2')}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={[styles.proxmo, styles.oQueTypo]} onPress={() => navigation.navigate('Per2')}>Proxímo</Text>
      </Pressable>
      <Text style={[styles.impostoUma, styles.impostoUmaTypo]}>
        Imposto é uma quantia de dinheiro que o governo cobra dos cidadãos e
        empresas para financiar serviços públicos. Exemplos no cotidiano incluem
        o Imposto sobre Produtos Industrializados (IPI) embutido nos preços de
        produtos como carros, o Imposto sobre a Propriedade de Veículos
        Automotores (IPVA) pago anualmente pelos proprietários de carros, e o
        Imposto de Renda (IR) retido mensalmente dos salários.
      </Text>
      <Text style={[styles.venhaEntenderMais, styles.impostoUmaTypo]}>
        Venha entender mais sobre o assunto!
      </Text>
      <Pressable style={styles.icons8Esquerda308} onPress={() => navigation.navigate('Principal')}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 45,
    width: 298,
    position: "absolute",
  },
  oQueTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_5xl,
    top: 5,
    position: "absolute",
  },
  impostoUmaTypo: {
    width: 366,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    color: Color.colorGold,
    fontSize: FontSize.size_xl,
    left: 13,
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
  oQue: {
    left: 49,
  },
  vectorParent: {
    top: 77,
    left: 53,
  },
  proxmo: {
    left: 103,
  },
  vectorGroup: {
    top: 720,
    left: 47,
  },
  impostoUma: {
    top: 175,
    height: 406,
  },
  venhaEntenderMais: {
    top: 618,
    height: 65,
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
  Per1: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});
