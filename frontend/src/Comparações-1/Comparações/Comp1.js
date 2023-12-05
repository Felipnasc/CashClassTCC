import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Comp1({navigation}){
  return (
    <ScrollView>
    <View style={styles.iphone14Pro67}>
      <View style={styles.iphone14Pro67Child} />
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
      <Image
        style={[styles.comparacao11, styles.licao1Layout]}
        contentFit="cover"
        source={require("../../../assets/comparacao-1-1.png")}
      />
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
      <Text style={styles.comparaes}>Comparações</Text>
      <Image
        style={styles.testeRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../../../assets/testeremovebgpreview-1.png")}
      />
      <Text style={styles.vamosCompararProdutos}>
        Vamos comparar produtos e ações ao longo de alguns anos e apresentar
        explicações sobre ambos.
      </Text>
      <View
        style={[styles.iphone14Pro67Inner, styles.iphone14Pro67InnerLayout]}
      >
        <View
          style={[
            styles.icons8Dinheiro1002Wrapper,
            styles.rectangleParentPosition,
          ]}
        >
          <View
            style={[
              styles.icons8Dinheiro1002Wrapper,
              styles.rectangleParentPosition,
            ]}
          />
        </View>
      </View>
      <Pressable
        style={[styles.iphone14Pro67Inner1, styles.groupInnerLayout]}
        onPress={() => {}}
      >
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
          <Text style={[styles.x, styles.xTypo]}>X</Text>
          <Text style={[styles.credito, styles.creditoTypo]}>Credito</Text>
          <View style={[styles.icons8Dinheiro10021, styles.icons8Position]} />
        </View>
      </Pressable>

      <Pressable
        style={[styles.groupPressable, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("Comp3")}
      >
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
          <View style={[styles.icons8Dinheiro10021, styles.icons8Position]} />
        </View>
      </Pressable>
      <Image
        style={[styles.imobiliaria1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/imobiliaria-1.png")}
      />
      <Image
        style={styles.casaLimpa1Icon}
        contentFit="cover"
        source={require("../../../assets/casalimpa-1.png")}
      />
      <Text style={[styles.casaDeAluguel, styles.dbitoTypo]} onPress={() => navigation.navigate("Comp3")}>
        Casa de aluguel
      </Text>
      <Text style={[styles.fundoImobilirio, styles.dbitoTypo]} onPress={() => navigation.navigate("Comp3")}>
        Fundo Imobiliário
      </Text>


      <Text style={[styles.dbito, styles.dbitoTypo]}>Débito</Text>
      <Image
        style={[styles.cartaoDeDebito1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/cartaodedebito-1.png")}
      />
      <Image
        style={[styles.semContato1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/semcontato-1.png")}
      />
      <Pressable
        style={[styles.iphone14Pro67Inner2, styles.groupInnerLayout]}
        onPress={() => {}}
      >
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
          <Text style={[styles.x, styles.xTypo]}>X</Text>
          <Text style={[styles.necessidades, styles.creditoTypo]}>
            Necessidades
          </Text>
          <Text style={[styles.desejos, styles.creditoTypo]}>Desejos</Text>
          <View style={[styles.icons8Dinheiro10021, styles.icons8Position]} />
        </View>
      </Pressable>
      <Image
        style={[styles.preciso1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/preciso-1.png")}
      />
      <Image
        style={[styles.expectativa1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/expectativa-1.png")}
      />
      <Pressable
        style={[styles.groupParent, styles.groupViewLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <View style={[styles.icons8Dinheiro10024, styles.icons8Position]} />
        </View>
        <Text style={[styles.oramentoMensal, styles.oramentoMensalTypo]}>
          Orçamento Mensal
        </Text>
        <Text style={[styles.objetivosFinanceiros, styles.oramentoMensalTypo]}>
          Objetivos Financeiros
        </Text>
        <Text style={[styles.x, styles.xTypo]}>X</Text>
      </Pressable>
      <Image
        style={[styles.conselheiroFinanceiro1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/conselheirofinanceiro-1.png")}
      />
      <Image
        style={[styles.salario1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/salario-1.png")}
      />
      <Pressable
        style={[styles.groupContainer, styles.groupLayout]}
        onPress={() => {}}
      >
        <View style={[styles.rectangleParent1, styles.groupLayout]}>
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Text style={[styles.rendaFixa, styles.rendaTypo]}>Renda Fixa</Text>
          <Text style={[styles.rendaVarivel, styles.rendaTypo]}>
            Renda Variável
          </Text>
          <View style={[styles.icons8Dinheiro10025, styles.icons8Position]} />
        </View>
        <Text style={[styles.x, styles.xTypo]}>X</Text>
      </Pressable>
      <Image
        style={[styles.fixo1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/fixo-1.png")}
      />
      <Image
        style={[styles.variavel1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../../assets/variavel-1.png")}
      />
      <Text style={[styles.x4, styles.xTypo]}>X</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  licao1Layout: {
    height: 48,
    width: 48,
    top: 147,
    position: "absolute",
  },
  iphone14Pro67InnerLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 0,
    left: 0,
  },
  groupInnerLayout: {
    height: 119,
    width: 336,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorLightgray,
    borderRadius: Border.br_3xl,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  icons8Position: {
    left: 10,
    width: 50,
    position: "absolute",
  },
  xTypo: {
    height: 26,
    width: 32,
    color: Color.colorBlue,
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  creditoTypo: {
    fontSize: FontSize.size_base,
    height: 26,
    color: Color.colorBlue,
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  iconLayout: {
    height: 64,
    width: 64,
    position: "absolute",
  },
  dbitoTypo: {
    height: 28,
    fontSize: FontSize.size_base,
    color: Color.colorBlue,
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  iconPosition: {
    top: 764,
    height: 64,
    width: 64,
    position: "absolute",
  },
  groupViewLayout: {
    height: 165,
    width: 336,
    position: "absolute",
  },
  oramentoMensalTypo: {
    height: 71,
    width: 97,
    top: 83,
    fontSize: FontSize.size_base,
    color: Color.colorBlue,
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  groupLayout: {
    height: 139,
    width: 336,
    position: "absolute",
  },
  rendaTypo: {
    height: 30,
    fontSize: FontSize.size_base,
    color: Color.colorBlue,
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  iphone14Pro67Child: {
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
  comparaes: {
    top: 236,
    left: 100,
    fontSize: 28,
    alignItems: "center",
    width: 209,
    height: 38,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGold,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  testeRemovebgPreview1Icon: {
    top: 39,
    left: 92,
    width: 208,
    height: 111,
    position: "absolute",
  },
  vamosCompararProdutos: {
    top: 302,
    left: 20,
    width: 352,
    height: 133,
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGold,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  icons8Dinheiro1002Wrapper: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  iphone14Pro67Inner: {
    top: 803,
    left: 37,
  },
  groupChild: {
    height: 119,
    width: 336,
    position: "absolute",
  },
  icons8Dinheiro10021: {
    top: 49,
    height: 58,
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  groupPressable: {
    top: 463,
    left: 28,
  },
  x: {
    top: 41,
    left: 152,
  },
  credito: {
    width: 70,
    top: 77,
    fontSize: FontSize.size_base,
    left: 37,
  },
  iphone14Pro67Inner1: {
    top: 610,
    left: 28,
  },
  imobiliaria1Icon: {
    left: 256,
    top: 475,
  },
  casaLimpa1Icon: {
    left: 64,
    width: 72,
    height: 72,
    top: 475,
    position: "absolute",
  },
  casaDeAluguel: {
    left: 36,
    width: 129,
    top: 543,
    height: 28,
  },
  fundoImobilirio: {
    left: 218,
    width: 140,
    top: 543,
    height: 28,
  },
  dbito: {
    top: 687,
    left: 260,
    width: 57,
  },
  cartaoDeDebito1Icon: {
    top: 621,
    left: 256,
  },
  semContato1Icon: {
    top: 624,
    left: 68,
  },
  necessidades: {
    top: 79,
    left: 16,
    width: 112,
  },
  desejos: {
    left: 228,
    width: 65,
    top: 79,
    fontSize: FontSize.size_base,
  },
  iphone14Pro67Inner2: {
    top: 757,
    left: 28,
  },
  preciso1Icon: {
    left: 68,
  },
  expectativa1Icon: {
    left: 256,
  },
  rectangleView: {
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorLightgray,
    borderRadius: Border.br_3xl,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  icons8Dinheiro10024: {
    top: 67,
    height: 80,
  },
  groupView: {
    top: 0,
    left: 0,
  },
  oramentoMensal: {
    left: 24,
  },
  objetivosFinanceiros: {
    left: 212,
    top:2
  },
  groupParent: {
    top: 904,
    left: 28,
  },
  conselheiroFinanceiro1Icon: {
    top: 919,
    left: 256,
  },
  salario1Icon: {
    top: 925,
    left: 68,
  },
  groupChild1: {
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorLightgray,
    borderRadius: Border.br_3xl,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  rendaFixa: {
    top: 88,
    width: 88,
    left: 28,
  },
  rendaVarivel: {
    top: 88,
    left: 200,
    width: 120,
  },
  icons8Dinheiro10025: {
    top: 57,
    height: 67,
  },
  rectangleParent1: {
    top: 0,
    left: 0,
  },
  groupContainer: {
    top: 1097,
    left: 28,
  },
  fixo1Icon: {
    top: 1111,
    left: 68,
  },
  variavel1Icon: {
    top: 1112,
    left: 256,
  },
  x4: {
    top: 510,
    left: 180,
  },
  iphone14Pro67: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 1291,
    overflow: "hidden",
    width: "100%",
  },
});
