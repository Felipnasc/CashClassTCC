import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Sit1({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.iphone14Pro66}>
      <View style={[styles.iphone14Pro66Child, styles.childBorder]} />
      <Pressable
        style={[styles.definicoes1, styles.licao1Layout]}
        onPress={() => navigation.navigate("Pessoal1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/definicoes-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.comparacao11, styles.licao1Layout]}
        onPress={() => navigation.navigate("Comp1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/comparacao-1-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.licao1, styles.licao1Layout]}
        onPress={() => {}}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/licao-1.png")}
        />
      </Pressable>
      <Text style={styles.terminouSuaSituao}>{`Terminou sua situação?!
Vamos para a próxima!`}</Text>
      <Pressable
        style={[styles.iphone14Pro66Inner, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("Principal")}
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.oQue, styles.mercadoTypo]} onPress={() => navigation.navigate("Principal")}>
            O QUE É DINHEIRO?
          </Text>
          <View style={styles.icons8Dinheiro1002} />
        </View>
      </Pressable>
      <Image
        style={styles.bolsaDeDinheiro1Icon}
        contentFit="cover"
        source={require("../../../assets/bolsadedinheiro-1.png")}
      />
      <Pressable
        style={[styles.groupPressable, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("Principal2")}
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.desbravandoOMercado, styles.mercadoTypo]} onPress={() => navigation.navigate("Principal2")}>
            DESBRAVANDO O MERCADO FINANCEIRO
          </Text>
          <View style={styles.icons8Dinheiro1002} />
        </View>
      </Pressable>
      <Image
        style={styles.carrinhoCarrinho1Icon}
        contentFit="cover"
        source={require("../../../assets/carrinho.png")}
      />
      <Pressable
        style={[styles.groupParent, styles.groupInnerLayout]}
        onPress={() => {}}
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text
            style={[styles.riscosERecompensas, styles.riscosERecompensasTypo]}
          >
            RISCOS E RECOMPENSAS
          </Text>
          <View style={styles.icons8Dinheiro1002} />
        </View>
        <Image
          style={[
            styles.gerenciamentoDeRiscos1Icon,
            styles.mercadoImobilirioPosition,
          ]}
          contentFit="cover"
          source={require("../../../assets/gerenciamentoderiscos-1.png")}
        />
      </Pressable>
      <View style={[styles.groupView, styles.groupInnerLayout]}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.oPoderDos, styles.mercadoTypo]}>
            O PODER DOS JUROS COMPOSTOS
          </Text>
          <View style={styles.icons8Dinheiro1002} />
        </View>
      </View>
      <Pressable
        style={[styles.iphone14Pro66Inner1, styles.groupInnerLayout]}
        onPress={() => {}}
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text
            style={[styles.mercadoImobilirio, styles.mercadoImobilirioPosition]}
          >
            MERCADO IMOBILIÁRIO
          </Text>
          <View style={styles.icons8Dinheiro1002} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.taxaDeJurosFlutuante1, styles.iconPosition]}
        onPress={() => {}}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/taxadejurosflutuante-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.investimentoResidencial1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/investimentoresidencial-1.png")}
      />
      <Pressable
        style={[styles.iphone14Pro66Inner2, styles.groupInnerLayout]}
        onPress={() => {}}
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text
            style={[
              styles.criptomoedasEBlockchain,
              styles.riscosERecompensasTypo,
            ]}
          >
            CRIPTOMOEDAS E BLOCKCHAIN
          </Text>
          <View style={styles.icons8Dinheiro1002} />
        </View>
      </Pressable>
      <Image
        style={[styles.bitcoin1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/bitcoin-1.png")}
      />
      <Image
        style={styles.testeRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../../../assets/testeremovebgpreview-1.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  licao1Layout: {
    height: 48,
    width: 48,
    top: 147,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 103,
    width: 336,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    height: 103,
    width: 336,
    left: 0,
    position: "absolute",
  },
  mercadoTypo: {
    alignItems: "flex-end",
    color: Color.colorGray,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  riscosERecompensasTypo: {
    left: 50,
    top: 16,
    alignItems: "flex-end",
    color: Color.colorGray,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  mercadoImobilirioPosition: {
    top: 17,
    height: 66,
    position: "absolute",
  },
  iconPosition: {
    left: 286,
    height: 64,
    width: 64,
    position: "absolute",
  },
  iphone14Pro66Child: {
    top: -18,
    borderRadius: 20,
    backgroundColor: "#3b3e3c",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#494949",
    width: 393,
    height: 226,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  definicoes1: {
    left: 316,
  },
  comparacao11: {
    left: 172,
  },
  licao1: {
    left: 40,
  },
  terminouSuaSituao: {
    top: 236,
    fontSize: 28,
    color: "#f5be00",
    alignItems: "center",
    width: 338,
    height: 66,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    left: 27,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorSnow,
    borderColor: Color.colorGray,
    borderWidth: 1,
    borderStyle: "solid",
  },
  oQue: {
    top: 35,
    width: 197,
    height: 31,
    left: 32,
    color: Color.colorGray,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Dinheiro1002: {
    top: 42,
    left: 10,
    width: 50,
    height: 50,
    position: "absolute",
  },
  iphone14Pro66Inner: {
    top: 330,
    left: 28,
    width: 336,
  },
  bolsaDeDinheiro1Icon: {
    top: 348,
    height: 64,
    width: 64,
    left: 284,
    position: "absolute",
  },
  desbravandoOMercado: {
    top: 17,
    left: 14,
    width: 232,
    height: 65,
    position: "absolute",
  },
  groupPressable: {
    top: 461,
    left: 28,
    width: 336,
  },
  carrinhoCarrinho1Icon: {
    top: 475,
    width: 79,
    height: 79,
    left: 284,
    position: "absolute",
  },
  riscosERecompensas: {
    width: 163,
    height: 65,
  },
  gerenciamentoDeRiscos1Icon: {
    left: 257,
    width: 66,
  },
  groupParent: {
    top: 592,
    width: 336,
    left: 27,
  },
  oPoderDos: {
    top: 17,
    width: 211,
    left: 32,
    color: Color.colorGray,
    fontSize: FontSize.size_xl,
    position: "absolute",
    height: 66,
  },
  groupView: {
    top: 723,
    width: 336,
    left: 27,
  },
  mercadoImobilirio: {
    left: 68,
    width: 136,
    alignItems: "flex-end",
    color: Color.colorGray,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  iphone14Pro66Inner1: {
    top: 854,
    left: 28,
    width: 336,
  },
  taxaDeJurosFlutuante1: {
    top: 743,
  },
  investimentoResidencial1Icon: {
    top: 874,
  },
  criptomoedasEBlockchain: {
    width: 175,
    height: 66,
  },
  iphone14Pro66Inner2: {
    top: 985,
    width: 336,
    left: 27,
  },
  bitcoin1Icon: {
    top: 1004,
  },
  testeRemovebgPreview1Icon: {
    top: 39,
    left: 92,
    width: 208,
    height: 111,
    position: "absolute",
  },
  iphone14Pro66: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 1136,
    overflow: "hidden",
    width: "100%",
  },
});
