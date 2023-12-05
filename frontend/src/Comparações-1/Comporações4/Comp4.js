import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView} from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "./GlobalStyles";

export default function Comp4({navigation}){
  return (
    <ScrollView>
    <View style={styles.iphone14Pro69}>
      <View style={[styles.iphone14Pro69Child, styles.iphone14Layout]} />
      <Text style={[styles.prs, styles.prsTypo]}>Prós</Text>
      <Text style={[styles.contras, styles.prsTypo]}>Contras</Text>
      <Text
        style={[
          styles.diversificaoDeInvestimentoContainer,
          styles.containerTypo,
        ]}
      >
        <Text style={styles.diversificaoDeInvestimentoContainer1}>
          <Text
            style={styles.diversificaoDeInvestimento}
          >{`Diversificação de investimento:
`}</Text>
          <Text
            style={styles.fundosOferecemExposio}
          >{`Fundos oferecem exposição a vários imóveis, reduzindo o risco associado à propriedade única.

`}</Text>
          <Text style={styles.diversificaoDeInvestimento}>
            Liquidez e acessibilidade:
          </Text>
          <Text
            style={styles.fundosOferecemExposio}
          >{` Permitem investir com um valor inicial menor e são mais líquidos, permitindo compra e venda de cotas.

`}</Text>
          <Text style={styles.diversificaoDeInvestimento}>{`Gestão profissional:
`}</Text>
          <Text style={styles.fundosOferecemExposio}>
            Equipes profissionais cuidam da administração, manutenção e locação
            dos imóveis, poupando o investidor dessas responsabilidades diretas.
          </Text>
        </Text>
      </Text>
      <Text style={[styles.dependnciaDaGestoContainer, styles.containerTypo]}>
        <Text style={styles.diversificaoDeInvestimentoContainer1}>
          <Text
            style={styles.dependnciaDaGesto}
          >{`Dependência da gestão do fundo:
`}</Text>
          <Text
            style={styles.fundosOferecemExposio}
          >{`Qualidade da gestão pode variar, levando a retornos menores do que o esperado.

`}</Text>
          <Text
            style={styles.dependnciaDaGesto}
          >{`Menos controle sobre ativos individuais:
`}</Text>
          <Text
            style={styles.fundosOferecemExposio}
          >{`Investidores não têm controle direto sobre os imóveis específicos nos quais estão investindo.

`}</Text>
          <Text style={styles.dependnciaDaGesto}>{`Riscos de mercado:
`}</Text>
          <Text style={styles.fundosOferecemExposio}>
            O desempenho dos fundos pode ser afetado por flutuações do mercado
            imobiliário e outros fatores macroeconômicos.
          </Text>
        </Text>
      </Text>
      <Text style={[styles.fundoImobilirio, styles.prsTypo]}>
        Fundo Imobiliário
      </Text>
      <Image
        style={styles.imobiliaria1Icon}
        contentFit="cover"
        source={require("../../../assets/imobiliaria-1.png")}
      />
      <Text style={[styles.comparaes, styles.containerTypo]}>Comparações</Text>
      <Image
        style={[styles.iphone14Pro69Item, styles.iphone14Layout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-37.png")}
      />
      <Pressable style={styles.vamos} onPress={() => navigation.navigate("Comp3")}>
        <Text style={styles.voltar} onPress={() => navigation.navigate("Comp3")}>Voltar</Text>
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iphone14Layout: {
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  prsTypo: {
    height: 32,
    alignItems: "flex-end",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  containerTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  iphone14Pro69Child: {
    top: 137,
    left: 28,
    backgroundColor: "#bbb",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 336,
    height: 1672,
  },
  prs: {
    top: 277,
    left: 165,
    width: 62,
    color: Color.colorBlue,
  },
  contras: {
    top: 1030,
    left: 155,
    width: 85,
    color: Color.colorRed,
  },
  diversificaoDeInvestimento: {
    color: Color.colorBlue,
  },
  fundosOferecemExposio: {
    color: Color.colorBlack,
  },
  diversificaoDeInvestimentoContainer1: {
    width: "100%",
  },
  diversificaoDeInvestimentoContainer: {
    top: 321,
    width: 286,
    height: 680,
    left: 54,
    fontSize: FontSize.size_xl,
    alignItems: "center",
  },
  dependnciaDaGesto: {
    color: Color.colorRed,
  },
  dependnciaDaGestoContainer: {
    top: 1091,
    left: 56,
    width: 283,
    height: 652,
    fontSize: FontSize.size_xl,
    alignItems: "center",
  },
  fundoImobilirio: {
    top: 203,
    left: 160,
    width: 176,
    color: Color.colorBlack,
  },
  imobiliaria1Icon: {
    top: 187,
    width: 64,
    height: 64,
    left: 54,
    position: "absolute",
  },
  comparaes: {
    top: 67,
    left: 92,
    fontSize: 28,
    color: "#f5be00",
    width: 209,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  iphone14Pro69Item: {
    height: "2.35%",
    width: "75.83%",
    top: "95.83%",
    right: "12.21%",
    bottom: "1.82%",
    left: "11.96%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  voltar: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    left: -8,
  },
  vamos: {
    left: "42.75%",
    top: "96.14%",
    position: "absolute",
  },
  iphone14Pro69: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 1918,
    overflow: "hidden",
    width: "100%",
  },
});
