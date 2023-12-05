import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily } from "./GlobalStyles";
import Gif from 'react-native-gif';


export default function Pergu10({navigation}){
  return (
    <View style={styles.Pergu10}>
      <Image
        style={styles.Pergu10Child}
        contentFit="cover"
        source={require("../../../assets/rectangle-85.png")}
      />
      <Pressable style={styles.Pergu10Inner} onPress={() => navigation.navigate("Principal")}>
        <View style={styles.groupChildPosition}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Text style={styles.finalizarAtividade}>Finalizar atividade</Text>
        </View>
      </Pressable>
      <Gif
      style={styles.icon}
      source={require('../../../assets/feliz-unscreen.gif')} // Altere a extensão do arquivo para .gif
      resizeMode="cover" // Você pode usar "cover" ou outra opção de redimensionamento
      autoPlay // Para reproduzir automaticamente o GIF
      loop // Para fazer o GIF repetir
/>
<Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../../../assets/fogos-de-artifi.png")}
        />
         <Image
          style={styles.icon3}
          contentFit="cover"
          source={require("../../../assets/fogos-de-artificio.png")}
        />

      <Text style={[styles.parabnsVocSe, styles.parabnsVocSeTypo]}>
        Parabéns, você se saiu muito bem e acertou tudo!
      </Text>
      <Text style={[styles.vamosFazerMais, styles.parabnsVocSeTypo]}>
        Vamos fazer mais uma? Termine a atividade atual e escolha outra.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: -2,
    top: 0,
    height: 45,
    width: 298,
    position: "absolute",
  },
  parabnsVocSeTypo: {
    width: 297,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    color: Color.colorBlue,
    fontSize: FontSize.size_xl,
    left: 48,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  Pergu10Child: {
    top: 39,
    left: 23,
    borderRadius: 54,
    width: 347,
    height: 774,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 22,
  },
  finalizarAtividade: {
    top: 5,
    left: 42,
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  Pergu10Inner: {
    top: 708,
    left: 52,
    height: 45,
    width: 298,
    position: "absolute",
  },
  icon: {
    top: 113,
    left: 118,
    width: 157,
    height: 157,
    position: "absolute",
  },
  icon2: {
    top: 383,
    left: 188,
    width: 72,
    height: 72,
    position: "absolute",
  },
  icon3: {
    top: 463,
    left: 118,
    width: 57,
    height: 57,
    position: "absolute",
  },
  parabnsVocSe: {
    top: 300,
  },
  vamosFazerMais: {
    top: 544,
  },
  Pergu10: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});