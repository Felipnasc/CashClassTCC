import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";

export default function Stop({navigation}){
  return (
    <View style={styles.iphone13141}>
      <Image
        style={styles.pare1Icon}
        contentFit="cover"
        source={require("../../../assets/pare.png")}
      />
      <Pressable style={styles.iphone13141Inner} onPress={() => navigation.navigate("Principal")}>
        <View style={styles.groupChildPosition}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Pressable style={styles.vamos} onPress={() => navigation.navigate("Principal")}>
            <Text style={styles.voltar}>Voltar</Text>
          </Pressable>
        </View>
      </Pressable>
      <Text style={[styles.jaFezTudo, styles.jaFezTudoTypo]}>
        Ja fez tudo?! Atividade em desenvolvimento, aguarde
      </Text>
      <Image
        style={styles.loading1Icon}
        contentFit="cover"
        source={require("../../../assets/loading.gif")}
      />
      <Text style={[styles.aPacincia, styles.jaFezTudoTypo]}>
        A paciência é a chave que transforma a espera em crescimento.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  jaFezTudoTypo: {
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
  pare1Icon: {
    top: 66,
    left: 101,
    width: 187,
    height: 187,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xl,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  voltar: {
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  vamos: {
    left: "38.42%",
    top: "11.11%",
    position: "absolute",
  },
  iphone13141Inner: {
    top: 686,
    left: 51,
    width: 298,
    height: 45,
    position: "absolute",
  },
  jaFezTudo: {
    top: 282,
    left: 50,
    width: 293,
    height: 73,
  },
  loading1Icon: {
    top: 376,
    left: 125,
    width: 150,
    height: 152,
    position: "absolute",
  },
  aPacincia: {
    top: 582,
    left: 11,
    width: 367,
    height: 68,
  },
  iphone13141: {
    backgroundColor: "#494949",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});
