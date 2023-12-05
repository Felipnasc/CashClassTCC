import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Principal2({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.iphone14Pro52}>
      <View style={styles.iphone14Pro52Child} />
      <View style={[styles.iphone14Pro52Inner, styles.vectorParentLayout]}>
        <View style={[styles.vectorParent, styles.parentPosition]}>
          <Image
            style={[styles.groupChild, styles.groupLayout1]}
            contentFit="cover"
            source={require("../../../assets/rectangle-35.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupLayout1]}
            contentFit="cover"
            source={require("../../../assets/rectangle-38.png")}
          />
          <Text style={[styles.cash, styles.cashFlexBox]}>Cash</Text>
          <Text style={[styles.class, styles.classClr]}>Class</Text>
        </View>
      </View>
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
        onPress={() => navigation.navigate("Sit1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/licao-1.png")}
        />
      </Pressable>
      <Text style={[styles.situao2Desbravando, styles.proxmoTypo3]}>
        Situação 2- Desbravando o mercado financeiro!
      </Text>
      <Image
        style={[styles.lucroFinanceiro1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/globo-unscreen.gif")}
      />
      <Image
        style={[styles.carrinhoCarrinho1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/carrinho.png")}
      />
      <Pressable
        style={[styles.vectorGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Sit1")}
      >
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={[styles.proxmo, styles.proxmoTypo]} onPress={() => navigation.navigate("Sit1")}>Proxímo</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleInnerLayout]}
        onPress={() => navigation.navigate("Stop")}
      >
        <View style={[styles.rectangleParent, styles.rectangleInnerLayout]}>
          <View style={[styles.rectangleView, styles.groupChild11Border]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild12Layout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-100.png")}
          />
          <Text style={[styles.bloqueado, styles.bloqueadoTypo]}>
            Bloqueado
          </Text>
          <Text style={[styles.oQueSo, styles.queTypo]}>O QUE SÃO AÇÕES?</Text>
          <View style={[styles.icons8Dinheiro1002, styles.classPosition]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iphone14Pro52Inner1, styles.rectangleInnerLayout]}
        onPress={() => navigation.navigate("Stop")}
      >
        <View style={[styles.rectangleParent, styles.rectangleInnerLayout]}>
          <View style={[styles.rectangleView, styles.groupChild11Border]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild12Layout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-100.png")}
          />
          <Text style={[styles.bloqueado10, styles.bloqueadoTypo1]}>
            Bloqueado
          </Text>
          <Text style={[styles.oQueSo, styles.queTypo]}>BOLSA DE VALORES</Text>
          <View style={[styles.icons8Dinheiro1002, styles.classPosition]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iphone14Pro52Inner2, styles.rectangleInnerLayout]}
        onPress={() => navigation.navigate("Stop")}
      >
        <View style={[styles.rectangleParent, styles.rectangleInnerLayout]}>
          <View style={[styles.rectangleView, styles.groupChild11Border]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild12Layout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-100.png")}
          />
          <Text style={[styles.bloqueado1, styles.bloqueadoTypo]}>
            Bloqueado
          </Text>
          <Text style={[styles.oQueSo1, styles.queTypo2]}>
            O QUE SÃO CORRETORAS?
          </Text>
          <View style={[styles.icons8Dinheiro1002, styles.classPosition]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iphone14Pro52Inner3, styles.rectangleInnerLayout]}
        onPress={() => navigation.navigate("Stop")}
      >
        <View style={[styles.rectangleParent, styles.rectangleInnerLayout]}>
          <View style={[styles.rectangleView, styles.groupChild11Border]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild12Layout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-100.png")}
          />
          <Text style={[styles.bloqueado3, styles.bloqueadoTypo]}>
            Bloqueado
          </Text>
          <Text
            style={[styles.dividendosERendimentos, styles.implicaesFiscaisTypo]}
          >
            DIVIDENDOS E RENDIMENTOS
          </Text>
          <View style={[styles.icons8Dinheiro1002, styles.classPosition]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iphone14Pro52Inner4, styles.rectangleInnerLayout]}
        onPress={() => navigation.navigate("Stop")}
      >
        <View style={[styles.rectangleParent, styles.rectangleInnerLayout]}>
          <View style={[styles.rectangleView, styles.groupChild11Border]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild12Layout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-100.png")}
          />
          <Text style={[styles.bloqueado3, styles.bloqueadoTypo]}>
            Bloqueado
          </Text>
          <Text
            style={[styles.derivativosFinanceiros, styles.implicaesFiscaisTypo]}
          >
            DERIVATIVOS FINANCEIROS
          </Text>
          <View style={[styles.icons8Dinheiro1002, styles.classPosition]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iphone14Pro52Inner5, styles.rectangleInnerLayout]}
        onPress={() => navigation.navigate("Stop")}
      >
        <View style={[styles.rectangleParent, styles.rectangleInnerLayout]}>
          <View style={[styles.rectangleView, styles.groupChild11Border]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild12Layout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-100.png")}
          />
          <Text style={[styles.bloqueado3, styles.bloqueadoTypo]}>
            Bloqueado
          </Text>
          <Text style={[styles.implicaesFiscais, styles.implicaesFiscaisTypo]}>
            IMPLICAÇÕES FISCAIS
          </Text>
          <View style={[styles.icons8Dinheiro1002, styles.classPosition]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iphone14Pro52Inner6, styles.iphone14InnerLayout]}
        onPress={() => navigation.navigate("Stop")}
      >
        <View style={[styles.rectangleParent3, styles.iphone14InnerLayout]}>
          <View style={[styles.groupChild11, styles.iphone14InnerLayout]} />
          <Image
            style={[styles.groupChild12, styles.groupChild12Layout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-100.png")}
          />
          <Text style={[styles.bloqueado6, styles.bloqueadoTypo]}>
            Bloqueado
          </Text>
          <Text
            style={[
              styles.investimentoResponsavel,
              styles.investimentoResponsavelTypo,
            ]}
          >
            INVESTIMENTO RESPONSAVEL
          </Text>
          <View style={[styles.icons8Dinheiro1002, styles.classPosition]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iphone14Pro52Inner7, styles.iphone14InnerLayout]}
        onPress={() => navigation.navigate("Stop")}
      >
        <View style={[styles.rectangleParent3, styles.iphone14InnerLayout]}>
          <View style={[styles.groupChild11, styles.iphone14InnerLayout]} />
          <Image
            style={[styles.groupChild12, styles.groupChild12Layout]}
            contentFit="cover"
            source={require("../../../assets/rectangle-100.png")}
          />
          <Text style={[styles.bloqueado6, styles.bloqueadoTypo]}>
            Bloqueado
          </Text>
          <Text
            style={[
              styles.educaoFinanceiraContnua,
              styles.investimentoResponsavelTypo,
            ]}
          >
            EDUCAÇÃO FINANCEIRA CONTÍNUA
          </Text>
          <View style={[styles.icons8Dinheiro1002, styles.classPosition]} />
        </View>
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  vectorParentLayout: {
    height: 78,
    width: 197,
    position: "absolute",
  },
  parentPosition: {
    top: 0,
    left: 0,
  },
  groupLayout1: {
    width: 184,
    position: "absolute",
  },
  cashTypo: {
    transform: [
      {
        rotate: "2.6deg",
      },
    ],
    height: 22,
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 34,
    position: "absolute",
  },
  classClr: {
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
  },
  licao1Layout: {
    height: 48,
    width: 48,
    top: 147,
    position: "absolute",
  },
  proxmoTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 34,
    width: 350,
    left: -26,
    top: 4,
    position: "absolute",
  },
  proxmoTypo3: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 34,
    width: 350,
    left: 23,
    top: 236,
    position: "absolute",
  },
  iconPosition: {
    top: 370,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 298,
    position: "absolute",
  },
  rectangleInnerLayout: {
    height: 103,
    width: 336,
    position: "absolute",
  },
  groupChild11Border: {
    borderColor: Color.colorGray,
    backgroundColor: Color.colorSnow,
    borderRadius: Border.br_3xl,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  groupChild12Layout: {
    height: 35,
    width: 169,
    borderRadius: Border.br_mini,
    left: 84,
    position: "absolute",
  },
  bloqueadoTypo1: {
    width: 90,
    fontSize: FontSize.size_base,
    left: 123,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray,
    lineHeight: 24,
    position: "absolute",
  },
  queTypo: {
    height: 31,
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    top: 11,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray,
    lineHeight: 34,
    position: "absolute",
  },
  queTypo2: {
    height: 20,
    width: 300,
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    top: 15,
    left: 23,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray,
    lineHeight: 25,
    position: "absolute",
  },
  classPosition: {
    top: 42,
    position: "absolute",
  },
  bloqueadoTypo: {
    height: 19,
    width: 90,
    fontSize: FontSize.size_base,
    left: 125,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray,
    lineHeight: 20,
    position: "absolute",
  },
  implicaesFiscaisTypo: {
    height: 32,
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray,
    lineHeight: 34,
    top: 10,
    position: "absolute",
  },
  iphone14InnerLayout: {
    height: 138,
    width: 336,
    position: "absolute",
  },
  investimentoResponsavelTypo: {
    height: 63,
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray,
    lineHeight: 34,
    top: 6,
    position: "absolute",
  },
  iphone14Pro52Child: {
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
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 1,
    left: 1,
    height: 39,
  },
  groupItem: {
    top: 37,
    left: 13,
    height: 40,
  },
  cash: {
    left: 70,
    width: 65,
    top: 11,
    color: Color.colorGray,
    transform: [
      {
        rotate: "-2.52deg",
      },
    ],
    height: 22,
    lineHeight: 30,
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_5xl,
  },
  class: {
    transform: [
      {
        rotate: "2.6deg",
      },
    ],
    height: 22,
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 34,
    position: "absolute",
    left: 78,
    top: 43,
  },
  vectorParent: {
    height: 78,
    width: 197,
    position: "absolute",
  },
  iphone14Pro52Inner: {
    left: 97,
    top: 56,
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
  situao2Desbravando: {
    top: 238,
    left: 44,
    fontSize: 32,
    color: "#f5be00",
    width: 309,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
  },
  lucroFinanceiro1Icon: {
    left: 92,
    width: 85,
    height: 85,
  },
  carrinhoCarrinho1Icon: {
    left: 211,
    width: 96,
    height: 96,
  },
  groupInner: {
    borderRadius: Border.br_3xl,
    width: 298,
    top: 0,
    left: 0,
  },
  proxmo: {
    top: 5,
    left: 103,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
  },
  vectorGroup: {
    top: 1627,
    left: 47,
  },
  rectangleView: {
    height: 103,
    width: 336,
    position: "absolute",
  },
  rectangleIcon: {
    top: 52,
  },
  bloqueado: {
    top: 58,
  },
  oQueSo: {
    left: 68,
    width: 200,
  },
  icons8Dinheiro1002: {
    left: 10,
    width: 50,
    height: 50,
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  groupPressable: {
    top: 496,
    left: 28,
  },
  bloqueado1: {
    top: 58,
  },
  bloqueado10: {
    top: 56,
  },
  iphone14Pro52Inner1: {
    top: 627,
    left: 28,
  },
  oQueSo1: {
    left: 37,
    width: 263,
  },
  iphone14Pro52Inner2: {
    top: 758,
    left: 28,
  },
  bloqueado3: {
    top: 60,
  },
  dividendosERendimentos: {
    left: 22,
    width: 299,
  },
  iphone14Pro52Inner3: {
    top: 889,
    left: 28,
  },
  derivativosFinanceiros: {
    left: 29,
    width: 278,
  },
  iphone14Pro52Inner4: {
    top: 1020,
    left: 28,
  },
  implicaesFiscais: {
    left: 56,
    width: 224,
  },
  iphone14Pro52Inner5: {
    top: 1151,
    left: 28,
  },
  groupChild11: {
    borderColor: Color.colorGray,
    backgroundColor: Color.colorSnow,
    borderRadius: Border.br_3xl,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  groupChild12: {
    top: 79,
  },
  bloqueado6: {
    top: 85,
  },
  investimentoResponsavel: {
    width: 168,
    left: 84,
    height: 63,
  },
  rectangleParent3: {
    top: 0,
    left: 0,
  },
  iphone14Pro52Inner6: {
    top: 1282,
    left: 28,
  },
  educaoFinanceiraContnua: {
    left: 50,
    width: 236,
  },
  iphone14Pro52Inner7: {
    top: 1448,
    left: 28,
  },
  iphone14Pro52: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 1713,
    overflow: "hidden",
    width: "100%",
  },
});
