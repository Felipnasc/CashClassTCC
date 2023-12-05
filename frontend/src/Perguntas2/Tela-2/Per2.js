import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { FontFamily, Border, Color, FontSize } from "./GlobalStyles";

export default function Per2({navigation}){
  
  return (
    <ScrollView>
    <View style={styles.Per2}>
      <View style={[styles.vectorParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        <Text style={[styles.tiposDeImpostos, styles.proxmoTypo]}>
          Tipos de impostos
        </Text>
      </View>
      <Pressable style={styles.icons8Esquerda308}  onPress={() => navigation.navigate('Per1')}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>

      <Pressable
        style={[styles.vectorGroup, styles.groupLayout]}
        onPress={() => navigation.navigate('Per3')}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-37.png")}
        />
        </Pressable>
     <Text style={[styles.proxmo, styles.oQueTypo]} onPress={() => navigation.navigate('Per3')}>Proxímo</Text>

      <Text style={[styles.noBrasilInvestir, styles.proxmoTypo]}>
        No Brasil, investir é uma jornada marcada por tributações
        significativas. O Imposto de Renda, que varia conforme o prazo e o tipo
        de investimento, incide diretamente sobre os lucros obtidos. Além disso,
        desde 2022, os dividendos distribuídos por empresas também estão
        sujeitos a tributação, impactando o retorno dos investidores. É um
        cenário desafiador que exige estratégia e planejamento para maximizar os
        ganhos.
      </Text>
      <Text style={[styles.noBrasilInvestir2, styles.proxmoTypo2]}>
      No Brasil, investidores enfrentam o IOF-Câmbio ao comprar moeda estrangeira e o Imposto sobre Ganhos de Capital na venda de ações e imóveis com lucro. 
      Eles adotam estratégias, como selecionar ativos com menos impostos e aproveitar isenções, para otimizar seus retornos financeiros.
      </Text>
      <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../../../assets/ideia.png")}
        />
        <Image
          style={styles.icon3}
          contentFit="cover"
          source={require("../../../assets/estudar.png")}
        />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 45,
    width: 298,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 45,
    width: 298,
    position: "absolute",
  },
  groupChild2: {
    borderRadius: 22,
  },
  iphone14Pro38Inner: {
    top: 1257,
    left: 47,
    height: 45,
    width: 298,
  },
  proxmoTypo2: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  groupChild: {
    top: 650,
    left: 0,
    borderRadius: Border.br_3xl,
  },
  groupChild1: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xl,
  },
  tiposDeImpostos: {
    left: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    top: 5,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  vectorParent: {
    top: 77,
    left: 51,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icon2: {
    height: 50,
    width: 50,
    top: 140,
    left: 240,
    rotation: 45,
  },
  icon3: {
    height: 130,
    width: 150,
    top: 120,
    left: 110,
  },
  icons8Esquerda308: {
    left: 29,
    top: 41,
    width: 38,
    height: 36,
    position: "absolute",
  },
  proxmo: {
    left: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    top: 1257,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  vectorGroup: {
    top: 603,
    left: 47,
  },
  noBrasilInvestir: {
    top: 115,
    left: 27,
    fontSize: 20,
    color: "#f5be00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 339,
    height: 475,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  noBrasilInvestir2: {
    top: 870,
    left: 27,
    fontSize: 20,
    color: "#f5be00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 339,
    height: 335,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  Per2: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 1350,
    overflow: "hidden",
    width: "100%",
  },
});
