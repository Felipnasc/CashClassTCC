import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, Border, Color, FontSize } from "./GlobalStyles";

export default function Per3({navigation}){

  return (
    <View style={styles.iphone14Pro45}>
      <View style={[styles.vectorParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={[styles.tiposDeImpostos, styles.impostosTypo]}>
          Tipos de impostos
        </Text>
      </View>
      <Pressable style={styles.icons8Esquerda308} onPress={() => navigation.navigate('Per2')} >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../../../assets/icons8esquerda30-8.png")}
      />
      </Pressable>
      <Pressable
        style={[styles.vectorGroup, styles.groupLayout]}
        onPress={() => navigation.navigate('Per4')}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={[styles.proxmo, styles.impostosTypo]} onPress={() => navigation.navigate('Per4')}>Proxímo</Text>
      </Pressable>
      <Text style={[styles.precisamosPagarImpostos, styles.impostosTypo]}>
        Precisamos pagar impostos para financiar serviços públicos essenciais,
        reduzir desigualdades sociais, manter a ordem, investir em
        infraestrutura, proteger o meio ambiente e estimular a economia,
        garantindo assim o funcionamento e o bem-estar da sociedade como um
        todo.
      </Text>
      <View style={styles.iphone14Pro45Child} />
      <Image
        style={styles.icons8Imposto641}
        contentFit="cover"
        source={require("../../../assets/negocios1.png")}
      />
      <Image
        style={styles.icons8Imposto481}
        contentFit="cover"
        source={require("../../../assets/taxas1.png")}
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
  impostosTypo: {
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
  icons8Esquerda308: {
    top: 41,
    left: 29,
    width: 38,
    height: 36,
    position: "absolute",
  },
  icon:{
    height: "100%",
    width: "100%"
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
  precisamosPagarImpostos: {
    top: 150,
    left: 13,
    fontSize: 20,
    color: "#f5be00",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 366,
    height: 304,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  iphone14Pro45Child: {
    top: 478,
    left: 57,
    borderRadius: 45,
    backgroundColor: "#d9d9d9",
    width: 279,
    height: 203,
    position: "absolute",
  },
  icons8Imposto641: {
    top: 506,
    left: 165,
    width: 64,
    height: 64,
    position: "absolute",
  },
  icons8Imposto481: {
    top: 609,
    left: 160,
    width: 72,
    height: 72,
    position: "absolute",
  },
  iphone14Pro45: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});
