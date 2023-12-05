import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, Border, Color, FontSize } from "./GlobalStyles";
import Gif from 'react-native-gif';

export default function Per5({navigation}){

  return (
    <View style={styles.iphone14Pro47}>
      <View style={[styles.vectorParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={styles.gostou}>Gostou?</Text>
      </View>
      <Pressable style={styles.icons8Esquerda308} onPress={() => navigation.navigate('Per4')}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>
      <View style={[styles.vectorGroup, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={[styles.vamos, styles.vamosFlexBox]} onPress={() => navigation.navigate('Per6')}>Vamos</Text>
      </View>
      <Text style={[styles.essaFoiFacl, styles.vamosFlexBox]}>
        Essa foi facíl né, nós brasileiros estamos bem acostumado com impostos,
        vamos as perguntas então!
      </Text>
      <Image
        style={styles.icons8Feito501}
        contentFit="cover"
        source={require("../../../assets/pulandofeliz1.png")}
      />
        <Gif
        style={styles.pepepRemovebgPreview1Icon}
      source={require('../../../assets/feliz-unscreen.gif')} // Altere a extensão do arquivo para .gif
      resizeMode="cover" // Você pode usar "cover" ou outra opção de redimensionamento
      autoPlay // Para reproduzir automaticamente o GIF
      loop // Para fazer o GIF repetir
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
  vamosFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
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
  gostou: {
    top: 5,
    left: 101,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    position: "absolute",
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
  vamos: {
    top: 4,
    left: 110,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
  },
  vectorGroup: {
    top: 734,
    left: 47,
  },
  essaFoiFacl: {
    top: 160,
    left: 30,
    width: 340,
    fontSize: 20,
    color: "#f5be00",
  },
  icons8Feito501: {
    top: 345,
    left: 130,
    width: 305,
    height: 305,
    position: "absolute",
  },
  pepepRemovebgPreview1Icon: {
    top: 398,
    left: 50,
    width: 150,
    height: 150,
    position: "absolute",
  },
  iphone14Pro47: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});
