import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Pessoal1({navigation}){
  return (
    <ScrollView>
    <View style={styles.iphone14Pro63}>
      <View style={styles.iphone14Pro63Child} />
      <Pressable style={styles.iphone14Pro63Inner} onPress={() => navigation.navigate('Principal')}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Text style={styles.vamos} onPress={() => navigation.navigate('Principal')}>Voltar</Text>
        </View>
      </Pressable>
      <Text style={[styles.termosDeUso, styles.termosDeUsoTypo]} onPress={() => navigation.navigate('Pol1')}>
        Termos de Uso e Política de Privacidade do Cash Class
      </Text>
      <Text style={[styles.cashclassgmailcom, styles.termosDeUsoTypo]}>
        {" "}
        Aellycvt@gmail.com
      </Text>
      <View style={styles.textParent}>
        <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
        <Image
          style={[styles.icons8Pessoa3021, styles.icons8Layout]}
          contentFit="cover"
          source={require("../../../assets/icons8pessoa30-2-1.png")}
        />
        <Text style={[styles.privacidade, styles.textTypo]}>Privacidade</Text>
      </View>
      <Text style={[styles.nosContate, styles.textTypo]}>Nos contate</Text>
      <Image
        style={[styles.icons8Telefone501, styles.icons8Layout]}
        contentFit="cover"
        source={require("../../../assets/icons8telefone50-1.png")}
      />
      <View style={styles.vectorGroup}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-35.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-38.png")}
        />
        <Text style={[styles.cash, styles.cashLayout]}>Cash</Text>
        <Text style={[styles.class, styles.classPosition]}>Class</Text>
      </View>
      <Text style={[styles.programao, styles.textTypo]}>Programação</Text>
      <Image
        style={[styles.java1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../../../assets/java-1.png")}
      />
      <Image
        style={[styles.react1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/react-1.png")}
      />
      <Image
        style={[styles.node1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/node-1.png")}
      />
      <View style={[styles.prottipagemParent, styles.prottipagemParentLayout]}>
        <Text style={[styles.prottipagem, styles.textTypo]}>Protótipagem</Text>
        <Text style={[styles.pesquisa, styles.imagensTypo]}>Pesquisa</Text>
        <Text style={[styles.imagens, styles.imagensTypo]}>Imagens</Text>
        <Image
          style={[styles.figma1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../assets/figma-1.png")}
        />
        <Image
          style={styles.batePapoGpt1Icon}
          contentFit="cover"
          source={require("../../../assets/batepapogpt-1.png")}
        />
        <Image
          style={[styles.redditRemovebgPreview1Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../../../assets/redditremovebgpreview-1.png")}
        />
        <Image
          style={[
            styles.flatRemovebgPreview1Icon,
            styles.prottipagemParentLayout,
          ]}
          contentFit="cover"
          source={require("../../../assets/flatremovebgpreview-1.png")}
        />
      </View>
      <Text style={[styles.emulador, styles.textTypo]}>Emulador</Text>
      <Image
        style={styles.androidStudio1}
        contentFit="cover"
        source={require("../../../assets/android-studio-1.png")}
      />
      <View style={styles.textWrapper}>
        <Text style={[styles.text1, styles.textTypo]}>{` `}</Text>
      </View>
      <Text style={[styles.recursosUtilizados, styles.classPosition]}>
        Recursos utilizados
      </Text>
      <Image
        style={[styles.sql1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/sql-1.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  termosDeUsoTypo: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    color: Color.colorBlue,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "center",
    lineHeight: 34,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  icons8Layout: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  groupLayout: {
    width: 264,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  cashLayout: {
    transform: [
      {
        rotate: "-2.52deg",
      },
    ],
    height: 32,
    width: 94,
    alignItems: "center",
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_17xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 46,
  },
  classPosition: {
    left: 104,
    position: "absolute",
  },
  iconLayout1: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  iconLayout: {
    height: 67,
    position: "absolute",
  },
  iconPosition: {
    top: 693,
    position: "absolute",
  },
  prottipagemParentLayout: {
    width: 266,
    position: "absolute",
  },
  imagensTypo: {
    left: 93,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iphone14Pro63Child: {
    top: 202,
    left: 24,
    borderRadius: 41,
    backgroundColor: "#d9d9d9",
    width: 345,
    height: 1237,
    position: "absolute",
  },
  groupChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_3xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  vamos: {
    top: "11.11%",
    left: "38.42%",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    lineHeight: 34,
    color: Color.colorWhite,
    position: "absolute",
  },
  vectorParent: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iphone14Pro63Inner: {
    top: 1463,
    left: 47,
    width: 298,
    height: 45,
    position: "absolute",
  },
  termosDeUso: {
    top: 400,
    left: 52,
    width: 288,
  },
  cashclassgmailcom: {
    top: 285,
    left: 106,
    width: 180,
  },
  text: {
    left: 2,
    top: 13,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Pessoa3021: {
    left: 123,
    top: 0,
  },
  privacidade: {
    left: 0,
    top: 13,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textParent: {
    top: 338,
    left: 118,
    width: 173,
    height: 50,
    position: "absolute",
  },
  nosContate: {
    top: 243,
    left: 115,
    position: "absolute",
  },
  icons8Telefone501: {
    top: 226,
    left: 239,
  },
  groupItem: {
    top: 1,
    left: 1,
    height: 56,
  },
  groupInner: {
    top: 53,
    left: 18,
    height: 58,
  },
  cash: {
    top: 15,
    color: "rgba(0, 0, 0, 0.79)",
    left: 85,
    position: "absolute",
  },
  class: {
    top: 63,
    transform: [
      {
        rotate: "2.6deg",
      },
    ],
    height: 32,
    width: 94,
    alignItems: "center",
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_17xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 50,
    color: Color.colorWhite,
    left: 104,
  },
  vectorGroup: {
    top: 65,
    left: 55,
    width: 283,
    height: 112,
    position: "absolute",
  },
  programao: {
    top: 549,
    left: 133,
    position: "absolute",
  },
  java1Icon: {
    top: 599,
    left: 85,
  },
  react1Icon: {
    top: 600,
    left: 236,
    width: 70,
    height: 67,
  },
  node1Icon: {
    left: 220,
    width: 102,
    height: 102,
    overflow: "hidden",
  },
  prottipagem: {
    left: 69,
    top: 0,
    position: "absolute",
  },
  pesquisa: {
    top: 139,
  },
  imagens: {
    top: 281,
  },
  figma1Icon: {
    top: 48,
    left: 67,
    width: 133,
  },
  batePapoGpt1Icon: {
    top: 190,
    left: 173,
    width: 64,
    height: 64,
    position: "absolute",
  },
  redditRemovebgPreview1Icon: {
    top: 187,
    left: 27,
  },
  flatRemovebgPreview1Icon: {
    top: 331,
    height: 149,
    left: 0,
  },
  prottipagemParent: {
    top: 952,
    left: 63,
    height: 480,
  },
  emulador: {
    top: 790,
    left: 152,
    position: "absolute",
  },
  androidStudio1: {
    top: 838,
    left: 151,
    width: 90,
    height: 90,
    position: "absolute",
  },
  text1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textWrapper: {
    top: 778,
    left: 117,
    width: 0,
    height: 24,
    position: "absolute",
  },
  recursosUtilizados: {
    top: 494,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  sql1Icon: {
    left: 71,
    width: 99,
    height: 103,
  },
  iphone14Pro63: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 1540,
    overflow: "hidden",
    width: "100%",
  },
});

