import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border } from "./GlobalStyles";

export default function Pergu3({ navigation }) {
  return (
    <View style={styles.Pergu6}>
      <View style={[styles.Pergu6Inner, styles.iphone14Layout]}>
        <View style={styles.groupChildPosition}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Text style={[styles.poderDeCompra, styles.vamosTypo]}>
            Poder de compra
          </Text>
        </View>
      </View>
      <Pressable style={styles.icons8Esquerda308} onPress={() => navigation.navigate("Pergu5")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>
      <Text style={[styles.deUmaForma, styles.deUmaFormaTypo]}>
        De uma forma geral, inflação é quando o dinheiro perde seu poder de
        compra, quando a inflação ocorre, você precisa gastar mais dinheiro para
        comprar a mesma quantidade de produtos ou serviços, tendo a Coca Cola
        como nosso exemplo!
      </Text>
      <Text style={[styles.vamosAsPerguntas, styles.deUmaFormaTypo]}>
        Vamos as perguntas?!
      </Text>
      <Pressable
        style={[styles.Pergu6Child, styles.iphone14Layout]}
      >
        <View style={styles.groupPosition}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../../../assets/rectangle-37.png")}
          />
          <Text style={[styles.vamos, styles.vamosTypo]}  onPress={() => navigation.navigate("Pergu7")}>Vamos</Text>
        </View>
      </Pressable>
      <Image
        style={styles.feliz1Icon}
        contentFit="cover"
        source={require("../../../assets/260216-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone14Layout: {
    height: 45,
    width: 298,
    left: 48,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 45,
    width: 298,
    position: "absolute",
  },
  vamosTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  deUmaFormaTypo: {
    color: Color.colorGold,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  groupPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "80%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    borderRadius: Border.br_3xl,
  },
  poderDeCompra: {
    top: 5,
    left: 51,
    color: "#fff8f8",
  },
  Pergu6Inner: {
    top: 90,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Esquerda308: {
    top: 46,
    width: 30,
    height: 30,
    left: 48,
    position: "absolute",
  },
  deUmaForma: {
    top: 164,
    left: 22,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 350,
  },
  vamosAsPerguntas: {
    top: 436,
    left: 90,
  },
  groupItem: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
  },
  vamos: {
    top: "90.00%",
    left: "34.4%",
    color: "#fff",
  },
  Pergu6Child: {
    top: 688,
  },
  feliz1Icon: {
    top: 515,
    left: 134,
    width: 128,
    height: 128,
    position: "absolute",
  },
  Pergu6: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 452,
    overflow: "hidden",
    width: "100%",
  },
});
