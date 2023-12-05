import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "./GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Comp3({navigation}){
  return (
    <ScrollView>
    <View style={styles.iphone14Pro51}>
      <View style={[styles.iphone14Pro51Child, styles.iphone14Layout]} />
      <Text style={[styles.prs, styles.prsTypo]}>Prós</Text>
      <Text style={[styles.contras, styles.prsTypo]}>Contras</Text>
      <Text
        style={[styles.controleEPropriedadeContainer, styles.containerTypo]}
      >
        <Text style={styles.controleEPropriedadeContainer1}>
          <Text
            style={styles.controleEPropriedade}
          >{`Controle e propriedade direta: 
`}</Text>
          <Text
            style={styles.aoConstruirUma}
          >{`Ao construir uma casa para aluguel, você tem controle sobre o imóvel e pode decidir sobre sua manutenção, reformas e aluguel.

`}</Text>
          <Text style={styles.controleEPropriedade}>
            Potencial de valorização:
          </Text>
          <Text
            style={styles.aoConstruirUma}
          >{` Dependendo da localização e das tendências do mercado imobiliário, a propriedade pode se valorizar ao longo do tempo, aumentando seu valor de revenda.

`}</Text>
          <Text style={styles.controleEPropriedade}>{`Flexibilidade de gestão: 
`}</Text>
          <Text style={styles.aoConstruirUma}>
            Você pode decidir sobre os inquilinos, os termos do contrato de
            aluguel e o tipo de manutenção que a propriedade requer.
          </Text>
        </Text>
      </Text>
      <Text
        style={[styles.custosIniciaisElevadosContainer, styles.containerTypo]}
      >
        <Text style={styles.controleEPropriedadeContainer1}>
          <Text
            style={styles.custosIniciaisElevados}
          >{`Custos iniciais elevados:
`}</Text>
          <Text
            style={styles.aoConstruirUma}
          >{`Construir uma casa requer um investimento inicial significativo em terreno, materiais, mão de obra, licenças e outros custos associados à construção.

`}</Text>
          <Text style={styles.custosIniciaisElevados}>Riscos de vacância:</Text>
          <Text style={styles.aoConstruirUma}>{` 
Se a demanda por aluguéis na área for baixa ou houver problemas para atrair inquilinos, você pode enfrentar períodos de vacância, resultando na ausência de renda.

`}</Text>
          <Text
            style={styles.custosIniciaisElevados}
          >{`Responsabilidades de gerenciamento:
`}</Text>
          <Text style={styles.aoConstruirUma}>
            Ser proprietário de um imóvel alugado implica em responsabilidades
            de manutenção, gerenciamento de inquilinos e possíveis custos
            imprevistos de reparos.
          </Text>
        </Text>
      </Text>
      <Text style={[styles.casaDeAluguel, styles.prsTypo]}>
        Casa de aluguel
      </Text>
      <Image
        style={styles.casaLimpa1Icon}
        contentFit="cover"
        source={require("../../../assets/casalimpa-1.png")}
      />
      <Text style={[styles.comparaes, styles.containerTypo]}>Comparações</Text>
      <Image
        style={[styles.iphone14Pro51Item, styles.iphone14Layout]}
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
    left: 150,
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
  iphone14Pro51Child: {
    top: 137,
    left: 28,
    backgroundColor: "#bbb",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 336,
    height: 1946,
  },
  prs: {
    top: 277,
    left: 165,
    width: 62,
    color: Color.colorBlue,
  },
  contras: {
    top: 1098,
    left: 155,
    width: 85,
    color: Color.colorRed,
  },
  controleEPropriedade: {
    color: Color.colorBlue,
  },
  aoConstruirUma: {
    color: Color.colorBlack,
    lineHeight: 31,
  },
  controleEPropriedadeContainer1: {
    width: "100%",
  },
  controleEPropriedadeContainer: {
    top: 321,
    left: 54,
    width: 286,
    height: 748,
    alignItems: "center",
    fontSize: FontSize.size_xl,
  },
  custosIniciaisElevados: {
    color: Color.colorRed,
  },
  custosIniciaisElevadosContainer: {
    top: 1159,
    left: 55,
    width: 283,
    height: 893,
    alignItems: "center",
    fontSize: FontSize.size_xl,
  },
  casaDeAluguel: {
    top: 203,
    left: 166,
    width: 159,
    color: Color.colorBlack,
  },
  casaLimpa1Icon: {
    top: 187,
    left: 56,
    width: 72,
    height: 72,
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
  iphone14Pro51Item: {
    height: "2.03%",
    width: "75.83%",
    top: "95.63%",
    right: "12.21%",
    bottom: "2.34%",
    left: "11.96%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  voltar: {
    fontSize: 24,
    left: -2,
    color: "#fff",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  vamos: {
    left: "40.97%",
    top: "95.9%",
    position: "absolute",
  },
  iphone14Pro51: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 2221,
    overflow: "hidden",
    width: "100%",
  },
});
