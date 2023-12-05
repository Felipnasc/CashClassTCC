import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Apre2({navigation}){
  return (
    <ScrollView>
    <View style={styles.iphone14Pro65}>
      <View style={styles.iphone14Pro65Inner}>
        <Pressable style={styles.groupChildPosition} onPress={() => navigation.navigate("Principal")}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={styles.aceitoODesafio} onPress={() => navigation.navigate("Principal")}>Aceito o desafio</Text>
        </Pressable>
      </View>
      <Text style={styles.aUtilizao}>{`A utilização é bastante intuitiva,
 o aplicativo é segmentado em situações; basta responder todas as perguntas de uma situação para desbloquear a próxima.`}</Text>
      <Pressable style={styles.icons8Esquerda306} onPress={() => navigation.navigate("Log2")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>
      <Image
        style={styles.proximo1Icon}
        contentFit="cover"
        source={require("../../../assets/proximo-1.png")}
      />
      <Image
        style={styles.iphone14Pro3331}
        contentFit="cover"
        source={require("../../../assets/iphone-14-pro--33-3-1.png")}
      />
      <Image
        style={[styles.iphone14Pro661, styles.iphone14Layout]}
        contentFit="cover"
        source={require("../../../assets/iphone-14-pro--66-1.png")}
      />
      <Image
        style={[styles.iphone14Pro621, styles.iphone14Layout]}
        contentFit="cover"
        source={require("../../../assets/iphone-14-pro--62-1.png")}
      />
      <Text style={[styles.paraAcessarAs, styles.curtiuVenhaETypo]}>
        Para acessar as situações, é só ir na lousa que esta apontado pela seta
        escolher a situação!
      </Text>
      <Text
        style={[styles.curtiuVenhaE, styles.curtiuVenhaETypo]}
      >{`Curtiu? Venha e Explore o universo financeiro com o Cash Class e alcance seus objetivos.
Nós enfatizamos a teoria e orientação, construindo um futuro financeiro sólido. Topa o desafio?`}</Text>
      <Image
        style={styles.surpresoUnscreen1Icon}
        contentFit="cover"
        source={require("../../../assets/surpreso-unscreen.gif")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 45,
    width: 298,
    position: "absolute",
  },
  iphone14Layout: {
    height: 389,
    position: "absolute",
  },
  curtiuVenhaETypo: {
    width: 329,
    left: 32,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorSnow,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 22,
    backgroundColor: "#11ae04",
  },
  aceitoODesafio: {
    top: 8,
    left: 75,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: "#fff",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iphone14Pro65Inner: {
    top: 1686,
    left: 48,
    height: 45,
    width: 298,
    position: "absolute",
  },
  aUtilizao: {
    top: 100,
    left: 25,
    width: 344,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorSnow,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Esquerda306: {
    left: 24,
    top: 48,
    width: 30,
    height: 30,
    position: "absolute",
  },
  proximo1Icon: {
    top: 359,
    left: 55,
    width: 32,
    height: 32,
    position: "absolute",
  },
  iphone14Pro3331: {
    top: 261,
    left: 99,
    height: 280,
    width: 266,
    position: "absolute",
  },
  iphone14Pro661: {
    top: 455,
    left: 20,
    width: 266,
  },
  iphone14Pro621: {
    top: 752,
    left: 103,
    width: 262,
  },
  paraAcessarAs: {
    top: 1174,
    height: 81,
  },
  curtiuVenhaE: {
    top: 1465,
    height: 175,
  },
  surpresoUnscreen1Icon: {
    top: 1295,
    left: 126,
    width: 141,
    height: 141,
    position: "absolute",
  },
  iphone14Pro65: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 1768,
    overflow: "hidden",
    width: "100%",
  },
});
