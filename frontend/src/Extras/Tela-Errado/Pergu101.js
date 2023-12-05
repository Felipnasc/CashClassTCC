import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";
import Gif from 'react-native-gif';

export default function Pergu101({navigation}){

  return (
    <View style={styles.Pergu101}>
      <Image
        style={styles.Pergu101Child}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <Text style={[styles.peraACampeo, styles.peraACampeoFlexBox]}>
        Pera aí, campeão! Não foi dessa vez, mas não se desanime. Volte na
        atividade e veja seus erros!
      </Text>
      <Text style={[styles.errandoQueSe, styles.errandoQueSeTypo]}>
        É errando que se aprende, não se abale por isso, Tente novamente!
      </Text>
      <Image
        style={styles.Pergu101Item}
        contentFit="cover"
        source={require("../../../assets/rectangle-68.png")}
      />
      <Pressable style={styles.Pergu101Inner} onPress={() => navigation.navigate("Principal")}>
        <View style={styles.groupChildPosition}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Text style={[styles.refaaAtividade, styles.errandoQueSeTypo]}>
            Refaça atividade
          </Text>
        </View>
      </Pressable>
      <Gif
      style={styles.triste1Icon}
      source={require('../../../assets/triste-1.gif')} // Altere a extensão do arquivo para .gif
      resizeMode="cover" // Você pode usar "cover" ou outra opção de redimensionamento
      autoPlay // Para reproduzir automaticamente o GIF
      loop // Para fazer o GIF repetir
/>
    </View>
  );
};

const styles = StyleSheet.create({
  peraACampeoFlexBox: {
    width: 297,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    color: Color.colorBlue,
    fontSize: FontSize.size_xl,
  },
  errandoQueSeTypo: {
    left: 52,
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
  Pergu101Child: {
    top: 39,
    left: 23,
    borderRadius: 54,
    width: 347,
    height: 774,
    position: "absolute",
  },
  peraACampeo: {
    top: 290,
    left: 48,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    width: 297,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    color: Color.colorBlue,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  errandoQueSe: {
    top: 524,
    width: 297,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    color: Color.colorBlue,
    fontSize: FontSize.size_xl,
    left: 53,
  },
  Pergu101Item: {
    top: 719,
    left: 514,
    width: 393,
    position: "absolute",
    height: 852,
  },
  groupChild: {
    borderRadius: 22,
  },
  refaaAtividade: {
    top: 5,
    fontSize: 24,
    color: "#fff",
  },
  Pergu101Inner: {
    top: 708,
    left: 50,
    height: 45,
    width: 298,
    position: "absolute",
  },
  triste1Icon: {
    top: 113,
    left: 118,
    width: 158,
    height: 158,
    position: "absolute",
  },
  Pergu101: {
    backgroundColor: "#4f4f4f",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});
