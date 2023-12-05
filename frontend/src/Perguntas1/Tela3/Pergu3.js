import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Vibration, Alert } from "react-native";
import { FontFamily, Color, Border, FontSize } from "./GlobalStyles";
import { useNavigation } from '@react-navigation/native';

export default function Pergu3({ navigation }) {

  const botaoCerto = () => {
    Alert.alert(
      "", // Título vazio
      "Isso mesmo, agora vamos falar sobre poder de compra e entender mais sobre o assunto!",
      [
        {
          text: "Fechar",
          onPress: () => navigation.navigate("Pergu5"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  const botaoErrado = () => {
    Alert.alert(
      "", // Título vazio
      "Na verdade é possivel comprar 185, agora vamos falar sobre poder de compra e entender mais sobre o assunto!",
      [
        {
          text: "Fechar",
          onPress: () => navigation.navigate("Pergu5"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.Pergu3}>
      <Image
        style={styles.Pergu3Child}
        contentFit="cover"
        source={require("../../../assets/rectangle-37.png")}
      />
      <Text style={[styles.oQue, styles.oQueTypo]}>O que é inflação?</Text>
     <Text style={[styles.em1994Com, styles.em1994ComTypo]}>
        Em 1994, com um salário mínimo, era possível comprar cerca de 87
        Coca-Colas. Você tem noção de quantas Coca-Colas daria para comprar com
        um salário mínimo atual?
      </Text>
      <Pressable
        style={[styles.Pergu3Item, styles.iphone14Layout]}
        onPress={botaoErrado}
      />
      <Pressable
        style={[styles.Pergu3Inner, styles.iphone14Layout]}
        onPress={botaoErrado}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.iphone14Layout]}
        onPress={botaoErrado}
      />
      <Pressable
        style={[styles.Pergu3Child1,styles.iphone14Layout,]}
        onPress={botaoCerto}
      />
      
      <Text
        style={[styles.r400, styles.r400Typo]}
        onPress={botaoErrado}
      >127</Text>

      <Text
        style={[styles.r211, styles.r400Typo]}
        onPress={botaoErrado}
      >200</Text>

      <Text
        style={[styles.r144, styles.r400Typo]}
        onPress={botaoErrado}
      >134</Text>

      <Text
        style={[styles.r080, styles.r400Typo]}
        onPress={botaoCerto}
      >185</Text>

      <TouchableOpacity style={styles.icons8Esquerda308} onPress={() => navigation.navigate("Pergu2")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  oQueTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  popup: {
    backgroundColor: "#1C1C1C",
    padding: 25,
    width: 300,
    borderRadius: 10,
    top: 300,
    left: 48,
  },
  popupText: {
    color: "white",
  },
  closeButton: {
    left: 100,
    top: 10,
  },
  em1994Com: {
    top: 135,
    left: 20,
    fontSize: 20,
    color: "#f5be00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 356,
    height: 253,
  },
  em1994ComTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  iphone14Layout: {
    height: 58,
    width: 336,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    backgroundColor: Color.colorSnow,
    left: 29,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  iphone14ChildLayout: {
    height: 33,
    width: 30,
    left: 59,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  r400Typo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  Pergu3Child: {
    top: 77,
    left: 53,
    width: 298,
    height: 45,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  oQue: {
    top: 82,
    left: 102,
    fontSize: 24,
    color: "#fff",
  },
  paraIniciarNossa: {
    top: 132,
    left: 18,
    fontSize: 20,
    color: "#f5be00",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 366,
    height: 114,
  },
  refrigerante1Icon: {
    top: 236,
    left: 149,
    width: 95,
    height: 95,
    position: "absolute",
  },
  Pergu3Item: {
    top: 375,
  },
  Pergu3Inner: {
    top: 474,
  },
  rectanglePressable: {
    top: 573,
  },
  Pergu3Child1: {
    top: 672,
  },
  rectangleView: {
    top: 388,
  },
  Pergu3Child2: {
    top: 487,
  },
  Pergu3Child3: {
    top: 586,
  },
  Pergu3Child4: {
    top: 684,
  },
  r400: {
    top: 393,
    left: 181,
  },
  r211: {
    top: 493,
    left: 181,
  },
  r144: {
    top: 591,
    left: 181,
  },
  r080: {
    top: 688,
    left: 181,
    
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Esquerda308: {
    top: 41,
    width: 38,
    height: 36,
    left: 29,
    position: "absolute",
  },
  Pergu3: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});
